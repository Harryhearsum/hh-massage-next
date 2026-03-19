import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | HH Massage Therapy Blog`,
    description: post.description,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Harry Hearsum'],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const related = getRelatedPosts(slug, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Harry Hearsum',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HH Massage Therapy',
      url: 'https://hhmassagetherapy.co.uk',
    },
    keywords: post.keywords.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Article Header */}
      <section className="page-hero">
        <div className="container">
          <div className="blog-article__header">
            <Link href="/blog" className="blog-article__back">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{ width: 16, height: 16 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Blog
            </Link>
            <div className="blog-article__meta">
              <span className="blog-card__category">{post.category}</span>
              <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>{post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
            <p className="lead">{post.description}</p>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section">
        <div className="container">
          <article
            className="blog-article__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <>
          <div className="divider" />
          <section className="section">
            <div className="container">
              <div className="text-center" style={{ marginBottom: 48 }}>
                <span className="label">Keep Reading</span>
                <h2>Related Articles</h2>
              </div>
              <div className="blog-grid">
                {related.map(rp => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="blog-card"
                  >
                    <div className="blog-card__meta">
                      <span className="blog-card__category">{rp.category}</span>
                      <span className="blog-card__date">
                        {new Date(rp.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <h3>{rp.title}</h3>
                    <p>{rp.description}</p>
                    <div className="blog-card__footer">
                      <span className="blog-card__read-time">{rp.readTime}</span>
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
            </div>
          </section>
        </>
      )}

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
