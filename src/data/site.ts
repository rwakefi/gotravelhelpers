import siteJson from './content/site.json';
import imagesJson from './content/images.json';
import servicesJson from './content/services.json';
import audiencesJson from './content/audiences.json';
import stepsJson from './content/steps.json';
import recentAdventuresJson from './content/recent-adventures.json';
import founderNoteJson from './content/founder-note.json';
import faqsJson from './content/faqs.json';
import bannerJson from './content/banner.json';
import executiveServicesJson from './content/executive-services.json';
import testimonialsJson from './content/testimonials.json';

function phoneHref(phone: string) {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 ? `tel:+1${digits}` : `tel:+${digits}`;
}

export const site = {
  ...siteJson,
  phoneHref: phoneHref(siteJson.phone),
};

export const images = imagesJson;

export const nav = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '#',
    submenu: [
      { label: 'Executive Travel', href: '/services/executive' },
      { label: 'Assisted Travel', href: '/services' },
    ],
  },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;

export const services = servicesJson.items;
export const audiences = audiencesJson.items;
export const steps = stepsJson.items;
export const recentAdventures = recentAdventuresJson.items;
export const founderNote = founderNoteJson;
export const faqs = faqsJson.items;

export const stats = [
  { value: 'Worldwide', label: 'Companion coverage' },
  { value: 'Door-to-door', label: 'End-to-end support' },
  { value: 'RN-led', label: 'Medical experience' },
  { value: 'Custom', label: 'Trips tailored to you' },
] as const;

export const banner = bannerJson;
export const executiveServices = executiveServicesJson.items;
export const testimonials = testimonialsJson.items;
