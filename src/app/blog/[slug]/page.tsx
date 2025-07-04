import { blogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link' // ✅ bu yukarıda kalmalı

type Props = {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">
        Yayın tarihi: {new Date(post.date).toLocaleDateString('tr-TR')}
      </p>
      <div className="text-lg leading-relaxed">
        <p>
          Bu yazının içeriği şu an örnek olarak sabit yazıldı. İleride burası
          markdown veya CMS ile dinamik hale gelecek.
        </p>
      </div>

      <p className="mt-6">
        <Link href="/blog" className="text-sm text-blue-500 hover:underline">
          ← Tüm yazılara dön
        </Link>
      </p>
    </article>
  )
}
