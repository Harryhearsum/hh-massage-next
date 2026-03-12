const BOOK_URL = 'https://book.squareup.com/appointments/rz59xehpau07vg/location/L7D39225FBMR9'

export default function MobileBookBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-[990] px-4 py-3"
      style={{
        background: 'rgba(10,16,70,0.96)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255,255,255,0.12)',
      }}
    >
      <a
        href={BOOK_URL}
        target="_blank"
        rel="noopener"
        className="flex justify-center items-center w-full py-4 font-bold rounded-full text-base"
        style={{ background: 'var(--lavender)', color: '#fff', boxShadow: '0 0 24px rgba(123,127,194,0.4)' }}
      >
        Book Your Session →
      </a>
    </div>
  )
}
