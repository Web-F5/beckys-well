import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone, Share2 } from 'lucide-react'
import { navLinks, org } from '@/lib/site-data'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-surface-dark)' }} className="text-[#3a3a3a]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)_minmax(0,0.95fr)_minmax(0,1.7fr)] lg:gap-8">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <Image
              src="/logo-icon.webp"
              alt="Becky's Well logo"
              width={70}
              height={70}
              className="rounded-full object-cover"
            />
            <span className="font-heading text-lg font-extrabold">Becky&apos;s Well</span>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-[#3a3a3a]/80">
            Confidential support for anyone facing an unplanned pregnancy, pregnancy loss, or post-abortion
            recovery across Greater Shepparton.
          </p>
          <p className="text-xs text-[#3a3a3a]/60">{org.affiliation}</p>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-[#3a3a3a]/90">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-[#3a3a3a]/75 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-[#3a3a3a]/90">
            Contact
          </h3>
          <a href={org.phoneHref} className="mb-3 flex items-center gap-2 text-sm text-[#3a3a3a]/85 hover:underline">
            <Phone size={15} /> {org.phone}
          </a>
          <a href={`mailto:${org.email}`} className="mb-3 flex items-center gap-2 text-sm text-[#3a3a3a]/85 hover:underline">
            <Mail size={15} /> {org.email}
          </a>
          <p className="mb-3 flex items-start gap-2 text-sm text-[#3a3a3a]/85">
            <MapPin size={15} className="mt-0.5 flex-shrink-0" /> {org.address}
          </p>
          <a
            href={org.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#3a3a3a]/85 hover:underline"
          >
            <Share2 size={15} /> Follow us on Facebook
          </a>

          <h3 className="mb-3 mt-8 font-heading text-sm font-bold uppercase tracking-widest text-[#3a3a3a]/90">
            Areas We Serve
          </h3>
          <p className="text-sm leading-relaxed text-[#3a3a3a]/75">
            Greater Shepparton and surrounding areas within 40&nbsp;km
          </p>
        </div>

        <div className="self-start rounded-2xl bg-[#fbf6f0] p-6 shadow-sm lg:-mt-6">
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-[#3a3a3a]">
            For immediate support
          </h3>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-[#3a3a3a]">
            <p>
              <span className="font-bold">Pregnancy Help Australia National Helpline:</span>{' '}
              <a href="tel:1300139313" className="font-bold underline">
                1300 139 313
              </a>
            </p>
            <p>
              Text:{' '}
              <a href="sms:0483952605" className="font-bold underline">
                0483 952 605
              </a>{' '}
              (text only)
            </p>
            <p>Free, Compassionate and Confidential support 8am-10pm AEST, 7 days</p>
            <p>
              If you need immediate support, Lifeline is available 24/7 on{' '}
              <a href="tel:131114" className="font-bold underline">
                13&nbsp;11&nbsp;14
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3a3a3a]/15 px-4 py-5 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-[#3a3a3a]/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Becky&apos;s Well. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
