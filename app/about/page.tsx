import type { Metadata } from 'next'
import Image from 'next/image'
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
      <section className="pt-40 pb-24"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(123,127,194,0.12) 0%, transparent 60%), var(--blue-deep)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <span className="label">About HH Massage Therapy</span>
          <h1 style={{ fontSize: 'clamp(2.6rem,5.5vw,5rem)', marginBottom: '20px' }}>
            Built on Results.<br />Not on Reputation Alone.
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '620px', color: 'var(--white-80)', lineHeight: 1.65, marginTop: '20px' }}>
            HH Massage Therapy was built because the standard of sports and deep tissue therapy available locally didn&apos;t meet the standard that athletes and active professionals actually need.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* STORY */}
      <section className="py-24">
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid gap-16 items-center" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5', border: '1px solid rgba(123,127,194,0.2)' }}>
              <Image
                src="/images/DSC00334.JPG"
                alt="Harry performing a sports massage treatment in the blue-lit Rotherham studio"
                width={600}
                height={750}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>

            {/* Content */}
            <div>
              <span className="label">The Story</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Why We Exist</h2>
              <p style={{ marginTop: '24px', marginBottom: '20px', fontSize: '1.05rem' }}>
                Too many practices offering massage as relaxation with a sports-sounding name. Too many generic treatments with no real assessment. Too little pressure, too much talking, too few results.
              </p>
              <p style={{ marginBottom: '20px' }}>
                We exist to do it properly. From the treatment table to the booking process, every decision at HH is made with one question in mind: does this produce a better outcome for the client?
              </p>
              <p>The answer has to be yes — or we don&apos;t do it.</p>

              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { title: 'Level 4 Sports Massage Therapy', icon: 'graduation' },
                  { title: 'Fully Insured Professional Practice', icon: 'shield' },
                  { title: '200+ 5-Star Sessions Delivered', icon: 'star' },
                  { title: 'Rotherham Studio', icon: 'location' },
                ].map(cred => (
                  <div key={cred.title} className="flex gap-4 items-center p-5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="22" height="22" style={{ color: 'var(--lavender)', flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>{cred.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* METHOD */}
      <section className="py-24" style={{ background: 'var(--blue-dark)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid gap-16 items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <span className="label">How We Work</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Our Approach to Treatment</h2>
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
            <div className="flex flex-col gap-5">
              {[
                { num: '01', title: 'Assessment First', desc: 'Posture, movement, tension patterns — assessed before we begin. No guessing.' },
                { num: '02', title: 'Purpose-Driven Technique', desc: 'Sports massage, deep tissue, myofascial release, trigger point — we use what works, not what\'s fashionable.' },
                { num: '03', title: 'Premium Environment', desc: 'Heated memory foam table. Blue-lit, private, temperature-controlled room. Because the environment affects the outcome.' },
                { num: '04', title: 'Results You Can Feel', desc: 'We tell you what we found, what we did, and what to do next. Every single session.' },
              ].map(item => (
                <div key={item.num} className="flex gap-6 items-start p-7 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--lavender)', opacity: 0.35, lineHeight: 1, flexShrink: 0, minWidth: '40px' }}>{item.num}</div>
                  <div>
                    <h4 className="mb-1.5" style={{ fontSize: '1.05rem', color: '#fff' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* VISION */}
      <section className="py-24">
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="rounded-2xl p-16 text-center" style={{ background: 'linear-gradient(135deg, rgba(123,127,194,0.12), rgba(123,127,194,0.03))', border: '1px solid rgba(123,127,194,0.2)' }}>
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <span className="label">The Vision</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', marginBottom: '28px' }}>Where We&apos;re Going</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '20px' }}>
                HH Massage Therapy is growing. Rotherham is the foundation. The long-term vision is a team of accredited therapists delivering consistent, premium-standard recovery therapy across South Yorkshire — and a corporate wellness programme that serves organisations across the region.
              </p>
              <p style={{ marginBottom: '40px' }}>
                Every decision we make now is made with that standard in mind. The same treatment quality. The same level of care. Scaled.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href={BOOK_URL} target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2.5 rounded-full font-semibold transition-all"
                  style={{ padding: '20px 44px', fontSize: '1.05rem', background: 'var(--lavender)', color: '#fff', boxShadow: '0 0 32px rgba(123,127,194,0.35)' }}>
                  Book a Session →
                </a>
                <Link href="/corporate"
                  className="inline-flex items-center gap-2.5 rounded-full font-semibold transition-all"
                  style={{ padding: '20px 44px', fontSize: '1.05rem', border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}>
                  Corporate Enquiries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* JOIN THE TEAM */}
      <section className="py-24" style={{ background: 'var(--blue-dark)' }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: '680px' }}>
          <span className="label">Therapist Opportunities</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Are You a Qualified Sports Massage Therapist?</h2>
          <p style={{ marginTop: '20px', marginBottom: '32px', fontSize: '1.05rem' }}>
            If you&apos;re a qualified sports massage therapist who shares our standard and our ambition — we&apos;d like to hear from you. HH is building a team of professionals who want to work at the top end of the industry.
          </p>
          <a href="mailto:join@hhmassagetherapy.co.uk"
            className="inline-flex items-center gap-2.5 rounded-full font-semibold transition-all"
            style={{ padding: '20px 44px', fontSize: '1.05rem', border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}>
            Make a Therapist Enquiry
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-32 px-6" style={{ background: '#f0f2f9', color: 'var(--blue-deep)' }}>
        <span className="label">Ready?</span>
        <h2 className="mb-5" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', color: 'var(--blue-deep)' }}>Experience the Difference.</h2>
        <p className="mx-auto mb-12" style={{ fontSize: '1.1rem', maxWidth: '520px', color: 'rgba(20,28,107,0.65)' }}>
          Book your first session and find out why our clients keep coming back.
        </p>
        <a href={BOOK_URL} target="_blank" rel="noopener"
          className="inline-flex items-center gap-2.5 rounded-full font-semibold transition-all"
          style={{ padding: '20px 44px', fontSize: '1.05rem', background: 'var(--lavender)', color: '#fff', boxShadow: '0 0 32px rgba(123,127,194,0.35)' }}>
          Book Your Treatment Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </a>
      </section>
    </>
  )
}
