'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { navLinks } from '@/lib/site-data'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo.jpg"
            alt="Becky's Well logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <span className="font-heading text-xl font-extrabold text-(--color-brand)">Becky&apos;s Well</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-heading text-sm font-semibold text-foreground/80 transition-colors hover:text-(--color-brand)"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className={buttonVariants({ size: 'sm', className: 'hidden lg:inline-flex' })}>
          Get in Touch
        </Link>

        <button
          className="rounded-md p-2 text-(--color-brand) lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden">
          <ul className="mb-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border-b border-border py-3 font-heading text-base font-semibold text-foreground/80"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={buttonVariants({ className: 'w-full' })}
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  )
}
