import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react'
import { IMAGES, img } from '../data'
import { Icon } from './Icon'
import { Button } from './ui'

const BookingContext = createContext<{ open: () => void }>({ open: () => {} })
export const useBooking = () => useContext(BookingContext)

const TIMES = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']

export function BookingProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)
  const [mounted, setMounted] = useState(0)
  const open = useCallback(() => {
    setMounted((n) => n + 1) // reset the form each time
    ref.current?.showModal()
  }, [])
  const close = useCallback(() => ref.current?.close(), [])
  const value = useMemo(() => ({ open }), [open])

  return (
    <BookingContext.Provider value={value}>
      {children}
      <dialog
        ref={ref}
        aria-labelledby="booking-title"
        onClick={(e) => e.target === ref.current && close()}
        className="fixed inset-0 m-auto h-fit max-h-[calc(100dvh-32px)] w-[min(980px,calc(100vw-32px))] overflow-auto rounded-panel bg-cream p-0 text-charcoal shadow-[0_40px_120px_-20px_rgba(37,37,34,0.45)] backdrop:bg-charcoal/65"
      >
        <BookingForm key={mounted} onClose={close} />
      </dialog>
    </BookingContext.Provider>
  )
}

function Field({ label, icon, children, htmlFor }: { label: string; icon: 'calendar' | 'clock' | 'users' | 'mail'; children: ReactNode; htmlFor: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="t-eyebrow text-charcoal/65">
        {label}
      </label>
      <div className="relative flex items-center">
        <Icon name={icon} size={18} className="pointer-events-none absolute left-4 text-forest/70" />
        {children}
      </div>
    </div>
  )
}

export const inputClass =
  'h-12 w-full appearance-none rounded-card border border-charcoal/20 bg-white pl-11 pr-4 text-[15px] text-charcoal transition-colors placeholder:text-charcoal/40 hover:border-charcoal/45 focus:border-forest focus:outline-2 focus:outline-offset-0 focus:outline-forest/25'

function BookingForm({ onClose }: { onClose: () => void }) {
  const id = useId()
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('2')
  const [name, setName] = useState('')
  const [done, setDone] = useState(false)
  const today = useMemo(() => new Date().toISOString().split('T')[0], [])
  const valid = date && time && guests && name.trim().length > 1

  useEffect(() => {
    if (done) document.getElementById(`${id}-done`)?.focus()
  }, [done, id])

  return (
    <div className="grid md:grid-cols-[5fr_7fr]">
      <div className="relative hidden md:block">
        <img src={img(IMAGES.woodTables, 800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-8 pt-24 text-cream">
          <p className="font-serif text-2xl italic leading-snug">“Pull up a chair. We’ll take care of the rest.”</p>
        </div>
      </div>

      <div className="relative p-6 sm:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close reservation"
          className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full text-charcoal/70 transition-colors hover:bg-charcoal/5 hover:text-charcoal"
        >
          <Icon name="close" />
        </button>

        {done ? (
          <div id={`${id}-done`} tabIndex={-1} className="flex min-h-[420px] flex-col justify-center outline-none">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-forest text-cream">
              <Icon name="check" size={26} />
            </span>
            <h2 id="booking-title" className="t-h2 mt-8">
              Grazie, {name.split(' ')[0]}.
            </h2>
            <p className="t-body-lg mt-4 max-w-sm text-charcoal/75">
              A table for {guests} on {new Date(date + 'T00:00').toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })} at {time}.
            </p>
            <p className="t-caption mt-6 rounded-card bg-cream-deep px-4 py-3 text-charcoal/70">
              Design prototype — no reservation was actually made.
            </p>
            <div className="mt-10">
              <Button variant="secondary" onClick={onClose}>
                Back to the site
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (valid) setDone(true)
            }}
          >
            <p className="t-eyebrow text-tomato-deep">Reservations</p>
            <h2 id="booking-title" className="t-h2 mt-4">
              Book a Table
            </h2>
            <p className="t-small mt-3 max-w-sm text-charcoal/70">
              For parties larger than 8, give us a call and we’ll set the long table.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Date" icon="calendar" htmlFor={`${id}-date`}>
                <input id={`${id}-date`} type="date" min={today} required value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
              </Field>
              <Field label="Guests" icon="users" htmlFor={`${id}-guests`}>
                <select id={`${id}-guests`} value={guests} onChange={(e) => setGuests(e.target.value)} className={inputClass}>
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1} {i === 0 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
                <Icon name="chevronDown" size={18} className="pointer-events-none absolute right-4 text-charcoal/50" />
              </Field>
            </div>

            <fieldset className="mt-6">
              <legend className="t-eyebrow text-charcoal/65">Time</legend>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
                {TIMES.map((t, i) => {
                  const unavailable = i === 3 || i === 6 // sample: fully booked slots
                  const active = time === t
                  return (
                    <button
                      key={t}
                      type="button"
                      disabled={unavailable}
                      aria-pressed={active}
                      onClick={() => setTime(t)}
                      className={`h-11 rounded-full border text-sm font-semibold tabular-nums transition-colors disabled:cursor-not-allowed disabled:border-dashed disabled:text-charcoal/30 disabled:line-through ${
                        active ? 'border-forest bg-forest text-cream' : 'border-charcoal/20 bg-white hover:border-forest hover:text-forest'
                      }`}
                    >
                      {t}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <div className="mt-6">
              <Field label="Name" icon="mail" htmlFor={`${id}-name`}>
                <input id={`${id}-name`} type="text" autoComplete="name" placeholder="Your full name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-charcoal/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="t-caption text-charcoal/55">Sample booking flow · no data is stored.</p>
              <Button type="submit" disabled={!valid} icon="arrow">
                Confirm Reservation
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
