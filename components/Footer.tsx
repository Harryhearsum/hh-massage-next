import Link from 'next/link'

const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'
const MAPS_URL = 'https://www.google.com/maps/dir//HH+Massage+Therapy,+Glenwood+Kitchens,+6+Front+St,+Rotherham+S60+5QP/@53.3940072,-1.359872,13z'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <Link href="/">
              <img
                src="/images/logo-transparent.png"
                alt="HH Massage Therapy"
                className="footer__logo-img"
                style={{ filter: 'invert(1) hue-rotate(200deg) saturate(5) brightness(0.3)' }}
              />
            </Link>
            <p>
              Rotherham&apos;s premium sports recovery and performance wellness practice. Treating athletes, professionals, and businesses across South Yorkshire.
            </p>
          </div>

          {/* Treatments column */}
          <div className="footer__col">
            <h5>Treatments</h5>
            <ul>
              <li><Link href="/treatments">30-Min Area Focused</Link></li>
              <li><Link href="/treatments">45-Min Area Focused</Link></li>
              <li><Link href="/treatments">60-Min Full Body MOT</Link></li>
              <li><Link href="/treatments">90-Min Full Body Reset</Link></li>
            </ul>
          </div>

          {/* Company column */}
          <div className="footer__col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/corporate">Corporate Wellness</Link></li>
              <li><a href={BOOK_URL} target="_blank" rel="noopener">Book Online</a></li>
            </ul>
          </div>

          {/* Location column */}
          <div className="footer__col">
            <h5>Location</h5>
            <ul>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener">
                  Rotherham Studio &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>&copy; 2025 HH Massage Therapy. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
