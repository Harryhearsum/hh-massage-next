'use client'

import { useEffect, useState } from 'react'

const EMBED_URL = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=HH+Massage+Therapy,+Glenwood+Kitchens,+6+Front+St,+Rotherham+S60+5QP&zoom=15'

export default function GoogleMap() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '360px', background: 'var(--blue-deep)' }}>
      <iframe
        src={EMBED_URL}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '360px',
          border: 0,
          filter: isDark ? 'invert(0.9) hue-rotate(180deg)' : 'none',
          transition: 'filter 0.3s ease',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
