import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { journeyStages } from '../data/resources'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function JourneyPath() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })
  const reducedMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 bg-rose/20 overflow-hidden"
      aria-labelledby="path-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="path-heading" className="editorial-heading text-4xl md:text-6xl text-near-black mb-16 max-w-3xl">
          WHERE DOES<br />YOUR BLOOD GO?
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-crimson/20 -translate-x-1/2" aria-hidden="true" />

          <div className="space-y-8 md:space-y-0">
            {journeyStages.map((stage, i) => (
              <motion.div
                key={stage.id}
                className={`relative md:grid md:grid-cols-2 md:gap-16 md:py-8 ${
                  i % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:col-start-2'}`}>
                  <span className="text-xs tracking-[0.2em] text-crimson uppercase">
                    Stage {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-serif text-near-black">{stage.label}</h3>
                </div>

                <div className={`mt-3 md:mt-0 ${i % 2 === 0 ? 'md:pl-16 md:col-start-2' : 'md:pr-16 md:col-start-1 md:row-start-1'}`}>
                  <p className="text-neutral leading-relaxed max-w-md">{stage.description}</p>
                </div>

                <motion.div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-crimson border-2 border-ivory"
                  style={{ top: `${i * 14 + 5}%` }}
                  initial={reducedMotion ? false : { scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
