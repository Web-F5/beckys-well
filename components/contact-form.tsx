'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const inputClasses =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:ring-2 focus:ring-[--color-brand]'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <CheckCircle size={48} className="mx-auto mb-4" style={{ color: 'var(--color-brand)' }} />
        <h3 className="mb-2 font-heading text-xl font-extrabold text-foreground">Message sent</h3>
        <p className="mb-6 text-muted-foreground">
          Thank you for reaching out. We&apos;ll be in touch as soon as we can.
        </p>
        <button onClick={() => setStatus('idle')} className={buttonVariants()}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 md:p-8">
      {/* TODO: replace with a real Web3Forms access key (free at web3forms.com) before launch */}
      <input type="hidden" name="access_key" value="REPLACE-WITH-WEB3FORMS-ACCESS-KEY" />
      <input type="hidden" name="subject" value="New enquiry — Becky's Well website" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Your Name *
          </label>
          <input type="text" name="name" required placeholder="Your name" className={inputClasses} />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Email *
          </label>
          <input type="email" name="email" required placeholder="you@example.com" className={inputClasses} />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Phone (optional)
        </label>
        <input type="tel" name="phone" placeholder="04xx xxx xxx" className={inputClasses} />
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-muted-foreground">
          How can we help? *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Share as much or as little as you're comfortable with."
          className={cn(inputClasses, 'resize-none')}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle size={16} />
          Something went wrong. Please try again, or reach us directly by phone or email.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(buttonVariants({ size: 'lg' }), 'w-full disabled:opacity-70')}
      >
        <Send size={18} />
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Everything you share here is kept confidential.
      </p>
    </form>
  )
}
