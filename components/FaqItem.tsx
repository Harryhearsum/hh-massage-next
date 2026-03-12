'use client'

import { useState } from 'react'

interface FaqItemProps {
  question: string
  answer: string
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`faq-item rounded-xl overflow-hidden ${open ? 'open' : ''}`}
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
    >
      <button
        className="w-full text-left px-7 py-[22px] flex justify-between items-center gap-4 font-semibold text-base transition-colors"
        style={{ color: open ? 'var(--lavender)' : '#fff' }}
        onClick={() => setOpen(!open)}
      >
        {question}
        <svg
          className="faq-icon flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="2" stroke="currentColor" width="20" height="20"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: 'var(--lavender)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
      </button>
      <div className="faq-answer" style={{ maxHeight: open ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
        <div className="px-7 pb-6" style={{ fontSize: '0.93rem', color: 'var(--white-80)', lineHeight: 1.7 }}>
          {answer}
        </div>
      </div>
    </div>
  )
}
