import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full border border-transparent text-sm font-heading font-bold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-(--color-brand-surface-dark) text-white shadow-sm hover:bg-(--color-brand-surface-dark)/85',
        outline:
          'border-(--color-brand) text-(--color-brand) bg-transparent hover:bg-(--color-brand-bg)',
        secondary: 'bg-(--color-brand-accent) text-white hover:bg-(--color-brand-accent-hover)',
        ghost: 'hover:bg-muted text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 gap-2 px-6',
        sm: 'h-9 gap-1.5 px-4 text-xs',
        lg: 'h-13 gap-2 px-8 text-base',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
