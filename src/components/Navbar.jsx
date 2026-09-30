import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/why-donate', label: 'Why Donate' },
  { to: '/blood', label: 'Blood' },
  { to: '/donation-guide', label: 'Donation Guide' },
  { to: '/myths', label: 'Myths & Facts' },
  { to: '/resources', label: 'Resources' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const lightHeroPages = ['/myths']
  const hasLightHero = lightHeroPages.includes(location.pathname)
  const useLightNav = hasLightHero && !scrolled && !menuOpen
  const showSolid = scrolled || hasLightHero || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolid
            ? useLightNav
              ? 'py-3 bg-ivory/90 backdrop-blur-md border-b border-near-black/5'
              : 'py-3 bg-near-black/80 backdrop-blur-md border-b border-ivory/5'
            : 'py-5 md:py-6 bg-transparent'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-[0.15em] focus-ring z-50 ${
              useLightNav ? 'text-near-black' : 'text-ivory'
            }`}
          >
            LIFELINE
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition-colors focus-ring link-underline ${
                      isActive
                        ? 'text-crimson'
                        : useLightNav
                          ? 'text-near-black/60 hover:text-near-black'
                          : 'text-ivory/70 hover:text-ivory'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/find-centre"
            className={`hidden lg:inline-flex items-center gap-1.5 text-sm font-medium tracking-wide focus-ring link-underline ${
              useLightNav ? 'text-near-black' : 'text-ivory'
            }`}
          >
            Find a Donation Centre
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            className={`lg:hidden z-50 p-2 focus-ring ${
              useLightNav ? 'text-near-black' : 'text-ivory'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-near-black flex flex-col justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="space-y-6">
                {navLinks.map(({ to, label }, i) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `editorial-heading text-4xl sm:text-5xl block focus-ring ${
                          isActive ? 'text-crimson' : 'text-ivory/80'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-6"
                >
                  <Link to="/find-centre" className="btn-primary focus-ring">
                    Find a Donation Centre
                    <ArrowUpRight size={16} />
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
