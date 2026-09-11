import type { Metadata } from 'next'
import Image from 'next/image'
import { Compass, HeartHandshake, Sparkles, Users } from 'lucide-react'
import CtaSection from '@/components/cta-section'
import { services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Our Services | Becky's Well",
  description: 'Options counselling, life coaching and mentoring, referrals, and pregnancy loss & post-abortion support in Shepparton, VIC.',
}

const icons = [Compass, Sparkles, Users, HeartHandshake]

const serviceImages = [
  { src: '/images/girl-laptop.webp', alt: 'A woman looking thoughtfully at her laptop', width: 1920, height: 1080 },
  { src: '/images/Shell-on-beach.webp', alt: 'A delicate shell resting on the sand at sunset', width: 800, height: 1067 },
  { src: '/images/sunset-beach.webp', alt: 'A wide, calm horizon over the ocean at sunset', width: 1920, height: 1080 },
  { src: '/images/Girl-thinking-headphones.webp', alt: 'A woman resting quietly on a couch, wrapped in a blanket', width: 1920, height: 1080 },
]

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-12 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: 'var(--color-brand-warm-pop)', color: 'var(--color-brand)' }}
          >
            Our Services
          </span>
          <h1 className="mb-5 text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Support that meets you where you are
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every conversation starts with listening. From there, here&apos;s how we can help.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          {services.map((service, i) => {
            const Icon = icons[i]
            const reversed = i % 2 === 1
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid scroll-mt-24 items-center gap-10 md:grid-cols-2 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <Image
                  src={serviceImages[i].src}
                  alt={serviceImages[i].alt}
                  width={serviceImages[i].width}
                  height={serviceImages[i].height}
                  className="aspect-[5/4] w-full rounded-3xl object-cover"
                />
                <div>
                  <div
                    className="mb-4 flex size-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: 'var(--color-brand-bg)' }}
                  >
                    <Icon size={22} style={{ color: 'var(--color-brand)' }} strokeWidth={1.75} />
                  </div>
                  <h2 className="mb-3 font-heading text-2xl font-extrabold text-foreground md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CtaSection
        title="Not sure where to start?"
        body="That's completely okay. Get in touch and we'll help you figure out what kind of support fits your situation."
      />
    </>
  )
}
