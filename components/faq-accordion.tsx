'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-heading text-base font-bold text-foreground">{item.q}</span>
              <ChevronDown
                size={18}
                className={cn('flex-shrink-0 text-[--color-brand] transition-transform', open && 'rotate-180')}
              />
            </button>
            {open && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
