import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { myths } from '../data/myths'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function MythFact() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [revealed, setRevealed] = useState({})
  const reducedMotion = useReducedMotion()
  const active = myths[activeIndex]

  const toggleReveal = (id) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-near-black text-ivory" aria-labelledby="myths-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="myths-heading" className="editorial-heading text-4xl md:text-6xl mb-16">
          MYTHS &amp; FACTS
        </h2>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <nav className="lg:col-span-4" aria-label="Myth topics">
            <ul className="space-y-2">
              {myths.map((myth, i) => (
                <li key={myth.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(i)
                      setRevealed({})
                    }}
                    className={`w-full text-left py-3 px-4 text-sm transition-all focus-ring border-l-2 ${
                      activeIndex === i
                        ? 'border-crimson text-ivory bg-ivory/5'
                        : 'border-transparent text-ivory/40 hover:text-ivory/70'
                    }`}
                  >
                    {myth.myth}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="relative cursor-pointer"
                  onClick={() => toggleReveal(active.id)}
                  onKeyDown={(e) => e.key === 'Enter' && toggleReveal(active.id)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={!!revealed[active.id]}
                >
                  <span className="text-xs tracking-[0.3em] uppercase text-crimson">
                    {revealed[active.id] ? 'Fact' : 'Myth'}
                  </span>

                  <AnimatePresence mode="wait">
                    {!revealed[active.id] ? (
                      <motion.blockquote
                        key="myth"
                        className="editorial-heading text-3xl md:text-4xl lg:text-5xl mt-4 leading-tight"
                        initial={reducedMotion ? false : { opacity: 0, rotateX: 90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        exit={reducedMotion ? undefined : { opacity: 0, rotateX: -90 }}
                        transition={{ duration: 0.5 }}
                      >
                        &ldquo;{active.myth}&rdquo;
                      </motion.blockquote>
                    ) : (
                      <motion.div
                        key="fact"
                        initial={reducedMotion ? false : { opacity: 0, rotateX: -90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        exit={reducedMotion ? undefined : { opacity: 0, rotateX: 90 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="text-lg md:text-xl leading-relaxed mt-4 text-ivory/80 max-w-2xl">
                          {active.fact}
                        </p>
                        <p className="mt-6 text-xs text-ivory/40">
                          Source: {active.source}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="mt-8 text-sm text-ivory/30">
                    Click to {revealed[active.id] ? 'show myth' : 'reveal fact'}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
