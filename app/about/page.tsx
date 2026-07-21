import type { Metadata } from 'next'
import { Droplet, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import PlaceholderImage from '@/components/placeholder-image'
import CtaSection from '@/components/cta-section'
import { org } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "About Us | Becky's Well",
  description: "Learn about Becky's Well — a confidential, non-judgemental support service for unplanned pregnancy, pregnancy loss and post-abortion support in Shepparton, VIC.",
}

const values = [
  { icon: ShieldCheck, title: 'Confidential', body: 'Your privacy matters. What you share with us is kept between us.' },
  { icon: HeartHandshake, title: 'Non-Judgemental', body: 'Whatever brought you here, and whatever you decide, you are welcome and respected.' },
  { icon: Sparkles, title: 'Client-Led', body: "We follow your pace and your priorities — this is your journey, not ours." },
]

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <span
              className="w-fit rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand)' }}
            >
              About Us
            </span>
            <h1 className="text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              A well is a quiet place to draw from
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We chose the name Becky&apos;s Well because a well is somewhere you go when you need something you
              can&apos;t always find on your own — clarity, steadiness, a moment to pause before moving forward.
              That&apos;s what we hope to offer everyone who reaches out to us.
            </p>
          </div>
          <PlaceholderImage tone="soft" icon={Droplet} className="aspect-[4/3] w-full" />
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 font-heading text-2xl font-extrabold text-foreground md:text-3xl">Our Approach</h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Becky&apos;s Well supports anyone affected by an unplanned pregnancy, miscarriage, or who is seeking
              post-abortion support. We provide clear information on the options available — adoption, abortion
              and parenting — along with life coaching and mentoring to help clients gain clarity in their
              decision-making, and referrals to the support services that matter most, from counselling to
              material aid.
            </p>
            <p>
              We don&apos;t come to a conversation with an agenda about what you should choose. Our role is to
              make sure you have accurate information, a listening ear, and practical support around you — so
              that whatever you decide, you decide it with clarity rather than fear or pressure.
            </p>
            <p>
              Becky&apos;s Well is based in Shepparton and proudly serves clients across Greater Shepparton,
              with online support available for anyone who prefers to connect remotely. We are a member of{' '}
              {org.membership}.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-heading text-2xl font-extrabold text-foreground md:text-3xl">
            What Guides Us
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col items-center gap-3 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-white">
                  <v.icon size={24} style={{ color: 'var(--color-brand)' }} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{v.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-2xl font-extrabold text-foreground md:text-3xl">
            A Note From Our Founder
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
            Becky&apos;s Well was founded by {org.founder} in 2026, out of a belief that everyone facing an
            unplanned pregnancy or pregnancy loss deserves somewhere warm, honest and judgement-free to turn.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
