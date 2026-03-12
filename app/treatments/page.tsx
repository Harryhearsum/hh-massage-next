import type { Metadata } from 'next'
import Link from 'next/link'
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
    price: '£30',
    url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/HTDAWTBQHKUVKGOJAYQHUIGH',
    popular: false,
    bestFor: [
      'Post-training recovery flush on legs, glutes, or shoulders',
      'A tight area needing attention between longer sessions',
      'Regular maintenance when you\'re already on top of recovery',
      'Pre-event preparation on a specific muscle group',
      'Athletes who train frequently and need targeted upkeep',
    ],
    whatHappens: 'We go straight to work. No time is wasted on areas that don\'t need treatment. You arrive with a specific problem — calves locked up after a long run, shoulders seized from training — and we work that area with the depth and precision it needs.',
    outcomes: ['Reduced DOMS', 'Improved Blood Flow', 'Faster Return to Training'],
  },
  {
    duration: '45 Minutes',
    name: 'Area Focused',
    desc: 'Designed to target specific muscle groups, relieve tension, and enhance overall well-being. Ideal for clients wanting a longer, more thorough massage, this session will target specific injuries using deep pressure techniques to alleviate muscle tightness, reduce soreness and promote relaxation.',
    tags: ['Desk Workers', 'Two-Area Focus', 'Mid-Block Recovery'],
    price: '£40',
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
    price: '£50',
    url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/7MNSH64D2X5CJICZSJIRDODX',
    popular: true,
    bestFor: [
      'First-time clients who want a thorough initial assessment',
      'Athletes in regular training who need full-body maintenance',
      'Office workers with multiple areas of tension',
      'Anyone wanting a complete picture of their postural health',
      'Monthly maintenance clients',
    ],
    whatHappens: "It's great for athletes or anyone active, helping to ease pain, prevent injuries, and boost mobility. We start with a brief assessment — posture, presenting tension, recent training or workload — then build your session around what we find. After your session, you'll feel relaxed, refreshed, and ready to move with ease.",
    outcomes: ['Full-Body Reset', 'Improved Posture', 'Reduced Chronic Tension', 'Better Sleep Quality'],
  },
  {
    duration: '90 Minutes',
    name: 'Full Body Reset',
    desc: 'With every body part left rejuvenated, this massage is sure to relieve long term stress and restore balance to the body. This comprehensive session employs expert sports therapy techniques to target muscle tension and promote deep relaxation, enhancing sports performance and overall well-being.',
    tags: ['Peak Training', 'Complex Patterns', 'Full Reset'],
    price: '£65',
    url: 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9/services/DR3PZBCHIHE3QDGPIPOUUIQY',
    popular: false,
    bestFor: [
      'Athletes in peak training phases or post-competition',
      'Clients with complex, multi-area tension patterns',
      'Anyone who has been neglecting recovery and needs a proper reset',
      'High-performance professionals who invest in recovery like training',
      'Preparation for or return from a significant event',
    ],
    whatHappens: 'A full intake and postural assessment. Ninety minutes of uninterrupted, deep-tissue work across the full body. We identify compensatory patterns, address the source of tension — not just the symptoms — and give you a clear picture of what ongoing maintenance should look like.',
    outcomes: ['Deep Muscular Reset', 'Compensatory Pattern Work', 'Postural Correction', 'Comprehensive Recovery'],
  },
]

const faqs = [
  { q: 'Which session is right for me?', a: "If it's your first visit, book the 60-minute Full Body MOT. It gives us enough time to assess properly and still deliver real treatment. If you already know your body and have a specific area to address, the 30 or 45-minute Area Focused works well for maintenance." },
  { q: 'Do I need to be an athlete?', a: "No. The techniques we use are sports-derived, but they work equally well for desk workers, people in manual jobs, and anyone carrying chronic tension. Athletic techniques simply mean better results, regardless of what caused the tension." },
  { q: 'How often should I come?', a: "Most active clients benefit from a session every 2–4 weeks. Desk workers in chronic pain often come weekly for the first month, then monthly for maintenance. We'll advise you based on what we find in your first session." },
  { q: 'Will it hurt?', a: "Deep tissue work can be uncomfortable in tense areas — that's the muscle releasing. We work within your tolerance and communicate throughout. The pressure is always purposeful and always adjusted to you. Post-session soreness for 24-48 hours is normal and a sign the treatment worked." },
  { q: 'What should I do before and after?', a: "Drink water before your session. Avoid heavy training immediately before. After your session, hydrate well and avoid intense exercise for 12–24 hours to let the muscles respond. We'll send you full aftercare notes after your first appointment." },
]

