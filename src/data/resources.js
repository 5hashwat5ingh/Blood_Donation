export const resourceCategories = [
  {
    id: 'guide',
    title: 'Blood Donation Guide',
    description: 'Step-by-step information about the donation process, from registration to recovery.',
    links: [
      { label: 'WHO — Why should I donate blood?', url: 'https://www.who.int/news-room/questions-and-answers/item/blood-products-why-should-i-donate-blood' },
      { label: 'American Red Cross — Donation Process', url: 'https://www.redcrossblood.org/donate-blood/how-to-donate/common-concerns.html' },
      { label: 'NHS Blood and Transplant — Giving Blood', url: 'https://www.blood.co.uk/news-and-campaigns/the-donation-journey/' },
    ],
  },
  {
    id: 'groups',
    title: 'Blood Groups',
    description: 'Understanding ABO and Rh classification, compatibility, and why type matters.',
    links: [
      { label: 'NHS — Blood Groups Explained', url: 'https://www.blood.co.uk/why-give-blood/blood-types/' },
      { label: 'American Red Cross — Blood Types', url: 'https://www.redcrossblood.org/donate-blood/blood-types.html' },
    ],
  },
  {
    id: 'preparation',
    title: 'Donor Preparation',
    description: 'How to prepare before donating and what to expect on the day.',
    links: [
      { label: 'WHO — Blood Safety', url: 'https://www.who.int/news-room/fact-sheets/detail/blood-safety-and-availability' },
      { label: 'NHS — Preparing to Donate', url: 'https://www.blood.co.uk/the-donation-process/preparing-to-give-blood/' },
    ],
  },
  {
    id: 'myths',
    title: 'Myths & Facts',
    description: 'Evidence-based answers to common misconceptions about blood donation.',
    links: [
      { label: 'WHO — Blood Safety and Availability', url: 'https://www.who.int/news-room/fact-sheets/detail/blood-safety-and-availability' },
      { label: 'American Red Cross — Common Concerns', url: 'https://www.redcrossblood.org/donate-blood/how-to-donate/common-concerns.html' },
    ],
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    description: 'Answers to the most common questions about donating blood.',
    links: [
      { label: 'WHO — Blood Products Q&A', url: 'https://www.who.int/news-room/questions-and-answers/item/blood-products-why-should-i-donate-blood' },
      { label: 'NHS — Donation FAQ', url: 'https://www.blood.co.uk/why-give-blood/can-i-give-blood/' },
    ],
  },
  {
    id: 'sources',
    title: 'Trusted Sources',
    description: 'Authoritative organizations for blood donation information worldwide.',
    links: [
      { label: 'World Health Organization (WHO)', url: 'https://www.who.int/health-topics/blood-safety' },
      { label: 'International Federation of Red Cross and Red Crescent Societies', url: 'https://www.ifrc.org/what-we-do/disaster-and-crisis/prevention-and-preparedness/blood-services' },
      { label: 'AABB (Association for the Advancement of Blood & Biotherapies)', url: 'https://www.aabb.org/' },
    ],
  },
]

export const journeyStages = [
  { id: 'donor', label: 'Donor', description: 'A person decides to give — one act of generosity begins a complex journey.' },
  { id: 'collection', label: 'Collection', description: 'Blood is drawn using sterile, single-use equipment at a blood service facility or drive.' },
  { id: 'testing', label: 'Testing', description: 'Every unit is tested for blood type and infectious diseases before it can be used.' },
  { id: 'processing', label: 'Processing', description: 'Whole blood is centrifuged and separated into its life-saving components.' },
  { id: 'components', label: 'Components', description: 'Red cells, platelets, and plasma are prepared for different medical needs.' },
  { id: 'storage', label: 'Storage', description: 'Each component is stored under precise temperature and conditions until needed.' },
  { id: 'patient', label: 'Patient Care', description: 'A patient receives the component they need — completing the journey from one person to another.' },
]

export const verifiedStats = [
  {
    value: 118.5,
    suffix: 'M',
    label: 'Blood donations collected globally each year',
    source: 'WHO — Blood safety and availability fact sheet',
    sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/blood-safety-and-availability',
  },
  {
    value: 1,
    suffix: '',
    prefix: '1 in ',
    label: 'People in high-income countries receive the greatest share of donations despite representing a smaller share of the global population',
    source: 'WHO — Blood safety and availability',
    sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/blood-safety-and-availability',
    isText: true,
  },
]

export const indiaStates = [
  { state: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'], resource: 'https://www.nbtc.naco.gov.in/' },
  { state: 'Delhi', cities: ['New Delhi', 'Delhi NCR'], resource: 'https://www.nbtc.naco.gov.in/' },
  { state: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Mangalore'], resource: 'https://www.nbtc.naco.gov.in/' },
  { state: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai'], resource: 'https://www.nbtc.naco.gov.in/' },
  { state: 'West Bengal', cities: ['Kolkata', 'Siliguri', 'Durgapur'], resource: 'https://www.nbtc.naco.gov.in/' },
  { state: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara'], resource: 'https://www.nbtc.naco.gov.in/' },
  { state: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur'], resource: 'https://www.nbtc.naco.gov.in/' },
  { state: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Varanasi'], resource: 'https://www.nbtc.naco.gov.in/' },
  { state: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode'], resource: 'https://www.nbtc.naco.gov.in/' },
  { state: 'Telangana', cities: ['Hyderabad', 'Warangal'], resource: 'https://www.nbtc.naco.gov.in/' },
]
