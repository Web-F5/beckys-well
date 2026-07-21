import type { Metadata } from 'next'
import { Quote } from 'lucide-react'
import CtaSection from '@/components/cta-section'

export const metadata: Metadata = {
  title: "Testimonials | Becky's Well",
  description: "What clients say about their experience with Becky's Well.",
}

export default function TestimonialsPage() {
  return (
    <>
      <section className="px-4 pb-12 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand)' }}
          >
            Testimonials
          </span>
          <h1 className="mb-5 text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            What clients say
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Because confidentiality is central to what we do, we only share a client&apos;s story with their
            clear, informed consent. We&apos;re just getting started, so this page will grow as clients choose
            to share their experience.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-3xl border-2 border-dashed border-border p-8 text-center"
            >
              <Quote size={28} style={{ color: 'var(--color-brand-accent)' }} />
              <p className="text-sm leading-relaxed text-muted-foreground">
                A client testimonial will appear here once shared with us and permission is given to publish it.
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        title="Willing to share your experience?"
        body="If Becky's Well has supported you and you'd like to share a few words for future clients, we'd be honoured to hear from you."
      />
    </>
  )
}
