'use client'

import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    quote: "Couldn't recommend Harry more if I tried. He has helped improve my shoulder injury of over 10 years more than any physio or previous sports massage I've tried. He is also extremely professional, polite, knowledgable & warm. Highly recommend getting booked in.",
    author: 'H Chapman',
    source: 'Google Review · 5 Stars',
  },
  {
    quote: "Definitely the most skilled sports massage therapist I've ever met! Harry definitely knows every spot and how to work it out!! Regular visits are a MUST DO.",
    author: 'Taisha Brunner',
    source: 'Google Review · 5 Stars',
  },
  {
    quote: "When Harry first started massaging me, I could barely move my neck. My neck would crack and crunch when I turned it. I have had 3 sessions now & my movement has vastly improved to the point I can go to the gym & still feel comfortable doing so.",
    author: 'Joe Forshaw',
    source: 'Google Review · 5 Stars',
  },
  {
    quote: "Really impressed with how I have been feeling since he worked on my neck, shoulders and back. He has really enabled me to live better and I have gone from being in constant pain to virtually pain free!",
    author: 'Lewis Standell',
    source: 'Google Review · 5 Stars',
  },
  {
    quote: "Would highly recommend! Lovely relaxation room and Harry is amazing and very informative.",
    author: 'Rebecca Newsam',
    source: 'Google Review · 5 Stars',
  },
  {
    quote: "Excellent session from start to finish. The heated treatment table makes such a difference — you're completely relaxed before the massage even begins. Easy parking right outside too. Couldn't recommend more highly.",
    author: 'Kat Harbourne',
    source: 'Google Review · 5 Stars · Local Guide',
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        <div
          className="testimonials__slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-slide">
              <div
                className="mx-auto text-center rounded-3xl"
                style={{
                  maxWidth: '800px',
                  padding: '56px 48px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div className="flex justify-center gap-1 mb-7 text-xl" style={{ color: '#fbbf24' }}>★★★★★</div>
                <p
                  className="mb-8 italic"
                  style={{ fontSize: '1.18rem', lineHeight: 1.72, color: 'var(--white-80)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <strong className="block text-base font-semibold">{t.author}</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--lavender)' }}>{t.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => goTo(current - 1)}
          className="flex items-center justify-center rounded-full w-11 h-11 transition-all"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="18" height="18">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
        </button>

        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all"
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              borderRadius: i === current ? '4px' : '50%',
              background: i === current ? 'var(--lavender)' : 'rgba(255,255,255,0.2)',
              border: 'none',
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}

        <button
          onClick={() => goTo(current + 1)}
          className="flex items-center justify-center rounded-full w-11 h-11 transition-all"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="18" height="18">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
