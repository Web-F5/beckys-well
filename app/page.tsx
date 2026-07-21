import Link from 'next/link'
import { Compass, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react'
import PlaceholderImage from '@/components/placeholder-image'
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
            <span
              className="w-fit rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand)' }}
            >
              Shepparton & Greater Shepparton
            </span>
            <h1 className="text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              You don&apos;t have to face this alone
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Becky&apos;s Well offers confidential, non-judgemental support for anyone affected by an unplanned
              pregnancy, miscarriage, or who needs post-abortion support. Options information, life coaching and
              referrals — at your pace, on your terms.
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
          <PlaceholderImage tone="warm" className="aspect-[4/3] w-full" />
        </div>
      </section>

      <section className="px-4 py-12 md:px-8" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
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
                <p className="text-sm text-muted-foreground">{item.body}</p>
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-3xl border border-border p-10 text-center md:p-14 lg:flex-row lg:text-left">
          <div className="flex-1">
            <h2 className="mb-3 text-balance font-heading text-2xl font-extrabold text-foreground md:text-3xl">
              Supporting the Greater Shepparton region
            </h2>
            <p className="leading-relaxed text-muted-foreground">
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
