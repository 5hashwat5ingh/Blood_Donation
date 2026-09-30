import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

function BloodCell({ x, y, size, delay, duration }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill="#9B1C31"
      opacity={0.4}
      animate={{
        cx: [x, x + 3, x - 2, x],
        cy: [y, y - 4, y + 2, y],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function BloodDrop({ className = '', interactive = true }) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 0.95])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8])

  useEffect(() => {
    if (!interactive || reducedMotion) return

    const handleMove = (e) => {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return
      setMouse({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [interactive, reducedMotion])

  const cells = [
    { x: 95, y: 110, size: 4, delay: 0, duration: 4 },
    { x: 110, y: 95, size: 3, delay: 0.5, duration: 3.5 },
    { x: 85, y: 125, size: 3.5, delay: 1, duration: 4.5 },
    { x: 105, y: 130, size: 2.5, delay: 1.5, duration: 3 },
    { x: 100, y: 100, size: 3, delay: 0.8, duration: 5 },
    { x: 90, y: 140, size: 2, delay: 2, duration: 4 },
  ]

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={reducedMotion ? {} : { y, scale, rotate }}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 200 260"
        className="w-full h-full drop-shadow-2xl"
        style={reducedMotion ? {} : { x: mouse.x, y: mouse.y }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <defs>
          <radialGradient id="dropGradient" cx="40%" cy="30%">
            <stop offset="0%" stopColor="#C42A42" />
            <stop offset="60%" stopColor="#9B1C31" />
            <stop offset="100%" stopColor="#5E0B18" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M100 20 C100 20 40 100 40 150 C40 195 65 230 100 240 C135 230 160 195 160 150 C160 100 100 20 100 20Z"
          fill="url(#dropGradient)"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.ellipse
          cx="85"
          cy="130"
          rx="12"
          ry="8"
          fill="rgba(255,255,255,0.08)"
          animate={reducedMotion ? {} : { opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {!reducedMotion && cells.map((cell, i) => (
          <BloodCell key={i} {...cell} />
        ))}
      </motion.svg>

      {!reducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-crimson/30"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}
