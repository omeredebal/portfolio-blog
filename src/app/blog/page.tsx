import { blogPosts, BlogPost } from '@/lib/blog'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Makaleler</h2>
      <ul className="space-y-6">
        {blogPosts.map((post: BlogPost) => (
          <li key={post.slug} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-1">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString('tr-TR')}</p>
            <p className="text-gray-700 mb-3">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              Yazıyı Oku →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
