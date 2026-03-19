import fs from 'fs'
import path from 'path'

const TOPICS_FILE = path.join(process.cwd(), 'data/topics.json')
const USED_FILE = path.join(process.cwd(), 'data/topics-used.json')

export interface Topic {
  id: number
  title: string
  keywords: string[]
  category: string
}

export function getNextTopic(): Topic | null {
  const topics: Topic[] = JSON.parse(fs.readFileSync(TOPICS_FILE, 'utf8'))
  const used: number[] = JSON.parse(fs.readFileSync(USED_FILE, 'utf8'))

  const remaining = topics.filter(t => !used.includes(t.id))

  if (remaining.length === 0) {
    console.error('All topics have been used! Refill data/topics.json.')
    return null
  }

  if (remaining.length < 14) {
    console.warn(`Warning: Only ${remaining.length} topics remaining. Add more to data/topics.json.`)
  }

  return remaining[0]
}

export function markTopicUsed(id: number): void {
  const used: number[] = JSON.parse(fs.readFileSync(USED_FILE, 'utf8'))
  used.push(id)
  fs.writeFileSync(USED_FILE, JSON.stringify(used, null, 2))
}
