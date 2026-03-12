import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialSlider from '@/components/TestimonialSlider'

export const metadata: Metadata = {
  title: 'Sports Massage Rotherham | HH Massage Therapy',
  description: 'Premium sports massage and deep tissue therapy in Rotherham. Recovery for athletes, office workers, and corporate teams. Book online today.',
}

const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'
const MAPS_URL = 'https://www.google.com/maps/dir//HH+Massage+Therapy,+Glenwood+Kitchens,+6+Front+St,+Rotherham+S60+5QP/@53.3940072,-1.359872,13z'

const services = [
  { duration: '30 Min', name: 'Area Focused', desc: 'Target specific muscle groups with deep pressure techniques to alleviate tightness and reduce soreness. Ideal for busy individuals with specific injuries.', price: '£30', url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/HTDAWTBQHKUVKGOJAYQHUIGH', popular: false },
  { duration: '45 Min', name: 'Area Focused', desc: 'A longer, more thorough session targeting specific injuries using deep pressure techniques to alleviate tightness and reduce soreness.', price: '£40', url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/IBAKBSHJ6EXJ3AIQ6LA6DYMU', popular: false },
  { duration: '60 Min', name: 'Full Body MOT', desc: 'Focuses on key areas like neck, shoulders, back, legs, and arms using deep pressure and stretching techniques to improve flexibility and mobility.', price: '£50', url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/7MNSH64D2X5CJICZSJIRDODX', popular: true },
  { duration: '90 Min', name: 'Full Body Reset', desc: 'A comprehensive session using expert sports therapy techniques to enhance performance and well-being. For complex patterns and full recovery.', price: '£65', url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/DR3PZBCHIHE3QDGPIPOUUIQY', popular: false },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: '100vh',
          paddingTop: '72px',
          background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(123,127,194,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(123,127,194,0.08) 0%, transparent 50%),
            var(--blue-deep)
          `,
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%237b7fc2' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative z-10 w-full mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div style={{ maxWidth: '800px' }}>
            <div className="badge-pill">Rotherham · Sports Recovery · Deep Tissue Therapy</div>
            <h1 style={{ fontSize: 'clamp(2.6rem,5.5vw,5rem)', color: '#fff', marginBottom: '28px' }}>
              Your Body Works Hard.<br />
              <em style={{ fontStyle: 'normal', color: 'var(--lavender)' }}>So Does Your Treatment.</em>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--white-80)', maxWidth: '560px', marginBottom: '44px', lineHeight: 1.65 }}>
              Sports massage and deep tissue therapy built for performance, recovery, and real results. Not a spa. Not a clinic. Something better.
            </p>
            <div className="flex flex-wrap gap-4" style={{ marginBottom: '56px' }}>
              <a href={BOOK_URL} target="_blank" rel="noopener"
                className="inline-flex items-center gap-2.5 rounded-full font-semibold transition-all"
                style={{ padding: '20px 44px', fontSize: '1.05rem', background: 'var(--lavender)', color: '#fff', boxShadow: '0 0 32px rgba(123,127,194,0.35)' }}>
                Book Your Session
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
              <Link href="/treatments"
                className="inline-flex items-center gap-2.5 rounded-full font-semibold transition-all"
                style={{ padding: '20px 44px', fontSize: '1.05rem', border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}>
                View Treatments &amp; Pricing
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-7 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              {[{ icon: '★', text: '5★ Rated' }, { icon: '📍', text: 'Rotherham' }, { icon: '✓', text: 'Fully Insured' }].map(item => (
                <div key={item.text} className="flex items-center gap-2" style={{ fontSize: '0.85rem', color: 'var(--white-80)' }}>
                  <span style={{ color: 'var(--lavender)' }}>{item.icon}</span> {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHO WE HELP */}
      <section className="py-24">
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-14">
            <span className="label">Who We Treat</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Built For People<br />Refusing to Live in Pain</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>,
                title: "Train Hard. Recover Harder.",
                body: "You're lifting, running, competing, or simply putting your body through work that demands recovery. We keep you moving at your best — reducing injury risk, clearing muscle fatigue, and getting you back in the gym faster.",
                tags: ['Sports Massage', 'Injury Prevention', 'Injury Rehab & Post-Event'],
                link: 'See athlete treatments',
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>,
                title: "Your Desk Shouldn't Define How You Feel.",
                body: "Eight hours at a screen builds tension in your neck, shoulders, and lower back that stretching alone won't fix. We target the specific muscle groups that suffer from desk work — and we leave you walking out differently.",
                tags: ['Posture Correction', 'Deep Tissue', 'Tension Relief'],
                link: 'See treatments for desk pain',
              },
            ].map(card => (
              <div key={card.title} className="rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="flex items-center justify-center mb-6 rounded-xl" style={{ width: '52px', height: '52px', background: 'var(--lavender-glow)' }}>
                  <span style={{ color: 'var(--lavender)' }}>{card.icon}</span>
                </div>
                <h3 className="mb-3.5" style={{ fontSize: '1.35rem' }}>{card.title}</h3>
                <p className="mb-4" style={{ fontSize: '0.95rem' }}>{card.body}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <Link href="/treatments" className="card-link">
                  {card.link}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* STATS */}
      <section className="py-16" style={{ background: 'var(--blue-dark)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
            {[
              { value: '200+', label: 'Clients now living pain-free' },
              { value: '9am–9pm', label: 'Slots open to fit YOUR schedule' },
              { value: 'Rotherham', label: 'Private luxury therapy room' },
            ].map((s, i) => (
              <div key={i} className="text-center py-10 px-8" style={{ background: 'var(--blue-deep)', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '8px' }}>{s.value}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--white-80)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* THE HH DIFFERENCE */}
      <section className="py-24">
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div style={{ marginBottom: '56px' }}>
            <span className="label">Why HH Massage Therapy</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', maxWidth: '680px' }}>
              This Isn&apos;t Standard Therapy.<br />This Is Performance Recovery.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { num: '01', title: 'Heated Memory Foam Treatment Table', desc: 'Your body relaxes faster and deeper on a heated memory foam surface. We invested in it because it genuinely improves outcomes — more muscle release in less time.' },
              { num: '02', title: 'Athlete-Level Technique, Not Spa-Level Pressure', desc: "We work to the standard required by people who use their bodies professionally. Real pressure, real depth, treatments mapped to your specific pattern of tension." },
              { num: '03', title: 'Based in Rotherham', desc: "Private studio in the heart of Rotherham. Flexible scheduling with early mornings, evenings, and weekend slots available — because recovery doesn't wait for business hours." },
            ].map(item => (
              <div key={item.num} className="flex gap-6 items-start p-9 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--lavender)', opacity: 0.35, lineHeight: 1, flexShrink: 0, minWidth: '52px' }}>{item.num}</div>
                <div>
                  <h4 className="mb-2.5" style={{ fontSize: '1.1rem', color: '#fff' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.92rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section className="py-24" style={{ background: 'var(--blue-dark)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-14">
            <span className="label">Treatments</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Choose Your Level of Recovery</h2>
            <p className="mt-4 mx-auto" style={{ fontSize: '1.2rem', maxWidth: '560px', color: 'var(--white-80)' }}>
              All treatments are deep tissue and sports-specific by default. No upsells. No fluff. Just the right session for what your body needs today.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(s => (
              <div key={s.duration} className="flex flex-col gap-4 p-8 rounded-2xl relative transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: s.popular ? 'linear-gradient(135deg,rgba(123,127,194,0.15),rgba(123,127,194,0.05))' : 'rgba(255,255,255,0.06)',
                  border: s.popular ? '1px solid var(--lavender)' : '1px solid rgba(255,255,255,0.12)',
                }}>
                {s.popular && <div className="absolute top-4 right-4 text-[0.68rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: 'var(--lavender)', color: '#fff' }}>Most Popular</div>}
                <span className="inline-block text-[0.75rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit" style={{ background: 'var(--lavender-glow)', color: 'var(--lavender)' }}>{s.duration}</span>
                <h3 style={{ fontSize: '1.35rem', color: '#fff' }}>{s.name}</h3>
                <p style={{ fontSize: '0.9rem', flex: 1 }}>{s.desc}</p>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  {s.price} <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--white-50)' }}>/ session</span>
                </div>
                <a href={s.url} target="_blank" rel="noopener"
                  className="flex justify-center items-center py-3 rounded-full font-semibold text-sm transition-all"
                  style={s.popular ? { background: 'var(--lavender)', color: '#fff' } : { border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}>
                  Book Now →
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-8" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)' }}>
            Not sure which to choose?{' '}
            <Link href="/treatments" style={{ color: 'var(--lavender)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Read the full treatment guide →</Link>
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-14">
            <span className="label">What Clients Say</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Results Speak for Themselves</h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <div className="divider" />

      {/* LOCATION */}
      <section className="py-24" style={{ background: 'var(--blue-dark)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-14">
            <span className="label">Location</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Find Us in Rotherham</h2>
          </div>
          <div className="grid gap-10 items-stretch" style={{ gridTemplateColumns: '1fr 1.6fr' }}>
            <div className="rounded-2xl p-11" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span className="label" style={{ marginBottom: '8px' }}>Our Studio</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>Rotherham</div>
              <p style={{ margin: '14px 0 20px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
                Glenwood Kitchens, 6 Front St,<br />Rotherham S60 5QP
              </p>
              <div className="flex flex-col gap-3 my-6">
                {['Premium private treatment room', 'Heated memory foam treatment table', 'Blue-lit, calm & private environment', 'Evenings & weekends available', 'Free parking on-site'].map(f => (
                  <div key={f} className="flex items-center gap-3" style={{ fontSize: '0.9rem', color: 'var(--white-80)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16" style={{ color: 'var(--lavender)', flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap mt-6">
                <a href={BOOK_URL} target="_blank" rel="noopener" className="flex-1 flex justify-center items-center py-3 rounded-full font-semibold text-sm" style={{ background: 'var(--lavender)', color: '#fff' }}>Book Now →</a>
                <a href={MAPS_URL} target="_blank" rel="noopener" className="flex-1 flex justify-center items-center py-3 rounded-full font-semibold text-sm" style={{ border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}>Get Directions →</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ minHeight: '360px', background: 'var(--blue-deep)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.0!2d-1.3537!3d53.3838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTreeton%2C+Rotherham!5e0!3m2!1sen!2suk!4v1700000000000"
                style={{ width: '100%', height: '100%', minHeight: '360px', border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FINAL CTA */}
      <section className="text-center py-32 px-6" style={{ background: '#f0f2f9', color: 'var(--blue-deep)' }}>
        <span className="label">Ready?</span>
        <h2 className="mb-5" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', color: 'var(--blue-deep)' }}>Ready to Book?</h2>
        <p className="mx-auto mb-12" style={{ fontSize: '1.1rem', maxWidth: '520px', color: 'rgba(20,28,107,0.65)' }}>
          Book online in under two minutes. Card payments accepted.
        </p>
        <a href={BOOK_URL} target="_blank" rel="noopener"
          className="inline-flex items-center gap-2.5 rounded-full font-semibold transition-all"
          style={{ padding: '20px 44px', fontSize: '1.05rem', background: 'var(--lavender)', color: '#fff', boxShadow: '0 0 32px rgba(123,127,194,0.35)' }}>
          Book Your Treatment Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </a>
        <div className="mt-7" style={{ fontSize: '0.9rem', color: 'rgba(20,28,107,0.5)' }}>
          Questions first?{' '}
          <Link href="/about" style={{ color: 'var(--blue-deep)', textDecoration: 'underline' }}>Learn about us</Link>
          {' · '}
          <Link href="/corporate" style={{ color: 'var(--blue-deep)', textDecoration: 'underline' }}>Corporate enquiries</Link>
        </div>
      </section>
    </>
  )
}
