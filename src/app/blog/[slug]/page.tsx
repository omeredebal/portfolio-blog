import { getPostContent } from '@/lib/blog-loader';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface BlogPostPageProps {
  params: { slug: string };
}

export default function Page({ params }: BlogPostPageProps) {
  return <BlogPost slug={params.slug} />;
}

async function BlogPost({ slug }: { slug: string }) {
  try {
    const post = await getPostContent(slug);

    if (!post) {
      notFound();
    }

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
    );
  } catch {
    notFound();
  }
}