export default function TreatmentsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(123,127,194,0.12) 0%, transparent 60%), var(--blue-deep)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <span className="label">Treatments &amp; Pricing</span>
          <h1 style={{ fontSize: 'clamp(2.6rem,5.5vw,5rem)', marginBottom: '20px' }}>
            Treatments Built<br />for Performance
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '620px', color: 'var(--white-80)', lineHeight: 1.65, marginTop: '20px' }}>
            Every session at HH Massage Therapy is sports and deep tissue focused as standard. There are no relaxation packages here — because real results require real pressure.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* TREATMENT LIST */}
      <section className="py-24">
        <div className="mx-auto px-6 flex flex-col gap-6" style={{ maxWidth: '1200px' }}>
          {treatments.map(t => (
            <div key={t.duration} className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.06)', border: t.popular ? '1px solid var(--lavender)' : '1px solid rgba(255,255,255,0.12)' }}>

              {/* Header */}
              <div className="p-10 flex items-start justify-between gap-6 flex-wrap"
                style={{ background: t.popular ? 'linear-gradient(135deg,rgba(123,127,194,0.25),rgba(123,127,194,0.06))' : undefined }}>
                <div style={{ flex: 1 }}>
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="inline-block text-[0.75rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full"
                      style={{ background: 'var(--lavender-glow)', color: 'var(--lavender)' }}>{t.duration}</span>
                    {t.popular && <span className="inline-block text-[0.68rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: 'var(--lavender)', color: '#fff' }}>Most Popular</span>}
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>{t.name}</h2>
                  <p style={{ maxWidth: '540px', fontSize: '0.95rem' }}>{t.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {t.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div style={{ fontSize: '0.82rem', color: 'var(--white-50)', marginBottom: '4px' }}>From</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{t.price}</div>
                  <a href={t.url} target="_blank" rel="noopener"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full font-semibold text-sm transition-all"
                    style={t.popular ? { background: 'var(--lavender)', color: '#fff' } : { border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}>
                    Book This Session →
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-10 grid gap-12" style={{ gridTemplateColumns: '1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>Best For</h4>
                  <ul className="flex flex-col gap-2.5">
                    {t.bestFor.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start" style={{ fontSize: '0.92rem', color: 'var(--white-80)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--lavender)', flexShrink: 0, marginTop: '7px', display: 'block' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>What Happens</h4>
                  <p style={{ fontSize: '0.92rem', marginBottom: '24px' }}>{t.whatHappens}</p>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Outcomes</h4>
                  <div className="flex flex-wrap">
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
      <section className="py-24" style={{ background: 'var(--blue-dark)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid gap-16 items-start" style={{ gridTemplateColumns: '1fr 1.4fr' }}>
            <div>
              <span className="label">Common Questions</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Treatment FAQ</h2>
              <p style={{ marginTop: '20px', color: 'var(--white-80)' }}>
                Still unsure? Read the questions we get asked most. Or just book the 60-minute — it&apos;s the right choice for almost everyone.
              </p>
              <a href={BOOK_URL} target="_blank" rel="noopener"
                className="inline-flex items-center gap-2.5 rounded-full font-semibold transition-all mt-8"
                style={{ padding: '16px 32px', fontSize: '0.95rem', background: 'var(--lavender)', color: '#fff' }}>
                Book a Session →
              </a>
            </div>
            <div className="flex flex-col gap-1">
              {faqs.map(faq => (
                <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-32 px-6" style={{ background: '#f0f2f9', color: 'var(--blue-deep)' }}>
        <span className="label">Book Your Session</span>
        <h2 className="mb-5" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', color: 'var(--blue-deep)' }}>
          Your Tightest Muscles<br />Are Waiting.
        </h2>
        <p className="mx-auto mb-12" style={{ fontSize: '1.1rem', maxWidth: '520px', color: 'rgba(20,28,107,0.65)' }}>
          Book in under two minutes.
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
