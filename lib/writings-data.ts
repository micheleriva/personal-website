import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export interface Writing {
  slug: string
  title: string
  date: string
  year: number
  abstract: string
  content: string
  keywords: string[]
  image?: string
  authorshipReportUrl?: string
}

const writingsDirectory = path.join(process.cwd(), 'writings')

export function getAllWritings(): Writing[] {
  // Get all MDX files from the writings directory
  const fileNames = fs.readdirSync(writingsDirectory)
  const writings = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read markdown file as string
      const fullPath = path.join(writingsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents)

      // Parse the date
      const pubDate = new Date(data.pubDate)
      const year = pubDate.getFullYear()
      const month = pubDate.toLocaleDateString('en-US', { month: 'long' })
      const day = pubDate.getDate()

      // Use keywords from frontmatter if present, otherwise extract from title and description
      const keywords = data.keywords || extractKeywords(data.title, data.description)

      return {
        slug,
        title: data.title,
        date: `${year}, ${month} ${day}`,
        year,
        abstract: data.description,
        content: content,
        keywords,
        image: data.image,
        authorshipReportUrl: data.authorshipReportUrl,
      }
    })

  // Sort writings by date in descending order
  return writings.sort((a, b) => b.year - a.year)
}

export function getWritingBySlug(slug: string): Writing | undefined {
  try {
    const fullPath = path.join(writingsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Parse the date
    const pubDate = new Date(data.pubDate)
    const year = pubDate.getFullYear()
    const month = pubDate.toLocaleDateString('en-US', { month: 'long' })
    const day = pubDate.getDate()

    // Use keywords from frontmatter if present, otherwise extract from title and description
    const keywords = data.keywords || extractKeywords(data.title, data.description)

    return {
      slug,
      title: data.title,
      date: `${year}, ${month} ${day}`,
      year,
      abstract: data.description,
      content: content,
      keywords,
      image: data.image,
      authorshipReportUrl: data.authorshipReportUrl,
    }
  } catch {
    return undefined
  }
}

// Helper function to extract simple keywords from title and description
function extractKeywords(title: string, description: string): string[] {
  const commonWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'is', 'are', 'was', 'were', 'been', 'be', 'have', 'has',
    'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may',
    'might', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he',
    'she', 'it', 'we', 'they', 'from', 'as', 'by', 'not', 'so', 'than',
  ])

  const text = `${title} ${description}`.toLowerCase()
  const words = text.match(/\b[a-z]{3,}\b/g) || []

  // Filter out common words and get unique keywords
  const keywords = [...new Set(words)]
    .filter(word => !commonWords.has(word))
    .slice(0, 6) // Limit to 6 keywords

  return keywords
}
