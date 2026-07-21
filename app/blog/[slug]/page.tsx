import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Droplet } from 'lucide-react'
import PlaceholderImage from '@/components/placeholder-image'
import CtaSection from '@/components/cta-section'
import { blogPosts } from '@/lib/blog-posts'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Becky's Well`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <article className="px-4 pb-16 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[--color-brand]"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
            {' · '}
            {post.readTime}
          </p>
          <h1 className="mb-8 text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            {post.title}
          </h1>
          <PlaceholderImage tone="soft" icon={Droplet} className="mb-10 aspect-[16/9] w-full" />
          <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/90">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  )
}
