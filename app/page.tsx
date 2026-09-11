import Image from 'next/image'
import Link from 'next/link'
import { Compass, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react'
import ServiceCard from '@/components/service-card'
import CtaSection from '@/components/cta-section'
import { buttonVariants } from '@/components/ui/button'
import { org, services } from '@/lib/site-data'

const serviceIcons = [Compass, Sparkles, Users, HeartHandshake]

export default function HomePage() {
  return (
    <>
      <section className="px-4 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              Becky&apos;s Well is here to walk with you through life&apos;s hardest moments — providing
              compassionate, practical support, and a safe place to heal.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Facing an unplanned pregnancy or pregnancy loss can feel overwhelming. We provide confidential,
              non-judgmental support for anyone affected by unplanned pregnancy, miscarriage, or abortion. Offering
              options information, life coaching, and referrals — at a pace that feels comfortable for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className={buttonVariants({ size: 'lg' })}>
                Get in Touch
              </Link>
              <Link href="/services" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                Explore Our Services
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Self-referrals welcome · No cost should stop you reaching out · Member of {org.membership}
            </p>
          </div>
          <Image
            src="/hero-photo.webp"
            alt="A woman sitting by a window with a cup of tea, looking out thoughtfully"
            width={1400}
            height={1056}
            className="aspect-[4/3] w-full rounded-3xl object-cover"
            priority
          />
        </div>
      </section>

      <section className="px-4 py-12 md:px-8" style={{ backgroundColor: 'var(--color-brand-surface-alt)' }}>
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Confidential', body: 'What you share with us stays between us.' },
            { icon: HeartHandshake, title: 'No Judgement', body: 'Whatever your situation, you are welcome here.' },
            { icon: Users, title: 'Self-Referrals Welcome', body: "You don't need anyone else's permission to reach out." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-white">
                <item.icon size={20} style={{ color: 'var(--color-brand)' }} />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/75">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              How We Can Help
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Every situation is different, so support looks different for everyone. Here&apos;s what we offer.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                short={service.short}
                href={`/services#${service.slug}`}
                icon={serviceIcons[i]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div
          className="mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-3xl p-10 text-center md:p-14 lg:flex-row lg:text-left"
          style={{ backgroundColor: 'var(--color-brand-surface-alt)' }}
        >
          <div className="flex-1">
            <h2 className="mb-3 text-balance font-heading text-2xl font-extrabold text-foreground md:text-3xl">
              Supporting the Greater Shepparton region
            </h2>
            <p className="leading-relaxed text-foreground/75">
              We welcome clients from Shepparton, Mooroopna, Kialla, Tatura and surrounding towns within 30km,
              with support also available online for anyone further afield.
            </p>
          </div>
          <Link href="/contact" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
            Find Our Location
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
