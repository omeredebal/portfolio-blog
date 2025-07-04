export type Project = {
  id: number
  title: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portföy ve Blog Sitesi',
    description: 'Kendi projelerimi ve yazılarımı paylaştığım dinamik bir Next.js uygulaması.',
    url: 'https://github.com/omeredebal/portfolio-blog'
  },
  {
    id: 2,
    title: 'Todo Uygulaması',
    description: 'React + TypeScript ile yapılmış basit bir görev takip uygulaması.',
    url: 'https://github.com/omeredebal/todo-app'
  }
]
