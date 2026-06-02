export const site = {
  name: 'Travel Helpers',
  domain: 'gotravelhelpers.com',
  motto: "Don't let getting there keep you from going.",
  tagline: "Don't let getting there keep you from going.",
  description:
    'Travel Helpers provides services ranging from extra hands during air travel to non-critical medical assistance while traveling. We now stay with you throughout your adventure — so you can focus on the experience while we handle the rest.',
  phone: '479.420.5184',
  phoneHref: 'tel:+14794205184',
  email: 'info@gotravelhelpers.com',
  address: {
    line1: '123 Main Street',
    line2: 'Suite 100',
    city: 'Fayetteville',
    state: 'AR',
    zip: '72701',
    country: 'United States',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100083484635385',
    instagram: 'https://instagram.com/gotravelhelpers',
    linkedin: 'https://linkedin.com/company/gotravelhelpers',
  },
  founder: {
    name: 'Cyndi Glidewell',
    credentials: 'RN, MBA',
    title: 'Founder',
  },
  logo: {
    src: '/images/logo.png',
    alt: 'Travel Helpers',
    width: 1240,
    height: 346,
  },
} as const;

export const images = {
  hero: {
    src: '/images/trip-cruise-group.jpg',
    alt: 'Travel Helpers team with a client on a cruise vacation',
    width: 1200,
    height: 1500,
  },
  mission: {
    src: '/images/trip-greece-assist.jpg',
    alt: 'Travel Helper assisting a client at a historic site abroad',
    width: 1000,
    height: 750,
  },
  about: {
    src: '/images/trip-cruise-group.jpg',
    alt: 'Travel Helpers team with a client on a cruise vacation',
    width: 1000,
    height: 1250,
  },
  pageHero: {
    services: {
      src: '/images/airport.jpg',
      alt: 'Elderly man waiting at an airport terminal window',
    },
    howItWorks: {
      src: '/images/planning.jpg',
      alt: 'Senior couple reviewing travel plans and boarding pass',
    },
    contact: {
      src: '/images/contact.jpg',
      alt: 'Elderly travelers at the airport',
    },
    about: {
      src: '/images/group-travel.jpg',
      alt: 'Senior friends traveling together',
    },
  },
} as const;

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;

export const services = [
  {
    title: 'Airport Companion',
    description:
      'Support from arrival at the airport through check-in, security, boarding, and baggage claim — so no step feels overwhelming.',
    icon: 'plane',
    image: '/images/airport.jpg',
    imageAlt: 'Elderly man waiting at an airport terminal',
  },
  {
    title: 'In-Flight Companion',
    description:
      'A trusted companion by your side in the air, offering reassurance, assistance, and attentive care throughout the flight.',
    icon: 'heart',
    image: '/images/flight.jpg',
    imageAlt: 'Senior couple reviewing a boarding pass before their flight',
  },
  {
    title: 'Door-to-Door Travel',
    description:
      'Complete journey support from your home to your final destination, including ground transportation coordination.',
    icon: 'home',
    image: '/images/door-to-door.jpg',
    imageAlt: 'Elderly couple walking together while traveling',
  },
  {
    title: 'Lodging Support',
    description:
      'Help settling into hotels and accommodations along the way, so every stop is comfortable and stress-free.',
    icon: 'bed',
    image: '/images/hotel.jpg',
    imageAlt: 'Senior travelers settling in at their lodging',
  },
  {
    title: 'Multi-Day & Full-Trip',
    description:
      'Companion support for entire vacations, relocations, or extended travel — from first departure to safe return home. We stay with you throughout your adventure, not just to get you there.',
    icon: 'calendar',
    image: '/images/trip-cruise-group.jpg',
    imageAlt: 'Travel Helpers team with a client enjoying a cruise vacation',
  },
  {
    title: 'On-Adventure Assistance',
    description:
      'Hands-on support at your destination — cruise excursions, historic sites, theme parks, and daily activities. While you enjoy your vacation, your Travel Helper is working to keep you safe and comfortable.',
    icon: 'compass',
    image: '/images/trip-greece-assist.jpg',
    imageAlt: 'Travel Helper assisting a client entering a historic site',
  },
  {
    title: 'Trip Planning & Logistics',
    description:
      'Flights, hotels, accessibility research, and itinerary planning tailored to your needs and comfort level.',
    icon: 'map',
    image: '/images/planning.jpg',
    imageAlt: 'Senior couple planning their trip together',
  },
  {
    title: 'Medical Travel Support',
    description:
      'Experienced nursing background for travelers with medical needs — coordinated, compassionate, and professional.',
    icon: 'medical',
    image: '/images/medical.jpg',
    imageAlt: 'Elderly couple sharing a supportive, caring moment',
  },
] as const;

export const audiences = [
  {
    title: 'Seniors traveling independently',
    description: 'Regain confidence to visit family, attend events, or explore the world on your own terms.',
    image: '/images/audience-seniors.jpg',
    imageAlt: 'Senior couple with luggage preparing to travel',
  },
  {
    title: 'Adult children arranging care',
    description: 'Peace of mind knowing a professional companion is with your loved one every step of the way.',
    image: '/images/audience-family.jpg',
    imageAlt: 'Elderly couple traveling with support from family',
  },
  {
    title: 'Medical & mobility needs',
    description: 'Thoughtful support for appointments, treatments, recovery travel, and specialized requirements.',
    image: '/images/audience-medical.jpg',
    imageAlt: 'Senior in a wheelchair receiving caregiver assistance',
  },
  {
    title: 'Bucket-list adventures',
    description: 'Make dream destinations a reality with a companion who handles the details while you enjoy the moment.',
    image: '/images/audience-adventure.jpg',
    imageAlt: 'Elderly couple enjoying a bucket-list vacation',
  },
] as const;

