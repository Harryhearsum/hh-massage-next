import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | HH Massage Therapy Rotherham',
  description: 'Expert tips on sports massage, recovery, desk worker pain relief, and performance wellness from HH Massage Therapy in Rotherham.',
  keywords: 'massage therapy blog, sports massage tips, recovery advice Rotherham, deep tissue massage blog',
  openGraph: {
    title: 'Blog | HH Massage Therapy Rotherham',
    description: 'Expert tips on sports massage, recovery, and performance wellness.',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="label">Blog</span>
          <h1>Recovery Insights</h1>
          <p className="lead">
            Practical advice on recovery, performance, and getting more from your body. No fluff — just what works.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--white-50)' }}>
              Posts coming soon. Check back shortly.
            </p>
          ) : (
            <div className="blog-grid">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card"
                >
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{post.category}</span>
                    <span className="blog-card__date">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <div className="blog-card__footer">
                    <span className="blog-card__read-time">{post.readTime}</span>
                    <span className="card-link">
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{ width: 14, height: 14 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="final-cta">
        <div className="container">
          <span className="label">Ready to Move Better?</span>
          <h2>Your Body Deserves Better</h2>
          <p>
            Stop reading about recovery. Start experiencing it. Book a session at our Rotherham studio.
          </p>
          <a
            href="https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-lg"
          >
            Book a Session
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
