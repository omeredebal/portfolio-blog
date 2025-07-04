export type BlogPost = {
  slug: string
  title: string
  summary: string
  date: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'nextjs-ile-baslamak',
    title: 'Next.js ile Başlamak',
    summary: 'Next.js framework’üne yeni başlayanlar için temel bilgiler ve ipuçları.',
    date: '2025-06-15'
  },
  {
    slug: 'graphql-nedir',
    title: 'GraphQL Nedir?',
    summary: 'GraphQL’in temelleri, REST’ten farkları ve kullanım alanları.',
    date: '2025-06-20'
  }
]
