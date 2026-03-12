import type { Metadata } from 'next'
import FaqItem from '@/components/FaqItem'

export const metadata: Metadata = {
  title: 'Treatments & Pricing | Sports Massage Rotherham | HH Massage Therapy',
  description: '30, 45, 60 and 90-minute sports massage and deep tissue sessions in Rotherham. Athlete-level treatment. Real results. Book your session online.',
}

const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'

const treatments = [
  {
    duration: '30 Minutes',
    name: 'Area Focused',
    desc: 'Designed to target specific muscle groups, relieve tension, and enhance overall well-being. Ideal for busy individuals with specific injuries, this focused session uses deep pressure techniques to alleviate muscle tightness, reduce soreness and promote relaxation.',
    tags: ['Post-Training', 'Single Area', 'Maintenance'],
    price: '\u00A330',
    url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/HTDAWTBQHKUVKGOJAYQHUIGH',
    popular: false,
    bestFor: [
      'Post-training recovery flush on legs, glutes, or shoulders',
      'A tight area needing attention between longer sessions',
      'Regular maintenance when you\'re already on top of recovery',
      'Pre-event preparation on a specific muscle group',
      'Athletes who train frequently and need targeted upkeep',
    ],
    whatHappens: 'We go straight to work. No time is wasted on areas that don\'t need treatment. You arrive with a specific problem \u2014 calves locked up after a long run, shoulders seized from training \u2014 and we work that area with the depth and precision it needs.',
    outcomes: ['Reduced DOMS', 'Improved Blood Flow', 'Faster Return to Training'],
  },
  {
    duration: '45 Minutes',
    name: 'Area Focused',
    desc: 'Designed to target specific muscle groups, relieve tension, and enhance overall well-being. Ideal for clients wanting a longer, more thorough massage, this session will target specific injuries using deep pressure techniques to alleviate muscle tightness, reduce soreness and promote relaxation.',
    tags: ['Desk Workers', 'Two-Area Focus', 'Mid-Block Recovery'],
    price: '\u00A340',
    url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/IBAKBSHJ6EXJ3AIQ6LA6DYMU',
    popular: false,
    bestFor: [
      'Desk workers with upper back and neck tension',
      'Athletes managing recurring tightness in two areas',
      'Post-event treatment when you need coverage across two regions',
      'Anyone mid-training block needing specific recovery',
      'Clients who know their body and have a clear target',
    ],
    whatHappens: 'We use the first few minutes to assess where tension is concentrated, then spend the remaining time working through it systematically. Not rushed. Not superficial. A 45-minute session done properly leaves you noticeably different to how you arrived.',
    outcomes: ['Targeted Relief', 'Improved Range', 'Reduced Referral Pain'],
  },
  {
    duration: '60 Minutes',
    name: 'Full Body MOT',
    desc: 'Designed to improve muscle recovery and overall physical well-being. Focuses on key areas like the neck, shoulders, back, legs, and arms, using deep pressure and stretching techniques to relieve muscle tension and improve flexibility.',
    tags: ['Full Assessment', 'First-Timers', 'Monthly Maintenance'],
    price: '\u00A350',
    url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/7MNSH64D2X5CJICZSJIRDODX',
    popular: true,
    bestFor: [
      'First-time clients who want a thorough initial assessment',
      'Athletes in regular training who need full-body maintenance',
      'Office workers with multiple areas of tension',
      'Anyone wanting a complete picture of their postural health',
      'Monthly maintenance clients',
    ],
    whatHappens: "It's great for athletes or anyone active, helping to ease pain, prevent injuries, and boost mobility. We start with a brief assessment \u2014 posture, presenting tension, recent training or workload \u2014 then build your session around what we find. After your session, you'll feel relaxed, refreshed, and ready to move with ease.",
    outcomes: ['Full-Body Reset', 'Improved Posture', 'Reduced Chronic Tension', 'Better Sleep Quality'],
  },
  {
    duration: '90 Minutes',
    name: 'Full Body Reset',
    desc: 'With every body part left rejuvenated, this massage is sure to relieve long term stress and restore balance to the body. This comprehensive session employs expert sports therapy techniques to target muscle tension and promote deep relaxation, enhancing sports performance and overall well-being.',
    tags: ['Peak Training', 'Complex Patterns', 'Full Reset'],
    price: '\u00A365',
    url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/DR3PZBCHIHE3QDGPIPOUUIQY',
    popular: false,
    bestFor: [
      'Athletes in peak training phases or post-competition',
      'Clients with complex, multi-area tension patterns',
      'Anyone who has been neglecting recovery and needs a proper reset',
      'High-performance professionals who invest in recovery like training',
      'Preparation for or return from a significant event',
    ],
    whatHappens: 'A full intake and postural assessment. Ninety minutes of uninterrupted, deep-tissue work across the full body. We identify compensatory patterns, address the source of tension \u2014 not just the symptoms \u2014 and give you a clear picture of what ongoing maintenance should look like.',
    outcomes: ['Deep Muscular Reset', 'Compensatory Pattern Work', 'Postural Correction', 'Comprehensive Recovery'],
  },
]

