import Link from 'next/link'
import Image from 'next/image'

const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'
const MAPS_URL = 'https://www.google.com/maps/dir//HH+Massage+Therapy,+Glenwood+Kitchens,+6+Front+St,+Rotherham+S60+5QP/@53.3940072,-1.359872,13z'

export default function Footer() {
  return (
    <footer style={{ background: '#f0f2f9', borderTop: '1px solid rgba(20,28,107,0.1)', padding: '64px 0 32px', color: 'var(--blue-deep)' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="grid gap-12 mb-14" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          <div>
            <Link href="/">
              <Image
                src="/images/logo-transparent.png"
                alt="HH Massage Therapy"
                width={140}
                height={40}
                style={{ height: '40px', width: 'auto', objectFit: 'contain', marginBottom: '16px', filter: 'invert(1) hue-rotate(200deg) saturate(5) brightness(0.3)' }}
              />
            </Link>
            <p style={{ fontSize: '0.88rem', maxWidth: '260px', color: 'rgba(20,28,107,0.6)', lineHeight: 1.7 }}>
              Rotherham&apos;s premium sports recovery and performance wellness practice. Treating athletes, professionals, and businesses across South Yorkshire.
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lavender)', marginBottom: '20px' }}>
              Treatments
            </h5>
            <ul className="flex flex-col gap-3">
              {['30-Min Area Focused', '45-Min Area Focused', '60-Min Full Body MOT', '90-Min Full Body Reset'].map(t => (
                <li key={t}>
                  <Link href="/treatments" style={{ fontSize: '0.9rem', color: 'rgba(20,28,107,0.6)' }}>{t}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lavender)', marginBottom: '20px' }}>
              Company
            </h5>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" style={{ fontSize: '0.9rem', color: 'rgba(20,28,107,0.6)' }}>About Us</Link></li>
              <li><Link href="/corporate" style={{ fontSize: '0.9rem', color: 'rgba(20,28,107,0.6)' }}>Corporate Wellness</Link></li>
              <li><a href={BOOK_URL} target="_blank" rel="noopener" style={{ fontSize: '0.9rem', color: 'rgba(20,28,107,0.6)' }}>Book Online</a></li>
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lavender)', marginBottom: '20px' }}>
              Location
            </h5>
            <ul>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener" style={{ fontSize: '0.9rem', color: 'rgba(20,28,107,0.6)' }}>
                  Rotherham Studio →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 pt-8" style={{ borderTop: '1px solid rgba(20,28,107,0.1)' }}>
          <p style={{ fontSize: '0.82rem', color: 'rgba(20,28,107,0.5)' }}>© 2025 HH Massage Therapy. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms', 'Cookie Policy'].map(t => (
              <a key={t} href="#" style={{ fontSize: '0.82rem', color: 'rgba(20,28,107,0.5)' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
