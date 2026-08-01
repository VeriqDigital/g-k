import type { ModalType } from "@/components/layout/LeadModal";

export const siteConfig = {
  name: "G&K Junk Removal",
  shortName: "G&K Junk Removal",
  owner: "Gavin",
  description:
    "An unofficial website concept created by Veriq for G&K Junk Removal in the Des Moines, Iowa area.",
  locale: "en_US",
  contact: {
    phone: "(515) 505-1866",
    phoneHref: "tel:+15155051866",
    smsHref: "sms:+15155051866",
    address: "Des Moines, Iowa",
    serviceArea: "Serving Des Moines and surrounding areas",
    mapUrl: "https://maps.google.com/?q=Des+Moines+Iowa",
    mapEmbedUrl: "https://www.google.com/maps?q=Des+Moines+Iowa&output=embed",
  },
} as const;

export type NavItem =
  | { label: string; href: string }
  | { label: string; modal: ModalType };

export const navigation: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", modal: "contact" },
];

export const footerLinks: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Ditch the Junk", modal: "service" },
];

export const primaryCta = {
  label: "Ditch the Junk",
  modal: "service",
} as const satisfies { label: string; modal: ModalType };
