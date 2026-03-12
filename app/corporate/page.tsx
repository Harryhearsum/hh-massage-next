import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Wellness Rotherham | Team Massage Packages | HH Massage Therapy',
  description: 'Corporate wellness packages for Rotherham businesses. On-site wellbeing days, monthly contracts, and employee benefit programmes. Enquire today.',
}

export default function CorporatePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-28" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(123,127,194,0.12) 0%, transparent 60%), var(--blue-deep)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <span className="label">For Businesses &amp; HR Teams · Rotherham</span>
          <h1 style={{ fontSize: 'clamp(2.6rem,5.5vw,5rem)', marginBottom: '24px' }}>
            Your People Are Your<br />Most Valuable Asset.<br />
            <span style={{ color: 'var(--lavender)' }}>Treat Them Like It.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '640px', color: 'var(--white-80)', lineHeight: 1.65, marginBottom: '40px' }}>
            HH corporate wellness packages give your team access to premium sports and deep tissue therapy — reducing absence, improving morale, and building a workplace culture worth working for.
          </p>
          <div className="flex gap-4 flex-wrap mb-12">
            <a href="#enquire"
              className="inline-flex items-center gap-2.5 rounded-full font-semibold"
              style={{ padding: '20px 44px', fontSize: '1.05rem', background: 'var(--lavender)', color: '#fff' }}>
              Request a Corporate Proposal →
            </a>
            <a href="#packages"
              className="inline-flex items-center gap-2.5 rounded-full font-semibold"
              style={{ padding: '20px 44px', fontSize: '1.05rem', border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}>
              See Packages
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            {['Trusted by Rotherham businesses', 'Fully insured & professional', 'Proposal within 48 hours', 'On-site or studio options'].map(item => (
              <div key={item} className="flex items-center gap-2" style={{ fontSize: '0.85rem', color: 'var(--white-80)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16" style={{ color: 'var(--lavender)', flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* THE BUSINESS CASE */}
      <section className="py-24">
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-14">
            <span className="label">The Business Case</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>The Cost of Ignoring<br />Workplace Wellness</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden mb-14" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
            {[
              { value: '£28bn', label: 'Annual cost of musculoskeletal conditions to UK employers' },
              { value: '17m', label: 'Working days lost to MSK disorders in the UK each year' },
              { value: '6x', label: 'Average ROI for every £1 spent on employee wellbeing' },
            ].map((s, i) => (
              <div key={i} className="text-center py-10 px-8" style={{ background: 'rgba(255,255,255,0.04)', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--lavender)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '8px' }}>{s.value}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--white-80)' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mx-auto" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.75 }}>
              The question isn&apos;t whether you can afford to invest in your team&apos;s physical health. It&apos;s whether you can afford not to. Neck pain, lower back tension, and desk-driven postural problems are the leading causes of short-term absence in UK offices. We fix the exact things that are costing you the most.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PACKAGES */}
      <section className="py-24" id="packages" style={{ background: 'var(--blue-dark)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-14">
            <span className="label">What We Offer</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Three Ways to Work With Us</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                featured: false,
                title: 'Workplace Wellbeing Day',
                desc: 'Bring HH to your office. We set up a professional treatment space and deliver back-to-back sessions for your team throughout the day.',
                includes: ['Portable professional treatment setup', 'Pre-event health screening forms', 'Post-event summary report', 'Follow-up booking links for each team member', '20 or 30-minute slots per person'],
                note: 'Minimum 8 participants',
                cta: 'Enquire About a Wellbeing Day →',
                primary: false,
              },
              {
                featured: true,
                badge: 'Most Popular',
                title: 'Monthly Team Wellness Contract',
                desc: 'We become your embedded wellness provider. Scheduled sessions at your premises or studios on a rolling monthly basis.',
                includes: ['Monthly or bi-monthly sessions for your team', 'Priority booking for staff', 'Monthly wellness usage report', 'Discounted rate vs. standard pricing', 'Named account manager', 'Flexible on-site or studio delivery'],
                note: '',
                cta: 'Enquire About a Contract →',
                primary: true,
              },
              {
                featured: false,
                title: 'Employee Benefit Access',
                desc: 'Give your team access to HH at a group-discounted rate as a formal employee benefit. They book. We treat. You report.',
                includes: ['Private booking portal for staff', 'Up to 20% group discount on all sessions', 'Monthly usage report for HR', 'Simple consolidated invoicing', 'No minimum commitment', 'Scales with your headcount'],
                note: '',
                cta: 'Enquire About Employee Benefits →',
                primary: false,
              },
            ].map(pkg => (
              <div key={pkg.title}
                className="flex flex-col gap-5 p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: pkg.featured ? 'linear-gradient(160deg, rgba(123,127,194,0.18), rgba(123,127,194,0.04))' : 'rgba(255,255,255,0.06)',
                  border: pkg.featured ? '1px solid var(--lavender)' : '1px solid rgba(255,255,255,0.12)',
                }}>
                {'badge' in pkg && (
                  <span className="inline-block text-[0.68rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit"
                    style={{ background: 'var(--lavender)', color: '#fff' }}>{pkg.badge}</span>
                )}
                <h3 style={{ fontSize: '1.5rem' }}>{pkg.title}</h3>
                <p style={{ fontSize: '0.92rem' }}>{pkg.desc}</p>
                <ul className="flex flex-col gap-2.5 flex-1">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex gap-3 items-start" style={{ fontSize: '0.88rem', color: 'var(--white-80)' }}>
                      <span style={{ color: 'var(--lavender)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {pkg.note && <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{pkg.note}</p>}
                <a href="#enquire"
                  className="flex justify-center items-center py-3.5 rounded-full font-semibold text-sm transition-all"
                  style={pkg.primary ? { background: 'var(--lavender)', color: '#fff' } : { border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}>
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-14">
            <span className="label">Process</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Simple to Set Up.<br />Easier to Run.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '1', title: 'Enquire', desc: "Fill in the short form below. Tell us your headcount, what you're hoping to achieve, and whether you're thinking on-site or studio-based." },
              { num: '2', title: 'Proposal in 48 Hours', desc: "We'll put together a tailored proposal — no generic packages, no unnecessary add-ons. Just what makes sense for your team." },
              { num: '3', title: 'Confirm & Schedule', desc: "Sign off and we handle the rest. Scheduling, health forms, communications. You focus on running your business." },
              { num: '4', title: 'Ongoing Review', desc: "Monthly check-ins to adjust, optimise, and make sure your team is actually benefiting — not just counting sessions." },
            ].map(step => (
              <div key={step.num} className="text-center p-9">
                <div className="flex items-center justify-center mx-auto mb-5 font-black text-xl rounded-full"
                  style={{ width: '56px', height: '56px', background: 'var(--lavender-glow)', border: '1px solid rgba(123,127,194,0.3)', color: 'var(--lavender)' }}>
                  {step.num}
                </div>
                <h4 className="mb-2.5">{step.title}</h4>
                <p style={{ fontSize: '0.88rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIAL */}
      <section className="py-24" style={{ background: 'var(--blue-dark)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '860px' }}>
          <div className="text-center rounded-3xl p-14" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <div className="flex justify-center gap-1 mb-7 text-xl" style={{ color: '#fbbf24' }}>★★★★★</div>
            <p className="mb-8 italic" style={{ fontSize: '1.18rem', lineHeight: 1.72, color: 'var(--white-80)' }}>
              &ldquo;Couldn&apos;t recommend Harry more if I tried. He has helped improve my shoulder injury of over 10 years more than any physio or previous sports massage I&apos;ve tried. He is also extremely professional, polite, knowledgable &amp; warm. Highly recommend getting booked in.&rdquo;
            </p>
            <strong className="block">H Chapman</strong>
            <span style={{ fontSize: '0.88rem', color: 'var(--lavender)' }}>Google Review · 5.0 ★★★★★</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ENQUIRY FORM */}
      <section className="py-24" id="enquire">
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid gap-18 items-start" style={{ gridTemplateColumns: '1fr 1.4fr', gap: '72px' }}>
            <div>
              <span className="label">Get in Touch</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)' }}>Let&apos;s Talk About Your Team</h2>
              <p style={{ marginTop: '20px', marginBottom: '32px' }}>
                Fill in the form and we&apos;ll come back to you within one business day with a tailored proposal. No obligation. No hard sell.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { num: '✓', title: 'Proposal within 48 hours', desc: "We don't keep you waiting. One business day turnaround on all corporate enquiries." },
                  { num: '✓', title: 'No lock-in contracts', desc: "Monthly arrangements. Cancel with notice. We earn your business by delivering results." },
                  { num: '✓', title: 'Tailored to your team', desc: "No generic packages. Every proposal is built around what your specific team needs." },
                ].map(item => (
                  <div key={item.title} className="flex gap-6 items-start p-6 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <div style={{ fontSize: '1.6rem', color: 'var(--lavender)', flexShrink: 0, minWidth: '36px' }}>{item.num}</div>
                    <div>
                      <h4 className="mb-1.5">{item.title}</h4>
                      <p style={{ fontSize: '0.88rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="rounded-2xl p-12" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { id: 'firstName', label: 'First Name *', type: 'text', placeholder: 'Your first name', full: false },
                  { id: 'lastName', label: 'Last Name *', type: 'text', placeholder: 'Your last name', full: false },
                  { id: 'company', label: 'Company Name *', type: 'text', placeholder: 'Your company', full: false },
                  { id: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'e.g. HR Director', full: false },
                  { id: 'email', label: 'Work Email *', type: 'email', placeholder: 'you@company.com', full: true },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Optional', full: false },
                ].map(field => (
                  <div key={field.id} className={`flex flex-col gap-2 ${field.full ? 'col-span-2' : ''}`}>
                    <label htmlFor={field.id} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--white-80)' }}>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl px-4 py-3.5 text-[0.95rem]"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'inherit', outline: 'none' }}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label htmlFor="teamSize" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--white-80)' }}>Team Size</label>
                  <select id="teamSize" className="w-full rounded-xl px-4 py-3.5 text-[0.95rem]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'inherit' }}>
                    <option value="">Select range</option>
                    <option>1–10 employees</option><option>11–25 employees</option>
                    <option>26–50 employees</option><option>51–100 employees</option><option>100+ employees</option>
                  </select>
                </div>

                <div className="col-span-2 flex flex-col gap-2">
                  <label htmlFor="interest" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--white-80)' }}>What are you interested in? *</label>
                  <select id="interest" className="w-full rounded-xl px-4 py-3.5 text-[0.95rem]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'inherit' }}>
                    <option value="">Select an option</option>
                    <option>Workplace Wellbeing Day</option>
                    <option>Monthly Team Wellness Contract</option>
                    <option>Employee Benefit Access</option>
                    <option>Not sure yet — tell me more</option>
                  </select>
                </div>

                <div className="col-span-2 flex flex-col gap-2">
                  <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--white-80)' }}>Anything else we should know?</label>
                  <textarea id="message" placeholder="Tell us about your team, current challenges, or what you'd like to achieve..."
                    className="w-full rounded-xl px-4 py-3.5 text-[0.95rem]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'inherit', minHeight: '120px', resize: 'vertical' }}
                  />
                </div>
              </div>

              <button type="submit" className="w-full flex justify-center items-center gap-2.5 mt-2 py-5 rounded-full font-semibold text-base"
                style={{ background: 'var(--lavender)', color: '#fff', boxShadow: '0 0 24px rgba(123,127,194,0.35)' }}>
                Send Enquiry
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </button>
              <p className="text-center mt-4" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                We respond to all corporate enquiries within one business day. Your information is never shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
