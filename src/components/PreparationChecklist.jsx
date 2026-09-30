import { useState } from 'react'
import { motion } from 'framer-motion'
import { preparationChecklist } from '../data/donationSteps'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function PreparationChecklist() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [checked, setChecked] = useState({})
  const reducedMotion = useReducedMotion()

  const toggleCheck = (key) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const category = preparationChecklist[activeCategory]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-near-black text-ivory" aria-labelledby="prep-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="prep-heading" className="editorial-heading text-4xl md:text-6xl max-w-3xl">
          BEFORE YOU GIVE,<br />KNOW WHAT TO EXPECT.
        </h2>

        <p className="mt-6 text-ivory/60 max-w-xl leading-relaxed">
          Eligibility varies by country and blood service. The final decision about whether someone can donate belongs to the relevant blood-service and medical staff.
        </p>

        <div className="mt-16 grid lg:grid-cols-12 gap-12">
          <nav className="lg:col-span-4" aria-label="Preparation categories">
            <ul className="space-y-1">
              {preparationChecklist.map((cat, i) => (
                <li key={cat.category}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(i)}
                    className={`w-full text-left py-4 px-4 text-sm tracking-wide transition-all focus-ring border-l-2 ${
                      activeCategory === i
                        ? 'border-crimson text-ivory'
                        : 'border-transparent text-ivory/40 hover:text-ivory/70'
                    }`}
                  >
                    {cat.category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <motion.div
            key={activeCategory}
            className="lg:col-span-8"
            initial={reducedMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-6">{category.category}</h3>
            <ul className="space-y-4" role="list">
              {category.items.map((item, i) => {
                const key = `${activeCategory}-${i}`
                return (
                  <li key={key}>
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={!!checked[key]}
                        onChange={() => toggleCheck(key)}
                        className="mt-1 w-4 h-4 accent-crimson focus-ring shrink-0"
                      />
                      <span className={`text-sm leading-relaxed transition-colors ${checked[key] ? 'text-ivory/40 line-through' : 'text-ivory/80 group-hover:text-ivory'}`}>
                        {item}
                      </span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
