import SectionHeading from '../components/SectionHeading'
import ResourceList from '../components/ResourceList'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'

export default function Resources() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-near-black text-ivory">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-crimson mb-6">Resources</p>
          <SectionHeading
            dark
            subtitle="Authoritative information from recognized health organizations worldwide."
          >
            KNOW MORE.<br />GIVE BETTER.
          </SectionHeading>
        </div>
      </section>

      <ResourceList />
      <FAQ />

      <CTASection headline={<>READY WHEN<br />YOU ARE.</>} />
    </>
  )
}
