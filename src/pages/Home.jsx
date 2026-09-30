import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import BloodDrop from '../components/BloodDrop'
import SectionHeading from '../components/SectionHeading'
import AnimatedNumber from '../components/AnimatedNumber'
import BloodJourney from '../components/BloodJourney'
import BloodComponent from '../components/BloodComponent'
import JourneyPath from '../components/JourneyPath'
import DonationTimeline from '../components/DonationTimeline'
import CTASection from '../components/CTASection'
import { whyBloodMatters } from '../data/donationSteps'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Home() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-near-black text-ivory overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-crimson blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.p
                className="text-xs tracking-[0.3em] uppercase text-crimson mb-8"
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                One donation. A journey through many lives.
              </motion.p>

              <motion.h1
                className="editorial-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9]"
                initial={reducedMotion ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                EVERY DROP<br />HAS A<br />JOURNEY.
              </motion.h1>

              <motion.p
                className="mt-8 text-base md:text-lg text-ivory/60 leading-relaxed max-w-md"
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Blood donation is more than a moment of giving.
                It is a journey through collection, testing, processing,
                and ultimately into another person&apos;s story.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4"
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <a href="#journey" className="btn-primary focus-ring group">
                  Explore the Journey
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <Link to="/why-donate" className="btn-secondary focus-ring">
                  Why Donate
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <BloodDrop className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Blood Matters */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>
            Blood is needed every day —<br />not only when disaster strikes.
          </SectionHeading>

          <div className="mt-20 md:mt-28 space-y-0">
            {whyBloodMatters.map((item, i) => (
              <motion.article
                key={item.number}
                className="grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-t border-near-black/10"
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="text-sm tracking-[0.2em] text-crimson">{item.number}</span>
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="text-2xl md:text-3xl font-serif text-near-black">{item.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-7">
                  <p className="text-neutral leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-near-black text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-end">
            <div>
              <p className="editorial-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-crimson leading-none">
                <AnimatedNumber value={118.5} suffix="M+" decimals={1} />
              </p>
              <p className="mt-6 text-lg md:text-xl text-ivory/70 max-w-md leading-relaxed">
                Blood donations collected globally each year
              </p>
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/blood-safety-and-availability"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-xs text-ivory/40 hover:text-crimson transition-colors focus-ring"
              >
                Source: WHO — Blood safety and availability
              </a>
            </div>
            <div>
              <blockquote className="editorial-heading text-3xl md:text-4xl lg:text-5xl leading-tight text-ivory/90">
                Every donation begins with one person making a decision.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Journey */}
      <div id="journey">
        <BloodJourney />
      </div>

      {/* Blood Components */}
      <BloodComponent />

      {/* Journey Path */}
      <JourneyPath />

      {/* Donation Timeline Preview */}
      <DonationTimeline />

      {/* Find Centre Preview */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-ivory text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-near-black">
            READY TO TAKE THE NEXT STEP?
          </h2>
          <p className="mt-6 text-neutral leading-relaxed">
            Locate official blood donation centres and resources in your area.
          </p>
          <Link to="/find-centre" className="btn-primary focus-ring mt-10 inline-flex group">
            Find a Donation Centre
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline={<>SOMEONE&apos;S<br />TOMORROW<br />MAY BEGIN<br />WITH YOURS.</>}
      />
    </>
  )
}
