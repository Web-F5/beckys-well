import type { Metadata } from 'next'
import { Calendar, Mail, MapPin, Phone, Share2 } from 'lucide-react'
import ContactForm from '@/components/contact-form'
import { org, serviceAreaTowns } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Contact Us | Becky's Well",
  description: "Get in touch with Becky's Well in Shepparton, VIC. Self-referrals welcome, by appointment, online support also available.",
}

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-12 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand)' }}
          >
            Contact
          </span>
          <h1 className="mb-5 text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Reach out, whenever you&apos;re ready
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Self-referrals are always welcome. Send a message below, or contact us directly — whatever feels
            easiest.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,340px)_1fr]">
          <div className="flex flex-col gap-4">
            <a
              href={org.phoneHref}
              className="flex items-center gap-4 rounded-2xl border-2 p-5 transition-transform hover:scale-[1.02]"
              style={{ borderColor: 'var(--color-brand)', backgroundColor: 'var(--color-brand-bg)' }}
            >
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-white">
                <Phone size={22} style={{ color: 'var(--color-brand)' }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Call or Text</p>
                <p className="font-heading text-lg font-extrabold text-foreground">{org.phone}</p>
              </div>
            </a>

            <a href={`mailto:${org.email}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
                <Mail size={20} style={{ color: 'var(--color-brand)' }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="font-heading text-sm font-bold text-foreground break-all">{org.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
                <MapPin size={20} style={{ color: 'var(--color-brand)' }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Visit Us</p>
                <p className="font-heading text-sm font-bold text-foreground">{org.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
                <Calendar size={20} style={{ color: 'var(--color-brand)' }} />
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Hours</p>
                {org.hours.map((h) => (
                  <p key={h.label} className="text-sm text-foreground">
                    <span className="font-semibold">{h.label}:</span> {h.value}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={org.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
                <Share2 size={20} style={{ color: 'var(--color-brand)' }} />
              </div>
              <p className="font-heading text-sm font-bold text-foreground">Follow us on Facebook</p>
            </a>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Becky's Well location map"
            src={org.mapEmbedSrc}
            className="h-80 w-full md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-heading text-2xl font-extrabold text-foreground">Proudly Serving</h2>
          <p className="leading-relaxed text-muted-foreground">{serviceAreaTowns.join(' · ')}</p>
        </div>
      </section>
    </>
  )
}
