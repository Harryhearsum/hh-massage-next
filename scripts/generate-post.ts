import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'

// Kill switch
if (process.env.BLOG_GENERATION_ENABLED !== 'true') {
  console.log('Blog generation is disabled. Set BLOG_GENERATION_ENABLED=true to enable.')
  process.exit(0)
}

const TOPICS_FILE = path.join(process.cwd(), 'data/topics.json')
const USED_FILE = path.join(process.cwd(), 'data/topics-used.json')
const POSTS_DIR = path.join(process.cwd(), 'content/blog')

interface Topic {
  id: number
  title: string
  keywords: string[]
  category: string
}

// Get next unused topic
function getNextTopic(): Topic | null {
  const topics: Topic[] = JSON.parse(fs.readFileSync(TOPICS_FILE, 'utf8'))
  const used: number[] = JSON.parse(fs.readFileSync(USED_FILE, 'utf8'))
  const remaining = topics.filter(t => !used.includes(t.id))

  if (remaining.length === 0) {
    console.error('ERROR: All topics have been used! Add more to data/topics.json.')
    return null
  }

  if (remaining.length < 14) {
    console.warn(`WARNING: Only ${remaining.length} topics remaining. Add more soon.`)
  }

  return remaining[0]
}

function markTopicUsed(id: number): void {
  const used: number[] = JSON.parse(fs.readFileSync(USED_FILE, 'utf8'))
  used.push(id)
  fs.writeFileSync(USED_FILE, JSON.stringify(used, null, 2))
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function validatePost(content: string, keywords: string[]): { valid: boolean; issues: string[] } {
  const issues: string[] = []

  // Check word count (800-1200)
  const wordCount = content.split(/\s+/).length
  if (wordCount < 700) issues.push(`Too short: ${wordCount} words (min 700)`)
  if (wordCount > 1500) issues.push(`Too long: ${wordCount} words (max 1500)`)

  // Check frontmatter
  if (!content.startsWith('---')) issues.push('Missing frontmatter')
  if (!content.includes('title:')) issues.push('Missing title in frontmatter')
  if (!content.includes('description:')) issues.push('Missing description in frontmatter')
  if (!content.includes('keywords:')) issues.push('Missing keywords in frontmatter')
  if (!content.includes('category:')) issues.push('Missing category in frontmatter')

  // Check internal links
  const hasInternalLinks = content.includes('](/treatments') || content.includes('](/about') || content.includes('](/corporate') || content.includes('](/blog')
  if (!hasInternalLinks) issues.push('Missing internal links')

  // Check booking link
  if (!content.includes('book.squareup.com')) issues.push('Missing booking link')

  return { valid: issues.length === 0, issues }
}

const SYSTEM_PROMPT = `You are a blog writer for HH Massage Therapy, a sports massage and deep tissue therapy practice in Rotherham, South Yorkshire. The therapist is Harry Hearsum.

VOICE & TONE:
- Direct, second-person ("you/your"), conversational but authoritative
- Punchy sentences. No fluff. No corporate speak.
- Performance-focused — this is about results, not relaxation
- Anti-spa positioning: "No candles. No whale music. Just results."
- Naturally mention Rotherham AND Sheffield/South Yorkshire — the practice serves both areas
- Confident but not arrogant. Knowledgeable but not preachy.

STRUCTURE:
- Start with a hook that speaks to the reader's problem
- Use H2 and H3 headings to break up sections
- Use bold text for key points
- Include bullet points or numbered lists where appropriate
- End with a clear CTA to book a session

MANDATORY REQUIREMENTS:
- Word count: 800-1200 words (body text, excluding frontmatter)
- Include 2-3 internal links using markdown: [link text](/treatments), [link text](/about), or [link text](/corporate)
- Include 1 booking link: [Book a session](https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9)
- Naturally mention Rotherham at least twice and Sheffield or South Yorkshire at least once
- Write in a way that sounds human — vary sentence length, use contractions, be direct

FRONTMATTER FORMAT (must be at the very start):
---
title: "Post Title Here"
date: "YYYY-MM-DD"
description: "A compelling 1-2 sentence meta description under 160 characters."
keywords: ["keyword 1", "keyword 2", "keyword 3"]
category: "Category"
---

Do NOT wrap the output in markdown code blocks. Just output the raw markdown with frontmatter.`

async function generatePost() {
  const topic = getNextTopic()
  if (!topic) process.exit(1)

  console.log(`Generating post for topic #${topic.id}: ${topic.title}`)

  // Add Sheffield keywords alongside Rotherham
  const allKeywords = [
    ...topic.keywords,
    ...topic.keywords
      .filter(k => k.includes('Rotherham'))
      .map(k => k.replace('Rotherham', 'Sheffield')),
  ]
  const uniqueKeywords = [...new Set(allKeywords)]

  const client = new Anthropic()

  const today = new Date().toISOString().split('T')[0]

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 2000,
    messages: [
      {
        role: 'user',
        content: `Write a blog post about: "${topic.title}"

Target keywords: ${uniqueKeywords.join(', ')}
Category: ${topic.category}
Today's date: ${today}

Remember to include the frontmatter with today's date, 2-3 internal links to /treatments /about or /corporate, and a booking link. Mention both Rotherham and Sheffield/South Yorkshire naturally.`,
      },
    ],
    system: SYSTEM_PROMPT,
  })

  const postContent = (message.content[0] as { type: string; text: string }).text.trim()

  // Validate
  const { valid, issues } = validatePost(postContent, uniqueKeywords)
  if (!valid) {
    console.error('Post validation failed:')
    issues.forEach(i => console.error(`  - ${i}`))
    console.error('Generated content (first 500 chars):')
    console.error(postContent.substring(0, 500))
    process.exit(1)
  }

  // Write file
  const slug = slugify(topic.title)
  const filename = `${today}-${slug}.md`
  const filePath = path.join(POSTS_DIR, filename)

  fs.writeFileSync(filePath, postContent)
  console.log(`Post written to: ${filePath}`)

  // Mark topic as used
  markTopicUsed(topic.id)
  console.log(`Topic #${topic.id} marked as used.`)

  const wordCount = postContent.split(/\s+/).length
  console.log(`Word count: ${wordCount}`)
  console.log('Done!')
}

generatePost().catch(err => {
  console.error('Failed to generate post:', err)
  process.exit(1)
})
