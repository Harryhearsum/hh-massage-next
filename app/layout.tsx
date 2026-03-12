import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileBookBar from '@/components/MobileBookBar'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'HH Massage Therapy | Sports Recovery Rotherham',
  description: 'Premium sports massage and deep tissue therapy in Rotherham. Recovery for athletes, office workers, and corporate teams. Book online today.',
  keywords: 'sports massage Rotherham, deep tissue massage Rotherham, sports massage therapist Rotherham, corporate wellness Rotherham',
  openGraph: {
    title: 'HH Massage Therapy | Sports Recovery Rotherham',
    description: 'Performance recovery therapy built for athletes and professionals. Book your session today.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'HH Massage Therapy',
              description: 'Premium sports massage and deep tissue therapy in Rotherham',
              url: 'https://hhmassagetherapy.co.uk',
              telephone: '+44-XXXX-XXXXXX',
              address: [
                { '@type': 'PostalAddress', addressLocality: 'Rotherham', addressRegion: 'South Yorkshire', addressCountry: 'GB' }
              ],
              priceRange: '££',
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '200' }
            })
          }}
        />
      </head>
      <body className={`${inter.className} pb-20 md:pb-0`} style={{ background: 'var(--blue-deep)', color: '#fff' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileBookBar />
      </body>
    </html>
  )
}
