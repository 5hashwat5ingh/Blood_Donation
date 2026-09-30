import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function SectionHeading({
  children,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
}) {
  const reducedMotion = useReducedMotion()

  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align]

  return (
    <div className={`max-w-4xl ${alignClass} ${className}`}>
      <motion.h2
        className={`editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${dark ? 'text-ivory' : 'text-near-black'}`}
        initial={reducedMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`mt-6 text-base md:text-lg leading-relaxed max-w-xl ${dark ? 'text-ivory/70' : 'text-neutral'} ${align === 'center' ? 'mx-auto' : ''}`}
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
