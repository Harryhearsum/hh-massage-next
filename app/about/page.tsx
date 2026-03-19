import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About HH Massage Therapy | Rotherham Sports Massage Therapist',
  description: 'HH Massage Therapy delivers premium sports and deep tissue therapy in Rotherham. Performance recovery built for athletes and professionals.',
}

const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="label">About HH Massage Therapy</span>
          <h1>Built on Results.<br />Not on Reputation Alone.</h1>
          <p className="lead" style={{ marginTop: '20px', maxWidth: '620px' }}>
            HH Massage Therapy was built because the standard of sports and deep tissue therapy available locally didn&apos;t meet the standard that athletes and active professionals actually need.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            {/* Photo */}
            <div className="about-visual">
              <img
                src="/images/DSC00334.JPG"
                alt="Harry performing a sports massage treatment in the blue-lit Rotherham studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>

            {/* Content */}
            <div>
              <span className="label">The Story</span>
              <h2>Why We Exist</h2>
              <p style={{ marginTop: '24px', marginBottom: '20px', fontSize: '1.05rem' }}>
                Too many practices offering massage as relaxation with a sports-sounding name. Too many generic treatments with no real assessment. Too little pressure, too little communication, too few results.
              </p>
              <p style={{ marginBottom: '20px' }}>
                We exist to do it properly. From the treatment table to the booking process, every decision at HH is made with one question in mind: does this produce a better outcome for the client?
              </p>
              <p>The answer has to be yes — or we don&apos;t do it.</p>

              <div className="creds-grid">
                <div className="cred-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                  <span>Level 4 Sports Massage Therapy</span>
                </div>
                <div className="cred-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                  <span>Fully Insured Professional Practice</span>
                </div>
                <div className="cred-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                  <span>200+ 5-Star Sessions Delivered</span>
                </div>
                <div className="cred-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span>Rotherham Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* THE METHOD */}
      <section className="section section--dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <span className="label">How We Work</span>
              <h2>Our Approach to Treatment</h2>
              <p style={{ marginTop: '24px', marginBottom: '20px', fontSize: '1.05rem' }}>
                Every client who comes through our door gets an assessment before hands-on work begins.
              </p>
              <p style={{ marginBottom: '20px' }}>
                We look at posture, movement, recent training load, occupation, and where you&apos;re holding tension — and we build your session around what we find, not around a default routine.
              </p>
              <p>
                Our techniques draw from sports massage, deep tissue therapy, myofascial release, and trigger point work. We use the method that gets the result — not the one that sounds most impressive.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="diff-item" style={{ padding: '28px 32px' }}>
                <div className="diff-item__num" style={{ fontSize: '1.5rem', minWidth: '40px' }}>01</div>
                <div>
                  <h4>Assessment First</h4>
                  <p style={{ fontSize: '0.9rem' }}>Posture, movement, tension patterns — assessed before we begin. No guessing.</p>
                </div>
              </div>
              <div className="diff-item" style={{ padding: '28px 32px' }}>
                <div className="diff-item__num" style={{ fontSize: '1.5rem', minWidth: '40px' }}>02</div>
                <div>
                  <h4>Purpose-Driven Technique</h4>
                  <p style={{ fontSize: '0.9rem' }}>Sports massage, deep tissue, myofascial release, trigger point — we use what works, not what&apos;s fashionable.</p>
                </div>
              </div>
              <div className="diff-item" style={{ padding: '28px 32px' }}>
                <div className="diff-item__num" style={{ fontSize: '1.5rem', minWidth: '40px' }}>03</div>
                <div>
                  <h4>Premium Environment</h4>
                  <p style={{ fontSize: '0.9rem' }}>Heated memory foam table. Blue-lit, private, temperature-controlled room. Because the environment affects the outcome.</p>
                </div>
              </div>
              <div className="diff-item" style={{ padding: '28px 32px' }}>
                <div className="diff-item__num" style={{ fontSize: '1.5rem', minWidth: '40px' }}>04</div>
                <div>
                  <h4>Results You Can Feel</h4>
                  <p style={{ fontSize: '0.9rem' }}>We tell you what we found, what we did, and what to do next. Every single session.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* VISION */}
      <section className="section">
        <div className="container">
          <div className="vision-block">
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <span className="label">The Vision</span>
              <h2 style={{ marginBottom: '28px' }}>Where We&apos;re Going</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '20px' }}>
                HH Massage Therapy is growing. Rotherham is the foundation. The long-term vision is a team of accredited therapists delivering consistent, premium-standard recovery therapy across South Yorkshire — and a corporate wellness programme that serves organisations across the region.
              </p>
              <p style={{ marginBottom: '40px' }}>
                Every decision we make now is made with that standard in mind. The same treatment quality. The same level of care. Scaled.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  Book a Session &rarr;
                </a>
                <Link href="/corporate" className="btn btn-ghost btn-lg">
                  Corporate Enquiries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* JOIN THE TEAM */}
      <section className="section section--dark">
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <span className="label">Therapist Opportunities</span>
            <h2>Are You a Qualified Sports Massage Therapist?</h2>
            <p style={{ marginTop: '20px', marginBottom: '32px', fontSize: '1.05rem' }}>
              If you&apos;re a qualified sports massage therapist who shares our standard and our ambition — we&apos;d like to hear from you. HH is building a team of professionals who want to work at the top end of the industry.
            </p>
            <a href="mailto:join@hhmassagetherapy.co.uk" className="btn btn-ghost btn-lg">
              Make a Therapist Enquiry
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <span className="label">Ready?</span>
        <h2>Experience the Difference.</h2>
        <p>Book your first session and find out why our clients keep coming back.</p>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
          Book Your Treatment Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </a>
      </section>
    </>
  )
}
