import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function CTASection({
  headline,
  primaryLabel = 'Find a Donation Centre',
  primaryTo = '/find-centre',
  secondaryLabel = 'Learn More',
  secondaryTo = '/resources',
  dark = true,
}) {
  const reducedMotion = useReducedMotion()

  return (
    <section
      className={`relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden ${dark ? 'bg-near-black text-ivory' : 'bg-ivory text-near-black'}`}
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-crimson blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          id="cta-heading"
          className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl max-w-5xl leading-[0.92]"
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {headline}
        </motion.h2>

        <motion.div
          className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to={primaryTo} className="btn-primary focus-ring group">
            {primaryLabel}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to={secondaryTo}
            className={`btn-secondary focus-ring ${!dark ? 'btn-secondary-dark' : ''}`}
          >
            {secondaryLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
