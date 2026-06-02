export const site = {
  name: 'Go Travel Helpers',
  domain: 'gotravelhelpers.com',
  motto: "Don't let getting there keep you from going.",
  tagline: "Don't let getting there keep you from going.",
  description:
    'Go Travel Helpers provides travel companions for seniors and people who need extra support when flying or lodging along the way — everything needed to get from point A to point B, for medical needs or that bucket-list trip.',
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
    facebook: 'https://facebook.com/gotravelhelpers',
    instagram: 'https://instagram.com/gotravelhelpers',
    linkedin: 'https://linkedin.com/company/gotravelhelpers',
  },
  founder: {
    name: 'Cyndi Glidewell',
    credentials: 'RN, MBA',
    title: 'Founder',
  },
} as const;

export const images = {
  hero: {
    src: '/images/hero.jpg',
    alt: 'Traveler with luggage at the airport, ready for a supported journey',
    width: 1200,
    height: 1500,
  },
  mission: {
    src: '/images/mission.jpg',
    alt: 'Travelers walking together on a scenic outdoor path',
    width: 1000,
    height: 750,
  },
  about: {
    src: '/images/about.jpg',
    alt: 'Couple enjoying a coastal view during their vacation',
    width: 1000,
    height: 1250,
  },
  pageHero: {
    services: {
      src: '/images/airport.jpg',
      alt: 'Busy airport terminal with travelers',
    },
    howItWorks: {
      src: '/images/planning.jpg',
      alt: 'Travel map and planning materials on a table',
    },
    contact: {
      src: '/images/contact.jpg',
      alt: 'Airplane at the gate, ready for departure',
    },
    about: {
      src: '/images/group-travel.jpg',
      alt: 'Group of friends traveling together',
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
    imageAlt: 'Travelers moving through a modern airport terminal',
  },
  {
    title: 'In-Flight Companion',
    description:
      'A trusted companion by your side in the air, offering reassurance, assistance, and attentive care throughout the flight.',
    icon: 'heart',
    image: '/images/flight.jpg',
    imageAlt: 'View from an airplane window above the clouds',
  },
  {
    title: 'Door-to-Door Travel',
    description:
      'Complete journey support from your home to your final destination, including ground transportation coordination.',
    icon: 'home',
    image: '/images/door-to-door.jpg',
    imageAlt: 'Airplane cabin ready for passengers boarding',
  },
  {
    title: 'Lodging Support',
    description:
      'Help settling into hotels and accommodations along the way, so every stop is comfortable and stress-free.',
    icon: 'bed',
    image: '/images/hotel.jpg',
    imageAlt: 'Comfortable hotel room prepared for guests',
  },
  {
    title: 'Multi-Day & Full-Trip',
    description:
      'Companion support for entire vacations, relocations, or extended travel — from first departure to safe return home.',
    icon: 'calendar',
    image: '/images/calendar.jpg',
    imageAlt: 'Scenic mountain landscape on a multi-day journey',
  },
  {
    title: 'Trip Planning & Logistics',
    description:
      'Flights, hotels, accessibility research, and itinerary planning tailored to your needs and comfort level.',
    icon: 'map',
    image: '/images/planning.jpg',
    imageAlt: 'Map and travel notes spread out for trip planning',
  },
  {
    title: 'Medical Travel Support',
    description:
      'Experienced nursing background for travelers with medical needs — coordinated, compassionate, and professional.',
    icon: 'medical',
    image: '/images/medical.jpg',
    imageAlt: 'Caregiver offering supportive assistance to a traveler',
  },
] as const;

export const audiences = [
  {
    title: 'Seniors traveling independently',
    description: 'Regain confidence to visit family, attend events, or explore the world on your own terms.',
    image: '/images/audience-seniors.jpg',
    imageAlt: 'Senior traveler smiling with luggage at the airport',
  },
  {
    title: 'Adult children arranging care',
    description: 'Peace of mind knowing a professional companion is with your loved one every step of the way.',
    image: '/images/audience-family.jpg',
    imageAlt: 'Family members together in a bright, welcoming space',
  },
  {
    title: 'Medical & mobility needs',
    description: 'Thoughtful support for appointments, treatments, recovery travel, and specialized requirements.',
    image: '/images/audience-medical.jpg',
    imageAlt: 'Compassionate caregiver supporting someone during travel',
  },
  {
    title: 'Bucket-list adventures',
    description: 'Make dream destinations a reality with a companion who handles the details while you enjoy the moment.',
    image: '/images/audience-adventure.jpg',
    imageAlt: 'Travelers hiking together on a scenic trail',
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

export const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our companion made a cross-country trip feel effortless and safe.',
    name: 'Margaret S.',
    location: 'Portland, OR',
  },
  {
    quote:
      'Sed do eiusmod tempor incididunt ut labore. I could finally visit my grandchildren without the anxiety of traveling alone.',
    name: 'Robert H.',
    location: 'Chicago, IL',
  },
  {
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation. The planning and in-flight support exceeded our expectations.',
    name: 'Susan & David K.',
    location: 'Atlanta, GA',
  },
] as const;

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
