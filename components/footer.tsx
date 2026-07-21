import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone, Share2 } from 'lucide-react'
import { navLinks, org, serviceAreaTowns } from '@/lib/site-data'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-surface-dark)' }} className="text-[#f3efe6]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Becky's Well logo"
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
            <span className="font-heading text-lg font-extrabold">Becky&apos;s Well</span>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-[#f3efe6]/80">
            Confidential support for anyone facing an unplanned pregnancy, pregnancy loss, or post-abortion
            recovery across Greater Shepparton.
          </p>
          <p className="text-xs text-[#f3efe6]/60">Proud member of {org.membership}</p>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-[#f3efe6]/90">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-[#f3efe6]/75 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-[#f3efe6]/90">
            Contact
          </h3>
          <a href={org.phoneHref} className="mb-3 flex items-center gap-2 text-sm text-[#f3efe6]/85 hover:underline">
            <Phone size={15} /> {org.phone}
          </a>
          <a href={`mailto:${org.email}`} className="mb-3 flex items-center gap-2 text-sm text-[#f3efe6]/85 hover:underline">
            <Mail size={15} /> {org.email}
          </a>
          <p className="mb-3 flex items-start gap-2 text-sm text-[#f3efe6]/85">
            <MapPin size={15} className="mt-0.5 flex-shrink-0" /> {org.address}
          </p>
          <a
            href={org.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#f3efe6]/85 hover:underline"
          >
            <Share2 size={15} /> Follow us on Facebook
          </a>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-[#f3efe6]/90">
            Areas We Serve
          </h3>
          <p className="text-sm leading-relaxed text-[#f3efe6]/75">
            {serviceAreaTowns.slice(0, 10).join(', ')} and surrounding areas within 30km of Shepparton.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-[#f3efe6]/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Becky&apos;s Well. All rights reserved.</p>
          <p>If you need immediate support, Lifeline is available 24/7 on 13&nbsp;11&nbsp;14.</p>
        </div>
      </div>
    </footer>
  )
}
