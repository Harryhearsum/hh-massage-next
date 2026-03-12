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
    <div className="testimonials">
      <div className="testimonials__track">
        <div
          className="testimonials__slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <p className="testimonial-card__quote">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="testimonial-card__author">
                  <strong>{t.author}</strong>
                  <span>{t.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials__nav">
        <button
          onClick={() => goTo(current - 1)}
          className="testimonials__arrow"
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
            className={`testimonials__dot${i === current ? ' active' : ''}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}

        <button
          onClick={() => goTo(current + 1)}
          className="testimonials__arrow"
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
