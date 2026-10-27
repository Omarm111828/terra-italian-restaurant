import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon } from './Icon'

/* ------------------------------------------------------------------
   Button — the single source for every CTA on the site.
   Variants: primary | secondary | light (on dark) | text
   States:   default | hover | focus | disabled  (forceState for docs)
------------------------------------------------------------------- */
export type ButtonVariant = 'primary' | 'secondary' | 'light' | 'text'
export type ButtonSize = 'md' | 'sm'
export type ForcedState = 'hover' | 'focus'

const VARIANTS: Record<ButtonVariant, { base: string; hover: string }> = {
  primary: { base: 'bg-tomato text-white', hover: 'bg-tomato-deep' },
  secondary: { base: 'border border-charcoal/70 text-charcoal', hover: 'bg-charcoal text-cream border-charcoal' },
  light: { base: 'border border-cream/45 text-cream', hover: 'bg-cream text-forest border-cream' },
  text: { base: 'text-charcoal decoration-charcoal/30', hover: 'decoration-tomato text-tomato-deep' },
}

const SIZES: Record<ButtonSize, string> = {
  md: 'h-12 px-7 text-[15px]',
  sm: 'h-11 px-5 text-sm',
}

export function buttonClass({
  variant = 'primary',
  size = 'md',
  forceState,
  className = '',
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  forceState?: ForcedState
  className?: string
}) {
  const v = VARIANTS[variant]
  const hover = forceState === 'hover' ? v.hover : v.hover.split(' ').map((c) => `hover:${c}`).join(' ')
  const isText = variant === 'text'
  return [
    'group inline-flex items-center justify-center gap-2.5 font-sans font-semibold tracking-[0.01em] whitespace-nowrap select-none cursor-pointer',
    'transition-[background-color,color,border-color,text-decoration-color] duration-200 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-tomato',
    'disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40',
    isText ? 'min-h-11 text-[15px] underline underline-offset-[7px] decoration-1' : `rounded-full ${SIZES[size]}`,
    forceState === 'hover' ? v.hover : v.base,
    forceState === 'focus' ? 'outline-2 outline-offset-[3px] outline-tomato' : '',
    forceState ? '' : hover,
    className,
  ].join(' ')
}

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  forceState?: ForcedState
  icon?: 'arrow' | 'arrowUpRight'
  children: ReactNode
}

function ButtonIcon({ icon }: { icon?: CommonProps['icon'] }) {
  if (!icon) return null
  return (
    <Icon
      name={icon === 'arrow' ? 'arrowRight' : 'arrowUpRight'}
      size={18}
      className="shrink-0 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5"
    />
  )
}

export function Button({
  variant,
  size,
  forceState,
  icon,
  children,
  className,
  type = 'button',
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClass({ variant, size, forceState, className })} {...rest}>
      {children}
      <ButtonIcon icon={icon} />
    </button>
  )
}

export function ButtonLink({
  variant,
  size,
  forceState,
  icon,
  children,
  className,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClass({ variant, size, forceState, className })} {...rest}>
      {children}
      <ButtonIcon icon={icon} />
    </a>
  )
}

/* Layout primitives */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20 ${className}`}>{children}</div>
}

export function Eyebrow({ children, tone = 'tomato', className = '' }: { children: ReactNode; tone?: 'tomato' | 'light'; className?: string }) {
  return (
    <p className={`t-eyebrow flex items-center gap-3 ${tone === 'light' ? 'text-cream/75' : 'text-tomato-deep'} ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  )
}

export function Wordmark({ tone = 'dark', size = 'md' }: { tone?: 'dark' | 'light'; size?: 'md' | 'lg' }) {
  const color = tone === 'light' ? 'text-cream' : 'text-forest'
  return (
    <span className={`inline-flex items-center gap-3 ${color}`}>
      <span className={`font-serif font-[450] tracking-[0.16em] leading-none ${size === 'lg' ? 'text-[40px]' : 'text-[26px]'}`}>
        TERRA
      </span>
      <span aria-hidden="true" className={`h-5 w-px ${tone === 'light' ? 'bg-cream/35' : 'bg-forest/30'}`} />
      <span className="font-sans text-[10px] font-bold uppercase leading-[1.25] tracking-[0.24em]">
        Italian
        <br />
        Kitchen
      </span>
    </span>
  )
}
