import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { resourceCategories } from '../data/resources'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function ResourceList() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-ivory" aria-labelledby="resources-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="resources-heading" className="editorial-heading text-4xl md:text-6xl text-near-black mb-16">
          RESOURCES
        </h2>

        <div className="space-y-0">
          {resourceCategories.map((category, i) => (
            <motion.article
              key={category.id}
              className="grid md:grid-cols-12 gap-6 py-10 border-t border-near-black/10"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="md:col-span-4">
                <span className="text-xs tracking-[0.2em] text-crimson uppercase">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-xl md:text-2xl font-medium text-near-black">{category.title}</h3>
                <p className="mt-2 text-sm text-neutral leading-relaxed">{category.description}</p>
              </div>
              <ul className="md:col-span-8 space-y-3">
                {category.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 border-b border-near-black/5 hover:border-crimson/30 transition-colors focus-ring"
                    >
                      <span className="text-sm text-near-black group-hover:text-crimson transition-colors">
                        {link.label}
                      </span>
                      <ExternalLink size={14} className="text-neutral group-hover:text-crimson transition-colors shrink-0 ml-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
