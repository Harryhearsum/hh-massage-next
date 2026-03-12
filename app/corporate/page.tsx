import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Wellness Rotherham | Team Massage Packages | HH Massage Therapy',
  description: 'Corporate wellness packages for Rotherham businesses. On-site wellbeing days, monthly contracts, and employee benefit programmes. Enquire today.',
}

export default function CorporatePage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero" style={{ paddingBottom: '112px' }}>
        <div className="container">
          <span className="label">For Businesses &amp; HR Teams &middot; Rotherham</span>
          <h1>Your People Are Your<br />Most Valuable Asset.<br /><span className="text-lavender">Treat Them Like It.</span></h1>
          <p className="lead" style={{ marginTop: '24px', maxWidth: '640px' }}>
            HH corporate wellness packages give your team access to premium sports and deep tissue therapy — reducing absence, improving morale, and building a workplace culture worth working for.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '40px' }}>
            <a href="#enquire" className="btn btn-primary btn-lg">Request a Corporate Proposal &rarr;</a>
            <a href="#packages" className="btn btn-ghost btn-lg">See Packages</a>
          </div>
          <div className="hero__trust" style={{ marginTop: '48px' }}>
            <div className="hero__trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Trusted by Rotherham businesses
            </div>
            <div className="hero__trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Fully insured &amp; professional
            </div>
            <div className="hero__trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Proposal within 48 hours
            </div>
            <div className="hero__trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              On-site or studio options
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* THE BUSINESS CASE */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="label">The Business Case</span>
            <h2>The Cost of Ignoring<br />Workplace Wellness</h2>
          </div>
          <div className="stats-bar" style={{ marginBottom: '56px' }}>
            <div className="stat-item">
              <div className="stat-item__value">&pound;28<span>bn</span></div>
              <div className="stat-item__label">Annual cost of musculoskeletal conditions to UK employers</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__value">17<span>m</span></div>
              <div className="stat-item__label">Working days lost to MSK disorders in the UK each year</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__value">6<span>x</span></div>
              <div className="stat-item__label">Average ROI for every &pound;1 spent on employee wellbeing</div>
            </div>
          </div>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.75 }}>
              The question isn&apos;t whether you can afford to invest in your team&apos;s physical health. It&apos;s whether you can afford not to. Neck pain, lower back tension, and desk-driven postural problems are the leading causes of short-term absence in UK offices. We fix the exact things that are costing you the most.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PACKAGES */}
      <section className="section section--dark" id="packages">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="label">What We Offer</span>
            <h2>Three Ways to Work With Us</h2>
          </div>
          <div className="package-grid">
            {/* Wellbeing Day */}
            <div className="package-card">
              <div className="package-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
              </div>
              <h3>Workplace Wellbeing Day</h3>
              <p style={{ fontSize: '0.92rem' }}>Bring HH to your office. We set up a professional treatment space and deliver back-to-back sessions for your team throughout the day.</p>
              <ul className="package-card__includes">
                <li>Portable professional treatment setup</li>
                <li>Pre-event health screening forms</li>
                <li>Post-event summary report</li>
                <li>Follow-up booking links for each team member</li>
                <li>20 or 30-minute slots per person</li>
              </ul>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: 0 }}>Minimum 8 participants</p>
              <a href="#enquire" className="btn btn-ghost">Enquire About a Wellbeing Day &rarr;</a>
            </div>

            {/* Monthly Contract */}
            <div className="package-card package-card--featured">
              <div className="package-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" /></svg>
              </div>
              <div className="service-card__badge" style={{ position: 'static', display: 'inline-block', marginBottom: '8px' }}>Most Popular</div>
              <h3>Monthly Team Wellness Contract</h3>
              <p style={{ fontSize: '0.92rem' }}>We become your embedded wellness provider. Scheduled sessions at your premises or studios on a rolling monthly basis.</p>
              <ul className="package-card__includes">
                <li>Monthly or bi-monthly sessions for your team</li>
                <li>Priority booking for staff</li>
                <li>Monthly wellness usage report</li>
                <li>Discounted rate vs. standard pricing</li>
                <li>Named account manager</li>
                <li>Flexible on-site or studio delivery</li>
              </ul>
              <a href="#enquire" className="btn btn-primary">Enquire About a Contract &rarr;</a>
            </div>

            {/* Employee Benefits */}
            <div className="package-card">
              <div className="package-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
              </div>
              <h3>Employee Benefit Access</h3>
              <p style={{ fontSize: '0.92rem' }}>Give your team access to HH at a group-discounted rate as a formal employee benefit. They book. We treat. You report.</p>
              <ul className="package-card__includes">
                <li>Private booking portal for staff</li>
                <li>Up to 20% group discount on all sessions</li>
                <li>Monthly usage report for HR</li>
                <li>Simple consolidated invoicing</li>
                <li>No minimum commitment</li>
                <li>Scales with your headcount</li>
              </ul>
              <a href="#enquire" className="btn btn-ghost">Enquire About Employee Benefits &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="label">Process</span>
            <h2>Simple to Set Up.<br />Easier to Run.</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-card__num">1</div>
              <h4>Enquire</h4>
              <p>Fill in the short form below. Tell us your headcount, what you&apos;re hoping to achieve, and whether you&apos;re thinking on-site or studio-based.</p>
            </div>
            <div className="step-card">
              <div className="step-card__num">2</div>
              <h4>Proposal in 48 Hours</h4>
              <p>We&apos;ll put together a tailored proposal — no generic packages, no unnecessary add-ons. Just what makes sense for your team.</p>
            </div>
            <div className="step-card">
              <div className="step-card__num">3</div>
              <h4>Confirm &amp; Schedule</h4>
              <p>Sign off and we handle the rest. Scheduling, health forms, communications. You focus on running your business.</p>
            </div>
            <div className="step-card">
              <div className="step-card__num">4</div>
              <h4>Ongoing Review</h4>
              <p>Monthly check-ins to adjust, optimise, and make sure your team is actually benefiting — not just counting sessions.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIAL */}
      <section className="section section--dark">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="testimonial-card">
              <div className="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-card__quote">
                &ldquo;Couldn&apos;t recommend Harry more if I tried. He has helped improve my shoulder injury of over 10 years more than any physio or previous sports massage I&apos;ve tried. He is also extremely professional, polite, knowledgable &amp; warm. Highly recommend getting booked in.&rdquo;
              </p>
              <div className="testimonial-card__author">
                <strong>H Chapman</strong>
                <span>Google Review &middot; 5.0 &#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ENQUIRY FORM */}
      <section className="section" id="enquire">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '72px', alignItems: 'start' }}>
            <div>
              <span className="label">Get in Touch</span>
              <h2>Let&apos;s Talk About Your Team</h2>
              <p style={{ marginTop: '20px', marginBottom: '32px' }}>
                Fill in the form and we&apos;ll come back to you within one business day with a tailored proposal. No obligation. No hard sell.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="diff-item" style={{ padding: '24px 28px' }}>
                  <div className="diff-item__num" style={{ fontSize: '1.6rem', minWidth: '36px' }}>&check;</div>
                  <div>
                    <h4>Proposal within 48 hours</h4>
                    <p style={{ fontSize: '0.88rem' }}>We don&apos;t keep you waiting. One business day turnaround on all corporate enquiries.</p>
                  </div>
                </div>
                <div className="diff-item" style={{ padding: '24px 28px' }}>
                  <div className="diff-item__num" style={{ fontSize: '1.6rem', minWidth: '36px' }}>&check;</div>
                  <div>
                    <h4>No lock-in contracts</h4>
                    <p style={{ fontSize: '0.88rem' }}>Monthly arrangements. Cancel with notice. We earn your business by delivering results.</p>
                  </div>
                </div>
                <div className="diff-item" style={{ padding: '24px 28px' }}>
                  <div className="diff-item__num" style={{ fontSize: '1.6rem', minWidth: '36px' }}>&check;</div>
                  <div>
                    <h4>Tailored to your team</h4>
                    <p style={{ fontSize: '0.88rem' }}>No generic packages. Every proposal is built around what your specific team needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '48px 44px' }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Your last name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input type="text" id="company" name="company" placeholder="Your company" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input type="text" id="jobTitle" name="jobTitle" placeholder="e.g. HR Director" />
                  </div>
                  <div className="form-group form-group--full">
                    <label htmlFor="email">Work Email *</label>
                    <input type="email" id="email" name="email" placeholder="you@company.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Optional" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="teamSize">Team Size</label>
                    <select id="teamSize" name="teamSize">
                      <option value="">Select range</option>
                      <option>1&ndash;10 employees</option>
                      <option>11&ndash;25 employees</option>
                      <option>26&ndash;50 employees</option>
                      <option>51&ndash;100 employees</option>
                      <option>100+ employees</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label htmlFor="interest">What are you interested in? *</label>
                    <select id="interest" name="interest" required>
                      <option value="">Select an option</option>
                      <option>Workplace Wellbeing Day</option>
                      <option>Monthly Team Wellness Contract</option>
                      <option>Employee Benefit Access</option>
                      <option>Not sure yet — tell me more</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label htmlFor="message">Anything else we should know?</label>
                    <textarea id="message" name="message" placeholder="Tell us about your team, current challenges, or what you'd like to achieve..." />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                  Send Enquiry
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </button>
                <p className="form-note" style={{ marginTop: '16px' }}>
                  We respond to all corporate enquiries within one business day. Your information is never shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
