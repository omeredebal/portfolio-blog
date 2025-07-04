import { getPostContent } from '@/lib/blog-loader'
import Link from 'next/link'

type Props = {
  params: { slug: string };
};


export default async function BlogPostPage({ params }: Props) {
  try {
    const post = await getPostContent(params.slug)

    return (
      <article>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">
          Yayın tarihi: {new Date(post.date).toLocaleDateString('tr-TR')}
        </p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <p className="mt-6">
          <Link href="/blog" className="text-sm text-blue-500 hover:underline">
            ← Tüm yazılara dön
          </Link>
        </p>
      </article>
    )
  } catch {
  // sadece catch bloğu, parametre yok!
}

}
