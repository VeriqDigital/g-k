"use client";

import Image from "next/image";
import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import Button from "@/components/ui/Button";
import { primaryCta, siteConfig } from "@/config/site";

const Hero = () => {
  const {
    activeModal,
    closeModal,
    handleFormSubmit,
    hasSubmitted,
    isSubmitting,
    openModal,
    submitError,
  } = useLeadModal();

  return (
    <section>
      <div className="mx-auto grid w-full max-w-(--container-width) border-b border-(--border) bg-white lg:min-h-128 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex items-center px-6 py-12 lg:py-14 lg:pl-10 lg:pr-12">
          <div className="max-w-xl">
            <p className="mb-3 font-heading text-lg font-bold text-(--accent)">
              Locally Owned &amp; Operated
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-[#202020] sm:text-5xl lg:text-[3.5rem]">
              Junk Gone.
              <span className="block">Space Reclaimed.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-7 text-[#4f4c47]">
              Junk removal for Des Moines and surrounding areas.
            </p>
            <p className="mt-3 max-w-lg text-lg leading-7 text-[#4f4c47]">
              Contact Gavin to discuss what needs to go. G&amp;K handles the
              lifting, loading, and hauling.
            </p>
            <p className="mt-5 font-heading text-lg font-bold text-[#202020]">
              Call or text Gavin directly to discuss a pickup.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => openModal(primaryCta.modal)}>
                {primaryCta.label}
              </Button>
              <Button href={siteConfig.contact.phoneHref} variant="secondary">Call Gavin</Button>
            </div>
            <a href={siteConfig.contact.smsHref} className="mt-4 inline-block text-sm font-semibold text-[#555555] underline decoration-[#999999] underline-offset-4 transition hover:text-black">
              Prefer texting? Text {siteConfig.contact.phone}
            </a>
          </div>
        </div>

        <div className="grid min-h-88 grid-cols-2 gap-1 border-t border-[#d8d2c7] bg-[#e8e5de] sm:min-h-100 lg:min-h-full lg:border-l lg:border-t-0">
          <div className="relative overflow-hidden">
            <Image
              src="/gavin-and-crew-trailer.jpg"
              alt="Gavin and the G&K Junk Removal crew beside a loaded trailer"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 50vw, 352px"
              quality={100}
              preload
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/gk-junk-removal-truck.jpg"
              alt="G&K Junk Removal crew beside a loaded pickup"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 50vw, 352px"
              quality={100}
            />
          </div>
        </div>
      </div>

      {activeModal && (
        <LeadModal
          activeModal={activeModal}
          hasSubmitted={hasSubmitted}
          isSubmitting={isSubmitting}
          onClose={closeModal}
          onSubmit={handleFormSubmit}
          submitError={submitError}
        />
      )}
    </section>
  );
};

export default Hero;
