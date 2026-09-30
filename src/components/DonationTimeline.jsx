import { motion } from 'framer-motion'
import { donationSteps } from '../data/donationSteps'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function DonationTimeline({ showTitle = true }) {
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-ivory" aria-labelledby="timeline-heading">
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <>
            <h2 id="timeline-heading" className="editorial-heading text-4xl md:text-6xl text-near-black">
              WHAT HAPPENS WHEN<br />YOU DONATE?
            </h2>
            <div className="section-line w-32 mt-8 mb-16" />
          </>
        )}

        <div className="space-y-0">
          {donationSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-t border-near-black/10 group"
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="col-span-3 md:col-span-2">
                <span className="editorial-heading text-4xl md:text-6xl text-crimson/30 group-hover:text-crimson transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <div className="col-span-9 md:col-span-6">
                <h3 className="text-xl md:text-2xl font-medium text-near-black">{step.title}</h3>
                <p className="mt-3 text-neutral leading-relaxed max-w-lg">{step.description}</p>
              </div>
              <div className="hidden md:block md:col-span-4">
                <div className="h-full flex items-center">
                  <div className="w-full h-[1px] bg-gradient-to-r from-crimson/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
