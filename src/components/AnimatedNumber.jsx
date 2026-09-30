import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  decimals = 1,
  duration = 2000,
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })
  const reducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(reducedMotion ? value : 0)

  useEffect(() => {
    if (!isInView) return
    if (reducedMotion) {
      setDisplay(value)
      return
    }

    let start = null
    const animate = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, value, duration, reducedMotion])

  const formatted = decimals > 0
    ? display.toFixed(decimals)
    : Math.round(display).toString()

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
