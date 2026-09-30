import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { indiaStates } from '../data/resources'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function FindCentre() {
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const reducedMotion = useReducedMotion()

  const stateData = indiaStates.find((s) => s.state === selectedState)
  const cities = stateData?.cities || []

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-near-black text-ivory">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-crimson mb-6">Find a Centre</p>
          <SectionHeading
            dark
            subtitle="Connect with official blood services in your area. This tool provides links to recognized resources — not real-time inventory."
          >
            FIND A DONATION<br />CENTRE.
          </SectionHeading>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12 bg-ivory">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="state" className="block text-xs tracking-[0.2em] uppercase text-neutral mb-3">
                State
              </label>
              <select
                id="state"
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value)
                  setSelectedCity('')
                }}
                className="w-full px-4 py-4 bg-transparent border border-near-black/15 text-near-black focus:border-crimson focus:outline-none focus-ring appearance-none cursor-pointer"
              >
                <option value="">Select a state</option>
                {indiaStates.map((s) => (
                  <option key={s.state} value={s.state}>{s.state}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block text-xs tracking-[0.2em] uppercase text-neutral mb-3">
                City
              </label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState}
                className="w-full px-4 py-4 bg-transparent border border-near-black/15 text-near-black focus:border-crimson focus:outline-none focus-ring appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </form>

          {selectedState && selectedCity && (
            <motion.div
              className="mt-12 p-8 border border-near-black/10"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-crimson shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-near-black">
                    {selectedCity}, {selectedState}
                  </h3>
                  <p className="mt-2 text-sm text-neutral leading-relaxed">
                    For blood donation centres and camps in your area, please contact your state blood transfusion council or visit the official National Blood Transfusion Council portal.
                  </p>
                  <div className="mt-6 space-y-3">
                    <a
                      href={stateData.resource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-crimson hover:underline focus-ring"
                    >
                      National Blood Transfusion Council (NBTC)
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href="https://www.who.int/news-room/questions-and-answers/item/blood-products-why-should-i-donate-blood"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-crimson hover:underline focus-ring"
                    >
                      WHO — Find blood services
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href="https://www.redcrossblood.org/give.html/find-a-drive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-crimson hover:underline focus-ring"
                    >
                      American Red Cross — Find a drive
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <p className="mt-12 text-xs text-neutral leading-relaxed border-l-2 border-crimson/30 pl-4">
            This is a static educational tool. Real-time blood bank availability and appointment booking require integration with official blood service APIs. Always verify information with your local blood service.
          </p>
        </div>
      </section>
    </>
  )
}
