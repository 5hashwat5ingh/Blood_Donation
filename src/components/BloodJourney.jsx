import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { journeyStages } from '../data/resources'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function BloodJourney() {
  const containerRef = useRef(null)
  const particleRef = useRef(null)
  const stagesRef = useRef([])
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
        },
      })

      tl.to(particleRef.current, {
        y: '+=600',
        ease: 'none',
        duration: 1,
      })

      stagesRef.current.forEach((stage, i) => {
        if (!stage) return
        tl.to(
          stage,
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
          },
          i * 0.12,
        )
      })

      tl.to(
        particleRef.current,
        {
          scale: 2,
          opacity: 0.3,
          duration: 0.2,
        },
        0.7,
      )

      const splits = containerRef.current.querySelectorAll('.journey-split')
      tl.to(
        splits,
        {
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.15,
        },
        0.75,
      )
    }, containerRef)

    return () => ctx.revert()
  }, [reducedMotion])

  if (reducedMotion) {
    return (
      <section className="py-24 md:py-32 px-6 md:px-12 bg-near-black text-ivory" aria-labelledby="journey-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="journey-heading" className="editorial-heading text-4xl md:text-6xl mb-16">
            FROM ONE DONATION<br />TO MANY LIVES.
          </h2>
          <ol className="space-y-8">
            {journeyStages.map((stage) => (
              <li key={stage.id} className="border-l-2 border-crimson pl-6">
                <h3 className="text-xl font-medium text-crimson">{stage.label}</h3>
                <p className="mt-2 text-ivory/70">{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-near-black text-ivory overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1px] h-[70%] bg-gradient-to-b from-transparent via-crimson/40 to-transparent" />
      </div>

      <div
        ref={particleRef}
        className="absolute left-1/2 top-[15%] -translate-x-1/2 z-20"
        aria-hidden="true"
      >
        <div className="w-4 h-4 rounded-full bg-crimson shadow-[0_0_20px_rgba(155,28,49,0.6)]" />
      </div>

      <div className="journey-split absolute left-[30%] top-[60%] opacity-0 scale-0" aria-hidden="true">
        <div className="w-2 h-2 rounded-full bg-crimson" />
      </div>
      <div className="journey-split absolute left-[50%] top-[65%] opacity-0 scale-0" aria-hidden="true">
        <div className="w-2 h-2 rounded-full bg-crimson-dark" />
      </div>
      <div className="journey-split absolute left-[70%] top-[60%] opacity-0 scale-0" aria-hidden="true">
        <div className="w-2 h-2 rounded-full bg-neutral" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between py-24">
        <h2
          id="journey-heading"
          className="editorial-heading text-3xl md:text-5xl lg:text-6xl max-w-2xl"
        >
          FROM ONE DONATION<br />TO MANY LIVES.
        </h2>

        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {journeyStages.map((stage, i) => (
              <div
                key={stage.id}
                ref={(el) => { stagesRef.current[i] = el }}
                className="opacity-0 translate-y-8 transition-none"
                style={{ gridColumn: i >= 4 ? `span 1` : undefined }}
              >
                <span className="text-xs tracking-[0.2em] text-crimson uppercase">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-lg md:text-xl font-medium">{stage.label}</h3>
                <p className="mt-2 text-sm text-ivory/50 leading-relaxed hidden md:block">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-ivory/40 max-w-md">
          Scroll to follow a single donation through collection, testing, processing, and into patient care.
        </p>
      </div>
    </section>
  )
}
