const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'

export default function MobileBookBar() {
  return (
    <div className="mobile-book-bar">
      <a
        href={BOOK_URL}
        target="_blank"
        rel="noopener"
        className="btn btn-primary"
      >
        Book Your Session &rarr;
      </a>
    </div>
  )
}
