import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogDirectory = path.join(process.cwd(), 'content/blog')
export function getAllPosts() {
  // Basit örnek: bu kısmı kendi markdown okuma sistemine göre özelleştir.
  return [
    { slug: 'ornek-yazi', title: 'Örnek Yazı', date: '2025-07-04', contentHtml: '<p>İçerik</p>' }
  ];
}

export async function getPostContent(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    contentHtml
  }
}
