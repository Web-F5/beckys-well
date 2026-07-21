import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function CtaSection({
  title = "You don't have to figure this out alone",
  body = 'Reach out whenever you feel ready. Self-referrals are always welcome, and everything you share stays confidential.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="px-4 py-16 md:px-8" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">{title}</h2>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{body}</p>
        <Link href="/contact" className={buttonVariants({ size: 'lg' })}>
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
