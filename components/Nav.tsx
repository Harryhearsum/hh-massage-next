'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[999] px-6 flex items-center justify-between border-b transition-all duration-300"
        style={{
          height: scrolled ? '64px' : '72px',
          background: scrolled ? 'rgba(10,16,70,0.98)' : 'rgba(20,28,107,0.92)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderColor: 'rgba(255,255,255,0.12)',
        }}
      >
        <Link href="/">
          <Image
            src="/images/logo-transparent.png"
            alt="HH Massage Therapy"
            width={140}
            height={48}
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: isActive(l.href) ? 'var(--lavender)' : 'var(--white-80)' }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/treatments"
            className="btn-ghost-sm"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 22px',
              fontSize: '0.85rem',
              fontWeight: 600,
              borderRadius: '50px',
              border: '1.5px solid rgba(255,255,255,0.5)',
              color: '#fff',
              transition: 'all 0.25s',
            }}
          >
            View Treatments
          </Link>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              fontSize: '0.85rem',
              fontWeight: 600,
              borderRadius: '50px',
              background: 'var(--lavender)',
              color: '#fff',
              boxShadow: '0 0 24px rgba(123,127,194,0.35)',
              transition: 'all 0.25s',
            }}
          >
            Book Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span
            className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
            style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}
          />
          <span
            className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
            style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }}
          />
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          className="fixed top-[72px] left-0 right-0 z-[998] flex flex-col gap-1 px-6 py-6 border-b"
          style={{
            background: 'rgba(10,16,70,0.99)',
            backdropFilter: 'blur(18px)',
            borderColor: 'rgba(255,255,255,0.12)',
          }}
        >
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="py-3.5 text-base font-medium border-b"
              style={{
                borderColor: 'rgba(255,255,255,0.12)',
                color: isActive(l.href) ? 'var(--lavender)' : 'var(--white-80)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex justify-center py-4 font-semibold rounded-full"
            style={{ background: 'var(--lavender)', color: '#fff' }}
          >
            Book Your Session →
          </a>
        </div>
      )}
    </>
  )
}
