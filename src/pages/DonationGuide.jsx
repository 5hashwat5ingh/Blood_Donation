import SectionHeading from '../components/SectionHeading'
import DonationTimeline from '../components/DonationTimeline'
import PreparationChecklist from '../components/PreparationChecklist'
import CTASection from '../components/CTASection'

export default function DonationGuide() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-near-black text-ivory">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-crimson mb-6">Donation Guide</p>
          <SectionHeading
            dark
            subtitle="From the moment you walk in to the days after your donation — here is what to expect at every stage."
          >
            THE DONATION<br />PROCESS.
          </SectionHeading>
        </div>
      </section>

      <DonationTimeline showTitle={false} />
      <PreparationChecklist />

      <section className="py-20 px-6 md:px-12 bg-ivory">
        <div className="max-w-3xl mx-auto border-l-2 border-crimson pl-6">
          <p className="text-neutral leading-relaxed text-sm">
            Eligibility criteria vary by country, region, and blood service. Factors such as age, weight, health conditions, medications, and recent travel may affect whether you can donate on a given day. Always consult your local blood service for current requirements.
          </p>
        </div>
      </section>

      <CTASection headline={<>PREPARED TO<br />GIVE?</>} />
    </>
  )
}
