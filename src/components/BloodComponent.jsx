import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bloodComponents } from '../data/bloodComponents'
import { useReducedMotion } from '../hooks/useReducedMotion'

function ComponentIllustration({ type, color }) {
  if (type === 'disc') {
    return (
      <svg viewBox="0 0 120 120" className="w-32 h-32 md:w-40 md:h-40">
        <ellipse cx="60" cy="60" rx="45" ry="20" fill={color} opacity="0.9" />
        <ellipse cx="60" cy="55" rx="40" ry="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      </svg>
    )
  }
  if (type === 'fragments') {
    return (
      <svg viewBox="0 0 120 120" className="w-32 h-32 md:w-40 md:h-40">
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={i}
            cx={40 + i * 10}
            cy={50 + (i % 2) * 20}
            rx="8"
            ry="5"
            fill={color}
            opacity={0.7 + i * 0.05}
            transform={`rotate(${i * 25} ${40 + i * 10} ${50 + (i % 2) * 20})`}
          />
        ))}
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 120 120" className="w-32 h-32 md:w-40 md:h-40">
      <path
        d="M20 60 Q60 20 100 60 Q60 100 20 60"
        fill={color}
        opacity="0.3"
      />
      <circle cx="60" cy="60" r="30" fill={color} opacity="0.15" />
    </svg>
  )
}

export default function BloodComponent({ compact = false }) {
  const [active, setActive] = useState(bloodComponents[0])
  const reducedMotion = useReducedMotion()

  return (
    <section
      className={`relative overflow-hidden transition-colors duration-700 ${compact ? 'py-16' : 'py-24 md:py-32'}`}
      style={{ backgroundColor: active.id === 'plasma' ? '#F7F4EE' : active.id === 'platelets' ? '#EFD9DD' : '#141414' }}
      aria-labelledby="components-heading"
    >
      <div className={`max-w-7xl mx-auto px-6 md:px-12 ${compact ? '' : 'lg:grid lg:grid-cols-12 lg:gap-16'}`}>
        {!compact && (
          <div className="lg:col-span-4 mb-12 lg:mb-0">
            <h2
              id="components-heading"
              className={`editorial-heading text-4xl md:text-5xl ${active.id === 'plasma' ? 'text-near-black' : 'text-ivory'}`}
            >
              BLOOD<br />COMPONENTS
            </h2>
            <p className={`mt-4 text-sm leading-relaxed max-w-sm ${active.id === 'plasma' ? 'text-neutral' : 'text-ivory/60'}`}>
              One donation can be separated into components, each serving different medical needs.
            </p>
          </div>
        )}

        <div className={compact ? '' : 'lg:col-span-8'}>
          <div className="flex flex-col items-center mb-12">
            <span className={`text-sm tracking-[0.3em] uppercase ${active.id === 'plasma' ? 'text-neutral' : 'text-ivory/50'}`}>
              Blood
            </span>
            <div className={`w-[1px] h-12 my-2 ${active.id === 'plasma' ? 'bg-neutral/30' : 'bg-ivory/20'}`} />
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              {bloodComponents.map((comp) => (
                <button
                  key={comp.id}
                  type="button"
                  onClick={() => setActive(comp)}
                  onMouseEnter={() => setActive(comp)}
                  className={`relative px-6 py-3 text-sm tracking-widest uppercase transition-all focus-ring ${
                    active.id === comp.id
                      ? 'text-crimson font-medium'
                      : active.id === 'plasma'
                        ? 'text-neutral hover:text-near-black'
                        : 'text-ivory/40 hover:text-ivory/70'
                  }`}
                  aria-pressed={active.id === comp.id}
                >
                  {comp.shortName}
                  {active.id === comp.id && (
                    <motion.div
                      layoutId="component-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-crimson"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="flex justify-center">
                <ComponentIllustration type={active.illustration} color={active.color} />
              </div>
              <div>
                <h3 className={`text-2xl font-serif ${active.id === 'plasma' ? 'text-near-black' : 'text-ivory'}`}>
                  {active.name}
                </h3>
                <p className={`mt-4 leading-relaxed ${active.id === 'plasma' ? 'text-neutral' : 'text-ivory/70'}`}>
                  {active.role}
                </p>
                <p className={`mt-2 text-sm ${active.id === 'plasma' ? 'text-neutral/70' : 'text-ivory/50'}`}>
                  Lifespan: {active.lifespan}
                </p>
                <ul className={`mt-6 space-y-2 ${active.id === 'plasma' ? 'text-neutral' : 'text-ivory/60'}`}>
                  {active.uses.map((use) => (
                    <li key={use} className="flex items-start gap-2 text-sm">
                      <span className="text-crimson mt-1">—</span>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
