import type { LucideIcon } from 'lucide-react'
import { Droplet } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tone = 'warm' | 'soft' | 'sage'

const tones: Record<Tone, { from: string; via: string; to: string; ring: string }> = {
  warm: { from: '#ffe8d6', via: '#ddbea9', to: '#cb997e', ring: '#ba886d' },
  soft: { from: '#fffaf5', via: '#ffe8d6', to: '#ddbea9', ring: '#cb997e' },
  sage: { from: '#e8e6da', via: '#c3c4ab', to: '#a5a58d', ring: '#6b705c' },
}

export default function PlaceholderImage({
  tone = 'warm',
  icon: Icon = Droplet,
  className,
}: {
  tone?: Tone
  icon?: LucideIcon
  className?: string
}) {
  const t = tones[tone]
  const gradientId = `grad-${tone}`

  return (
    <div
      className={cn('relative overflow-hidden rounded-3xl', className)}
      style={{ background: `linear-gradient(135deg, ${t.from}, ${t.via})` }}
    >
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={t.via} stopOpacity="0.5" />
            <stop offset="100%" stopColor={t.to} stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="330" r="90" stroke={t.ring} strokeOpacity="0.35" strokeWidth="2" fill="none" />
        <circle cx="200" cy="330" r="135" stroke={t.ring} strokeOpacity="0.22" strokeWidth="2" fill="none" />
        <circle cx="200" cy="330" r="180" stroke={t.ring} strokeOpacity="0.12" strokeWidth="2" fill="none" />
        <ellipse cx="70" cy="60" rx="120" ry="90" fill={`url(#${gradientId})`} />
        <ellipse cx="340" cy="240" rx="140" ry="100" fill={t.to} fillOpacity="0.25" />
      </svg>
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className="flex size-16 items-center justify-center rounded-full backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(255,255,255,0.55)' }}
        >
          <Icon size={28} style={{ color: t.ring }} strokeWidth={1.75} />
        </div>
      </div>
    </div>
  )
}
