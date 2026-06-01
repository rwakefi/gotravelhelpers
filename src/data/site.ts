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
    src: 'https://images.unsplash.com/photo-1759866730722-80a21b6501cd?w=900&q=80',
    alt: 'Two senior travelers talking at an airport with luggage nearby',
    width: 900,
    height: 1100,
  },
  mission: {
    src: 'https://images.unsplash.com/photo-1776613049786-0054c719b453?w=800&q=80',
    alt: 'Elderly couple walking hand in hand while traveling outdoors',
    width: 800,
    height: 600,
  },
  about: {
    src: 'https://images.unsplash.com/photo-1762237715631-94945bab86e4?w=700&q=80',
    alt: 'Elderly couple standing on a beach watching the waves during their trip',
    width: 700,
    height: 850,
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
  },
  {
    title: 'In-Flight Companion',
    description:
      'A trusted companion by your side in the air, offering reassurance, assistance, and attentive care throughout the flight.',
    icon: 'heart',
  },
  {
    title: 'Door-to-Door Travel',
    description:
      'Complete journey support from your home to your final destination, including ground transportation coordination.',
    icon: 'home',
  },
  {
    title: 'Lodging Support',
    description:
      'Help settling into hotels and accommodations along the way, so every stop is comfortable and stress-free.',
    icon: 'bed',
  },
  {
    title: 'Multi-Day & Full-Trip',
    description:
      'Companion support for entire vacations, relocations, or extended travel — from first departure to safe return home.',
    icon: 'calendar',
  },
  {
    title: 'Trip Planning & Logistics',
    description:
      'Flights, hotels, accessibility research, and itinerary planning tailored to your needs and comfort level.',
    icon: 'map',
  },
  {
    title: 'Medical Travel Support',
    description:
      'Experienced nursing background for travelers with medical needs — coordinated, compassionate, and professional.',
    icon: 'medical',
  },
] as const;

export const audiences = [
  {
    title: 'Seniors traveling independently',
    description: 'Regain confidence to visit family, attend events, or explore the world on your own terms.',
  },
  {
    title: 'Adult children arranging care',
    description: 'Peace of mind knowing a professional companion is with your loved one every step of the way.',
  },
  {
    title: 'Medical & mobility needs',
    description: 'Thoughtful support for appointments, treatments, recovery travel, and specialized requirements.',
  },
  {
    title: 'Bucket-list adventures',
    description: 'Make dream destinations a reality with a companion who handles the details while you enjoy the moment.',
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