export const steps = [
  {
    number: '01',
    title: 'Reach out',
    description:
      'Call, email, or submit our inquiry form. Tell us about the traveler, destination, dates, and any special needs.',
  },
  {
    number: '02',
    title: 'Personalized plan',
    description:
      'We design a companion plan covering every leg of the journey — flights, ground transport, lodging, and on-trip support.',
  },
  {
    number: '03',
    title: 'Travel with confidence',
    description:
      'Your companion meets you where you need them and stays with you through each phase of the trip.',
  },
  {
    number: '04',
    title: 'Safe arrival & follow-up',
    description:
      'We ensure a smooth arrival at your destination and keep family updated along the way. We are with you until you are settled.',
  },
] as const;

export const recentAdventures = [
  {
    title: 'Royal Caribbean — Eastern Caribbean',
    description:
      'Companion support on a Royal Caribbean cruise through the Eastern Caribbean — helping our client navigate ports, excursions, and every detail along the way.',
    image: '/images/trip-cruise-group.jpg',
    imageAlt: 'Travel Helpers team with a client on a cruise vacation',
  },
  {
    title: 'Las Vegas — 88+ year-old traveler & son',
    description:
      'A trip to Las Vegas for an 88-year-old client and his son — proof that age does not have to keep you from the experiences you have been waiting for.',
    image: '/images/trip-scenic-rail.jpg',
    imageAlt: 'Travel Helpers client enjoying a scenic excursion',
  },
  {
    title: 'Norwegian Cruise Line — Greece',
    description:
      'An NCL voyage through Greece and the Mediterranean — from cobblestone streets to historic mosques, with a Travel Helper by their side every step.',
    image: '/images/trip-greece-mosque.jpg',
    imageAlt: 'Travel Helpers clients visiting the Blue Mosque in Istanbul',
  },
] as const;

export const founderNote = {
  title: 'Travel wisely — a note from Cyndi',
  intro:
    'Lots of TH travels lately! There are so many people who need just a little help to achieve their travel dreams. Whether you hire a Travel Helper or not, please read the cruise line or park service description of every excursion and take it to heart.',
  points: [
    'On recent excursions, multiple people had mobility issues that were not appropriate for the tour — frustrating and dangerous for everyone involved.',
    'There are creative ways to take in the sights that may not require stepping up and down on a bus six or seven times or navigating difficult cobblestone.',
    'For many travelers, simply adding walking sticks for the journey would make a meaningful difference.',
  ],
  closing:
    'Call Travel Helpers to hire your travel assistant today. While you are on your vacation, we are working.',
  gallery: [
    { src: '/images/trip-greece-assist.jpg', alt: 'Travel Helper assisting a client at a historic site' },
    { src: '/images/trip-waterfall-poles.jpg', alt: 'Travel Helper using trekking poles on an excursion' },
    { src: '/images/trip-greece-donkeys.jpg', alt: 'Navigating cobblestone paths in Greece' },
    { src: '/images/trip-alps.jpg', alt: 'Alpine scenery on a recent Travel Helpers trip' },
  ],
} as const;

export const faqs = [
  {
    question: 'Who do you serve?',
    answer:
      'We serve seniors, adult children arranging travel for loved ones, travelers with medical or mobility needs, and anyone who wants professional companion support for domestic or international trips.',
  },
  {
    question: 'Where do you operate?',
    answer:
      'We operate worldwide. Our companions travel wherever you need to go — across the country or around the globe.',
  },
  {
    question: 'What does a travel companion do?',
    answer:
      'A travel companion provides hands-on assistance throughout your journey: airport navigation, baggage help, in-flight support, ground transportation coordination, lodging assistance, and ongoing communication with family.',
  },
  {
    question: 'Do you offer medical support?',
    answer:
      'Yes. Our founder is a registered nurse with an MBA. We can provide medically informed companion support tailored to each traveler\'s needs. Contact us to discuss your specific situation.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Every trip is unique. Contact us by phone, email, or our inquiry form and we will provide a personalized quote based on your itinerary and level of support needed.',
  },
  {
    question: 'Can you help plan the entire trip?',
    answer:
      'Absolutely. We handle flights, hotels, accessibility research, and full itinerary planning in addition to companion services.',
  },
  {
    question: 'Do you stay with clients during their vacation?',
    answer:
      'Yes. We have expanded our services to include staying with you throughout your adventure — not just getting you there. Your Travel Helper provides hands-on assistance at your destination, on excursions, and throughout your trip.',
  },
  {
    question: 'How do I choose the right excursion?',
    answer:
      'Always read the cruise line or park service description of each excursion carefully. Be honest about mobility needs — there are often creative ways to enjoy the sights without high bus steps, difficult cobblestone, or terrain that is not a good fit. We can help you plan alternatives.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend reaching out as early as possible, especially for complex or international itineraries. We also accommodate urgent travel when availability allows.',
  },
] as const;

export const stats = [
  { value: 'Worldwide', label: 'Companion coverage' },
  { value: 'Door-to-door', label: 'End-to-end support' },
  { value: 'RN-led', label: 'Medical expertise' },
  { value: 'Custom', label: 'Trips tailored to you' },
] as const;
