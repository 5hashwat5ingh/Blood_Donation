import SectionHeading from '../components/SectionHeading'
import MythFact from '../components/MythFact'
import CTASection from '../components/CTASection'

export default function Myths() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-crimson mb-6">Myths & Facts</p>
          <SectionHeading subtitle="Misconceptions about blood donation persist. Here are evidence-based answers to the most common concerns.">
            SEPARATING FACT<br />FROM FICTION.
          </SectionHeading>
        </div>
      </section>

      <MythFact />

      <CTASection
        headline={<>INFORMED DONORS<br />MAKE STRONGER<br />COMMUNITIES.</>}
        secondaryTo="/donation-guide"
        secondaryLabel="Donation Guide"
      />
    </>
  )
}
