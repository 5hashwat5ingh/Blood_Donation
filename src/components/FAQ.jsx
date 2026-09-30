import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../data/faqs'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-rose/30" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="editorial-heading text-4xl md:text-5xl text-near-black mb-12">
          FREQUENTLY ASKED
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question} className="border-t border-near-black/10">
                <button
                  type="button"
                  className="w-full flex items-start justify-between gap-4 py-6 text-left focus-ring group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg text-near-black group-hover:text-crimson transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 mt-1 text-crimson">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-8">
                        <p className="text-neutral leading-relaxed">{faq.answer}</p>
                        <p className="mt-3 text-xs text-neutral/60">Source: {faq.source}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
