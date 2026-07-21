import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ServiceCard({
  title,
  short,
  href,
  icon: Icon,
  className,
}: {
  title: string
  short: string
  href: string
  icon: LucideIcon
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md',
        className,
      )}
    >
      <div
        className="flex size-12 items-center justify-center rounded-2xl"
        style={{ backgroundColor: 'var(--color-brand-bg)' }}
      >
        <Icon size={22} style={{ color: 'var(--color-brand)' }} strokeWidth={1.75} />
      </div>
      <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{short}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-brand)">
        Learn more
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
