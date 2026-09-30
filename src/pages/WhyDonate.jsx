import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { whyBloodMatters } from '../data/donationSteps'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function WhyDonate() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-near-black text-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-crimson mb-6"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Why Donate
          </motion.p>
          <SectionHeading dark subtitle="Blood cannot be manufactured. It can only come from voluntary donors — people who choose to give a part of themselves so that others may live.">
            WHY BLOOD<br />DONATION<br />MATTERS.
          </SectionHeading>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <p className="editorial-heading text-3xl md:text-4xl text-near-black max-w-3xl leading-snug mb-20">
            Blood is needed every day — not only when disaster strikes.
          </p>

          <div className="space-y-0">
            {whyBloodMatters.map((item, i) => (
              <motion.article
                key={item.number}
                className="grid md:grid-cols-12 gap-6 py-12 border-t border-near-black/10"
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="md:col-span-2">
                  <span className="editorial-heading text-5xl text-crimson/25">{item.number}</span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif">{item.title}</h2>
                </div>
                <div className="md:col-span-6">
                  <p className="text-neutral leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12 bg-rose/30">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="editorial-heading text-3xl md:text-4xl text-near-black leading-snug">
            &ldquo;A single donation can help save more than one life. The need for blood is constant — every day, everywhere.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-neutral">
            Source: WHO — Why should I donate blood?
          </p>
        </div>
      </section>

      <CTASection headline={<>YOUR DECISION<br />CAN CHANGE<br />SOMEONE&apos;S STORY.</>} />
    </>
  )
}
