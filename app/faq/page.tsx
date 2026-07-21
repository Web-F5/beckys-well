import type { Metadata } from 'next'
import FaqAccordion from '@/components/faq-accordion'
import CtaSection from '@/components/cta-section'
import { faqs } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "FAQ | Becky's Well",
  description: "Answers to common questions about confidentiality, appointments, cost and support for partners at Becky's Well.",
}

export default function FaqPage() {
  return (
    <>
      <section className="px-4 pb-12 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand)' }}
          >
            FAQ
          </span>
          <h1 className="mb-5 text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Questions people often ask
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            If you don&apos;t see your question here, please reach out — we&apos;re happy to talk it through.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 font-heading text-xl font-extrabold text-foreground">General Questions</h2>
          <FaqAccordion items={faqs.general} />
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 font-heading text-xl font-extrabold text-foreground">For Partners &amp; Men</h2>
          <FaqAccordion items={faqs.partners} />
        </div>
      </section>

      <CtaSection />
    </>
  )
}
