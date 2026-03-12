'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/treatments', label: 'Treatments' },
    { href: '/corporate', label: 'Corporate' },
    { href: '/about', label: 'About' },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav
        id="nav"
        className={`nav${scrolled ? ' scrolled' : ''}`}
      >
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo-transparent.png"
            alt="HH Massage Therapy"
            className="nav__logo-img"
          />
        </Link>

        {/* Desktop links */}
        <ul className="nav__links">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={isActive(l.href) ? 'active' : ''}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="nav__cta">
          <Link
            href="/treatments"
            className="btn btn-ghost"
            style={{ padding: '10px 22px' }}
          >
            View Treatments
          </Link>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
            style={{ padding: '10px 22px' }}
          >
            Book Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="nav__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        id="mobileNav"
        className={`nav__mobile${mobileOpen ? ' open' : ''}`}
      >
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            onClick={closeMobile}
            className={isActive(l.href) ? 'active' : ''}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener"
          onClick={closeMobile}
          className="btn btn-primary"
        >
          Book Your Session
        </a>
      </div>
    </>
  )
}
