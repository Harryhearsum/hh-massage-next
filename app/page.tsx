import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialSlider from '@/components/TestimonialSlider'
import GoogleMap from '@/components/GoogleMap'

export const metadata: Metadata = {
  title: 'Sports Massage Rotherham | HH Massage Therapy',
  description: 'Premium sports massage and deep tissue therapy in Rotherham. Recovery for athletes, office workers, and corporate teams. Book online today.',
}

const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'
const MAPS_URL = 'https://www.google.com/maps/dir//HH+Massage+Therapy,+Glenwood+Kitchens,+6+Front+St,+Rotherham+S60+5QP/@53.3940072,-1.359872,13z'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__badge">Rotherham · Sports Recovery · Deep Tissue Therapy</div>
            <h1>
              Your Body Works Hard.<br />
              <em>So Does Your Treatment.</em>
            </h1>
            <p className="hero__sub">
              Sports massage and deep tissue therapy built for performance, recovery, and real results. Not a spa. Not a clinic. Something better.
            </p>
            <div className="hero__ctas">
              <a href={BOOK_URL} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                Book Your Session
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
              <Link href="/treatments" className="btn btn-ghost btn-lg">
                View Treatments &amp; Pricing
              </Link>
            </div>
            <div className="hero__trust">
              <div className="hero__trust-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>
                5-Star Rated
              </div>
              <div className="hero__trust-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                Rotherham
              </div>
              <div className="hero__trust-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Fully Insured
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHO WE HELP */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="label">Who We Treat</span>
            <h2>Built For People<br />Refusing to Live in Pain</h2>
          </div>
          <div className="audience-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="audience-card">
              <div className="audience-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
              </div>
              <h3>Train Hard. Recover Harder.</h3>
              <p>You&apos;re lifting, running, competing, or simply putting your body through work that demands recovery. We keep you moving at your best — reducing injury risk, clearing muscle fatigue, and getting you back in the gym faster.</p>
              <div className="audience-card__tags">
                <span className="tag">Sports Massage</span>
                <span className="tag">Injury Prevention</span>
                <span className="tag">Injury Rehab &amp; Post-Event</span>
              </div>
              <Link href="/treatments" className="card-link">
                See athlete treatments
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </Link>
            </div>
            <div className="audience-card">
              <div className="audience-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="26" height="26"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>
              </div>
              <h3>Your Desk Shouldn&apos;t Define How You Feel.</h3>
              <p>Eight hours at a screen builds tension in your neck, shoulders, and lower back that stretching alone won&apos;t fix. We target the specific muscle groups that suffer from desk work — and we leave you walking out differently.</p>
              <div className="audience-card__tags">
                <span className="tag">Posture Correction</span>
                <span className="tag">Deep Tissue</span>
                <span className="tag">Tension Relief</span>
              </div>
              <Link href="/treatments" className="card-link">
                See treatments for desk pain
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* STATS BAR */}
      <section className="section--sm section--dark">
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-item__value">200+</div>
              <div className="stat-item__label">Clients now living pain-free</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__value">9am–9pm</div>
              <div className="stat-item__label">Slots open to fit YOUR schedule</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__value">Rotherham</div>
              <div className="stat-item__label">Private luxury therapy room</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* THE HH DIFFERENCE */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '56px' }}>
            <span className="label">Why HH Massage Therapy</span>
            <h2 style={{ maxWidth: '680px' }}>
              This Isn&apos;t Standard Therapy.<br />This Is Performance Recovery.
            </h2>
          </div>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-item__num">01</div>
              <div>
                <h4>Heated Memory Foam Treatment Table</h4>
                <p>Your body relaxes faster and deeper on a heated memory foam surface. We invested in it because it genuinely improves outcomes — more muscle release in less time.</p>
              </div>
            </div>
            <div className="diff-item">
              <div className="diff-item__num">02</div>
              <div>
                <h4>Athlete-Level Technique, Not Spa-Level Pressure</h4>
                <p>We work to the standard required by people who use their bodies professionally. Real pressure, real depth, treatments mapped to your specific pattern of tension.</p>
              </div>
            </div>
            <div className="diff-item">
              <div className="diff-item__num">03</div>
              <div>
                <h4>Based in Rotherham</h4>
                <p>Private studio in the heart of Rotherham. Flexible scheduling with early mornings, evenings, and weekend slots available — because recovery doesn&apos;t wait for business hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="label">Treatments</span>
            <h2>Choose Your Level of Recovery</h2>
            <p className="lead" style={{ maxWidth: '560px', margin: '16px auto 0' }}>
              All treatments are deep tissue and sports-specific by default. No upsells. No fluff. Just the right session for what your body needs today.
            </p>
          </div>
          <div className="services-grid">
            {/* 30 Min */}
            <div className="service-card">
              <span className="service-card__duration">30 Min</span>
              <h3>Area Focused</h3>
              <p>Target specific muscle groups with deep pressure techniques to alleviate tightness and reduce soreness. Ideal for busy individuals with specific injuries.</p>
              <div className="service-card__price">
                &pound;30 <span>/ session</span>
              </div>
              <a href="https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/HTDAWTBQHKUVKGOJAYQHUIGH" target="_blank" rel="noopener" className="btn btn-ghost">
                Book Now &rarr;
              </a>
            </div>
            {/* 45 Min */}
            <div className="service-card">
              <span className="service-card__duration">45 Min</span>
              <h3>Area Focused</h3>
              <p>A longer, more thorough session targeting specific injuries using deep pressure techniques to alleviate tightness and reduce soreness.</p>
              <div className="service-card__price">
                &pound;40 <span>/ session</span>
              </div>
              <a href="https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/IBAKBSHJ6EXJ3AIQ6LA6DYMU" target="_blank" rel="noopener" className="btn btn-ghost">
                Book Now &rarr;
              </a>
            </div>
            {/* 60 Min — Popular */}
            <div className="service-card service-card--popular">
              <div className="service-card__badge">Most Popular</div>
              <span className="service-card__duration">60 Min</span>
              <h3>Full Body MOT</h3>
              <p>Focuses on key areas like neck, shoulders, back, legs, and arms using deep pressure and stretching techniques to improve flexibility and mobility.</p>
              <div className="service-card__price">
                &pound;50 <span>/ session</span>
              </div>
              <a href="https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/7MNSH64D2X5CJICZSJIRDODX" target="_blank" rel="noopener" className="btn btn-primary">
                Book Now &rarr;
              </a>
            </div>
            {/* 90 Min */}
            <div className="service-card">
              <span className="service-card__duration">90 Min</span>
              <h3>Full Body Reset</h3>
              <p>A comprehensive session using expert sports therapy techniques to enhance performance and well-being. For complex patterns and full recovery.</p>
              <div className="service-card__price">
                &pound;65 <span>/ session</span>
              </div>
              <a href="https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/DR3PZBCHIHE3QDGPIPOUUIQY" target="_blank" rel="noopener" className="btn btn-ghost">
                Book Now &rarr;
              </a>
            </div>
          </div>
          <p className="text-center" style={{ marginTop: '32px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)' }}>
            Not sure which to choose?{' '}
            <Link href="/treatments" style={{ color: 'var(--lavender)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Read the full treatment guide &rarr;</Link>
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="label">What Clients Say</span>
            <h2>Results Speak for Themselves</h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <div className="divider" />

      {/* LOCATION */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="label">Location</span>
            <h2>Find Us in Rotherham</h2>
          </div>
          <div className="location-layout" style={{ gridTemplateColumns: '1fr 1.6fr', gap: '0', alignItems: 'stretch' }}>
            <div className="location-card">
              <span className="label" style={{ marginBottom: '8px' }}>Our Studio</span>
              <div className="location-card__city">Rotherham</div>
              <p style={{ margin: '14px 0 20px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
                Glenwood Kitchens, 6 Front St,<br />Rotherham S60 5QP
              </p>
              <div className="location-card__features">
                <div className="location-card__feature">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Premium private treatment room
                </div>
                <div className="location-card__feature">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Heated memory foam treatment table
                </div>
                <div className="location-card__feature">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Blue-lit, calm &amp; private environment
                </div>
                <div className="location-card__feature">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Evenings &amp; weekends available
                </div>
                <div className="location-card__feature">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Free parking on-site
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                <a href={BOOK_URL} target="_blank" rel="noopener" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Book Now &rarr;</a>
                <a href={MAPS_URL} target="_blank" rel="noopener" className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>Get Directions &rarr;</a>
              </div>
            </div>
            <GoogleMap />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FINAL CTA */}
      <section className="final-cta">
        <span className="label">Ready?</span>
        <h2>Ready to Book?</h2>
        <p>
          Book online in under two minutes. Card payments accepted.
        </p>
        <a href={BOOK_URL} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
          Book Your Treatment Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </a>
        <div className="final-cta__links">
          Questions first?{' '}
          <Link href="/about">Learn about us</Link>
          {' · '}
          <Link href="/corporate">Corporate enquiries</Link>
        </div>
      </section>
    </>
  )
}
