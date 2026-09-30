import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/why-donate', label: 'Why Donate' },
  { to: '/blood', label: 'Blood Groups' },
  { to: '/donation-guide', label: 'Donation Guide' },
  { to: '/myths', label: 'Myths & Facts' },
  { to: '/resources', label: 'Resources' },
]

const legalLinks = [
  { to: '#', label: 'Privacy' },
  { to: '#', label: 'Accessibility' },
  { to: '/resources', label: 'Sources' },
]

export default function Footer() {
  return (
    <footer className="bg-near-black text-ivory/60 border-t border-ivory/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-ivory focus-ring">
              LIFELINE
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Blood donation awareness through information, education and action.
            </p>
          </div>

          <nav className="md:col-span-4" aria-label="Footer navigation">
            <ul className="space-y-3">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm hover:text-ivory transition-colors focus-ring link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <ul className="space-y-3">
              {legalLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm hover:text-ivory transition-colors focus-ring link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/5 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} LIFELINE. Educational resource only.</p>
          <p className="text-ivory/40">
            Medical decisions are made by qualified professionals.
          </p>
        </div>
      </div>
    </footer>
  )
}