const faqs = [
  { q: 'Which session is right for me?', a: "If it's your first visit, book the 60-minute Full Body MOT. It gives us enough time to assess properly and still deliver real treatment. If you already know your body and have a specific area to address, the 30 or 45-minute Area Focused works well for maintenance." },
  { q: 'Do I need to be an athlete?', a: "No. The techniques we use are sports-derived, but they work equally well for desk workers, people in manual jobs, and anyone carrying chronic tension. Athletic techniques simply mean better results, regardless of what caused the tension." },
  { q: 'How often should I come?', a: "Most active clients benefit from a session every 2\u20134 weeks. Desk workers in chronic pain often come weekly for the first month, then monthly for maintenance. We'll advise you based on what we find in your first session." },
  { q: 'Will it hurt?', a: "Deep tissue work can be uncomfortable in tense areas \u2014 that's the muscle releasing. We work within your tolerance and communicate throughout. The pressure is always purposeful and always adjusted to you. Post-session soreness for 24-48 hours is normal and a sign the treatment worked." },
  { q: 'What should I do before and after?', a: "Drink water before your session. Avoid heavy training immediately before. After your session, hydrate well and avoid intense exercise for 12\u201324 hours to let the muscles respond. We'll send you full aftercare notes after your first appointment." },
]

export default function TreatmentsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="label">Treatments &amp; Pricing</span>
          <h1>Treatments Built<br />for Performance</h1>
          <p className="lead" style={{ marginTop: '20px' }}>
            Every session at HH Massage Therapy is sports and deep tissue focused as standard. There are no relaxation packages here — because real results require real pressure.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* TREATMENTS LIST */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {treatments.map(t => (
            <div
              key={t.duration}
              className="treatment-card-full"
              style={t.popular ? { borderColor: '#7b7fc2' } : undefined}
            >
              {/* Head */}
              <div
                className="treatment-card-full__head"
                style={t.popular ? { background: 'linear-gradient(135deg,rgba(123,127,194,0.25),rgba(123,127,194,0.06))' } : undefined}
              >
                <div className="treatment-card-full__head-left">
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                    <div className="service-card__duration">{t.duration}</div>
                    {t.popular && (
                      <div className="service-card__badge" style={{ position: 'static' }}>Most Popular</div>
                    )}
                  </div>
                  <h2>{t.name}</h2>
                  <p style={{ marginTop: '12px', maxWidth: '540px' }}>{t.desc}</p>
                  <div className="treatment-card-full__meta">
                    {t.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
                <div className="treatment-card-full__price-block">
                  <div className="treatment-card-full__price-label">From</div>
                  <div className="treatment-card-full__price">{t.price}</div>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener"
                    className={`btn ${t.popular ? 'btn-primary' : 'btn-ghost'}`}
                    style={{ marginTop: '16px' }}
                  >
                    Book This Session &rarr;
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="treatment-card-full__body">
                <div className="treatment-card-full__for">
                  <h4>Best For</h4>
                  <ul>
                    {t.bestFor.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>What Happens</h4>
                  <p style={{ marginTop: '12px', marginBottom: '24px' }}>{t.whatHappens}</p>
                  <h4>Outcomes</h4>
                  <div style={{ marginTop: '12px' }}>
                    {t.outcomes.map(o => <span key={o} className="outcome-pill">{o}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section section--dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <span className="label">Common Questions</span>
              <h2>Treatment FAQ</h2>
              <p style={{ marginTop: '20px' }}>
                Still unsure? Read the questions we get asked most. Or just book the 60-minute — it&apos;s the right choice for almost everyone.
              </p>
              <a href={BOOK_URL} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: '32px' }}>
                Book a Session &rarr;
              </a>
            </div>
            <div className="faq-list">
              {faqs.map(faq => (
                <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <span className="label">Book Your Session</span>
        <h2>Your Tightest Muscles<br />Are Waiting.</h2>
        <p>Book in under two minutes.</p>
        <a href={BOOK_URL} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
          Book Your Treatment Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </a>
      </section>
    </>
  )
}
