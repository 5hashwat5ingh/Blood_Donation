import SectionHeading from '../components/SectionHeading'
import BloodGroupSelector from '../components/BloodGroupSelector'
import BloodComponent from '../components/BloodComponent'
import CTASection from '../components/CTASection'

export default function Blood() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-near-black text-ivory">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-crimson mb-6">Blood</p>
          <SectionHeading
            dark
            subtitle="Understanding blood groups and components helps explain why every type matters — and how one donation can serve multiple patients."
          >
            THE SCIENCE<br />OF GIVING.
          </SectionHeading>
        </div>
      </section>

      <BloodGroupSelector />
      <BloodComponent />
      <CTASection
        headline={<>LEARN YOUR TYPE.<br />SAVE A LIFE.</>}
        secondaryTo="/donation-guide"
        secondaryLabel="Donation Guide"
      />
    </>
  )
}
