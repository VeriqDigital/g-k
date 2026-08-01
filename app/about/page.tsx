import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About G&K Junk Removal",
  description: `About ${siteConfig.name}, presented in an unofficial Veriq website concept.`,
};

const companyValues = [
  {
    title: "Direct communication",
    description:
      "Work directly with Gavin to discuss what needs to go and what the job involves.",
  },
  {
    title: "Respectful service",
    description:
      "Contact Gavin to discuss access details and any care needed around the property.",
  },
  {
    title: "Clear next steps",
    description:
      "Review the items, location, and job scope directly with Gavin before scheduling.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-heading text-lg font-bold text-(--accent)">
              Locally owned in Des Moines
            </p>
            <h1 className="mt-3 max-w-2xl font-heading text-5xl font-bold leading-[1.05] text-[#202020] md:text-6xl">
              The easy way to clear out what you no longer need
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#625f59]">
              {siteConfig.name} is locally owned and operated by Gavin in the
              Des Moines area. Call or text Gavin to discuss what needs to go,
              then let G&amp;K handle the lifting, loading, and hauling.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#625f59]">
              Whether you have one bulky item or a larger cleanup in mind,
              contact Gavin to confirm the items, access details, service area,
              and current availability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/services">View Services</Button>
              <Button href={siteConfig.contact.phoneHref} variant="secondary">Call Gavin</Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-[382/510] w-full max-w-[382px] overflow-hidden border border-[#d8d5ce] bg-[#ece9e2]">
            <Image
              src="/gk.jpg"
              alt="Gavin of G&K Junk Removal beside a loaded hauling trailer"
              fill
              className="object-cover"
              sizes="(max-width: 430px) calc(100vw - 3rem), 382px"
              quality={100}
              preload
            />
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--accent)">
            What you can expect
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-[#202020] md:text-5xl">
            Junk removal without the hassle
          </h2>

          <div className="mt-10 grid border-l border-t border-[#d8d5ce] md:grid-cols-3">
            {companyValues.map((value, index) => (
              <article
                key={value.title}
                className="border-b border-r border-[#d8d5ce] bg-white p-7"
              >
                <p className="font-heading text-sm font-bold text-(--accent)">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-[#202020]">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-[#625f59]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[600/485] overflow-hidden border border-[#d8d5ce] bg-[#ece9e2]">
            <Image
              src="/ba1.png"
              alt="Room before and after a G&K Junk Removal cleanout"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) calc(100vw - 3rem), 600px"
              quality={100}
            />
          </div>

          <div className="lg:pl-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--accent)">
              Local and ready to help
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-[#202020] md:text-5xl">
              Des Moines and surrounding-area inquiries
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#625f59]">
              G&amp;K Junk Removal serves Des Moines and surrounding areas.
              Contact Gavin directly to confirm service availability at your
              address.
            </p>
            <div className="mt-7">
              <Button
                href={siteConfig.contact.mapUrl}
                newTab
                variant="secondary"
              >
                View Service Area
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
