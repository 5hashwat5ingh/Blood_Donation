import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bloodGroups } from '../data/bloodGroups'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function BloodGroupSelector() {
  const [selected, setSelected] = useState(bloodGroups[0])
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-ivory" aria-labelledby="blood-groups-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="blood-groups-heading" className="editorial-heading text-4xl md:text-6xl text-near-black mb-4">
          BLOOD GROUPS
        </h2>
        <p className="text-neutral max-w-xl mb-12 text-sm leading-relaxed">
          The ABO and Rh systems classify blood into eight common groups. Select a type to explore compatibility information.
        </p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="grid grid-cols-4 gap-3 md:gap-4" role="listbox" aria-label="Blood group types">
              {bloodGroups.map((group) => (
                <button
                  key={group.type}
                  type="button"
                  role="option"
                  aria-selected={selected.type === group.type}
                  onClick={() => setSelected(group)}
                  className={`aspect-square flex items-center justify-center text-2xl md:text-3xl font-serif transition-all focus-ring ${
                    selected.type === group.type
                      ? 'bg-crimson text-ivory scale-105'
                      : 'bg-transparent border border-near-black/10 text-near-black hover:border-crimson/40'
                  }`}
                >
                  {group.type}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.type}
                initial={reducedMotion ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="editorial-heading text-6xl md:text-8xl text-crimson">{selected.type}</span>
                <p className="mt-6 text-neutral leading-relaxed max-w-lg">{selected.description}</p>
                <p className="mt-2 text-sm text-neutral/70">{selected.prevalence}</p>

                <div className="mt-10 grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-near-black mb-3">
                      Can donate red cells to
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.canDonateTo.map((type) => (
                        <span
                          key={type}
                          className="px-3 py-1 text-sm border border-near-black/15 text-near-black"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-near-black mb-3">
                      Can receive red cells from
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.canReceiveFrom.map((type) => (
                        <span
                          key={type}
                          className="px-3 py-1 text-sm bg-rose/50 text-near-black"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-xs text-neutral leading-relaxed border-l-2 border-crimson/30 pl-4">
                  Compatibility information is for educational purposes. Actual transfusion decisions are made by qualified medical professionals based on comprehensive testing and clinical assessment.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
