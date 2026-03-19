import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  keywords: string[]
  category: string
  readTime: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))

  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    const wordCount = fileContents.split(/\s+/).length
    const readTime = `${Math.max(1, Math.ceil(wordCount / 250))} min read`

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      keywords: data.keywords || [],
      category: data.category || 'General',
      readTime,
    }
  })

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!fs.existsSync(postsDirectory)) return null

  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))
  const file = files.find(f => f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '') === slug)

  if (!file) return null

  const filePath = path.join(postsDirectory, file)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content: rawContent } = matter(fileContents)

  const processed = await remark().use(html).process(rawContent)
  const content = processed.toString()

  const wordCount = rawContent.split(/\s+/).length
  const readTime = `${Math.max(1, Math.ceil(wordCount / 250))} min read`

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    description: data.description || '',
    keywords: data.keywords || [],
    category: data.category || 'General',
    readTime,
    content,
  }
}

export function getRelatedPosts(currentSlug: string, limit = 3): PostMeta[] {
  const allPosts = getAllPosts()
  const current = allPosts.find(p => p.slug === currentSlug)
  if (!current) return allPosts.slice(0, limit)

  const scored = allPosts
    .filter(p => p.slug !== currentSlug)
    .map(post => {
      let score = 0
      if (post.category === current.category) score += 3
      const sharedKeywords = post.keywords.filter(k => current.keywords.includes(k))
      score += sharedKeywords.length
      return { ...post, score }
    })
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit)
}
