import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Droplet } from 'lucide-react'
import PlaceholderImage from '@/components/placeholder-image'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: "Blog | Becky's Well",
  description: "Supportive articles on unplanned pregnancy, pregnancy loss, and what to expect from Becky's Well.",
}

export default function BlogPage() {
  return (
    <>
      <section className="px-4 pb-12 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand)' }}
          >
            Blog
          </span>
          <h1 className="mb-5 text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Gentle reading, when you need it
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            General, supportive articles — not medical or legal advice. If you need guidance specific to your
            situation, please get in touch directly.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <PlaceholderImage
                tone={i % 3 === 0 ? 'warm' : i % 3 === 1 ? 'soft' : 'sage'}
                icon={Droplet}
                className="aspect-[16/10] w-full rounded-none"
              />
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  {' · '}
                  {post.readTime}
                </p>
                <h2 className="font-heading text-lg font-extrabold text-foreground">{post.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-(--color-brand)">
                  Read more
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
