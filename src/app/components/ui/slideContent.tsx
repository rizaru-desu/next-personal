import React, { FC } from "react";

const WorkExperienceItem: FC<{
  year: string;
  company: string;
  role: string;
  logo: string;
  alt: string;
}> = ({ year, company, role, logo, alt }) => (
  <div className="flex flex-col gap-1 md:flex-row md:gap-10">
    <p className="mt-1 text-sm font-medium text-gray-500">{year}</p>
    <div className="flex items-center gap-3">
      <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-gray-100">
        <img
          src={logo}
          alt={alt}
          className="h-5 w-5"
          onError={(e) => {
            (
              e.target as HTMLImageElement
            ).src = `https://placehold.co/32x32/EFEFEF/333333?text=${alt.charAt(
              0
            )}`;
          }}
        />
      </div>
      <div>
        <h6 className="text-base font-semibold text-gray-800">{company}</h6>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const ExpertiseItem: FC<{ name: string; logo: string }> = ({ name, logo }) => (
  <div className="text-center">
    <div className="grid place-content-center rounded-lg bg-gray-100 p-3">
      <img
        src={logo}
        alt={name}
        className="h-8 w-8"
        onError={(e) => {
          (
            e.target as HTMLImageElement
          ).src = `https://placehold.co/32x32/EFEFEF/333333?text=${name.charAt(
            0
          )}`;
        }}
      />
    </div>
    <p className="mt-1 text-base font-medium text-gray-800">{name}</p>
  </div>
);

export const SideContent: FC = () => (
  <div className="grid grid-cols-1 gap-4 lg:gap-6">
    <div className="group rounded-2xl bg-white px-6 pt-0 shadow">
      <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold">
        Work Experience
      </h3>
      <div className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4">
        <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
          <WorkExperienceItem
            year="2021 - 2023"
            company="Google Inc."
            role="Senior Product Designer"
            logo="assets/img/google.svg"
            alt="Google"
          />
          <WorkExperienceItem
            year="2021 - 2023"
            company="Meta Inc."
            role="Product Designer"
            logo="assets/img/meta.svg"
            alt="Meta"
          />
          <WorkExperienceItem
            year="2018 - 2021"
            company="Adobe"
            role="Senior UI UX Designer"
            logo="assets/img/adobe.svg"
            alt="Adobe"
          />
          <WorkExperienceItem
            year="2018 - 2021"
            company="Adobe"
            role="Senior UI UX Designer"
            logo="assets/img/adobe.svg"
            alt="Adobe"
          />
        </div>
        <div
          aria-hidden="true"
          className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]"
        >
          <WorkExperienceItem
            year="2021 - 2023"
            company="Google Inc."
            role="Senior Product Designer"
            logo="assets/img/google.svg"
            alt="Google"
          />
          <WorkExperienceItem
            year="2021 - 2023"
            company="Meta Inc."
            role="Product Designer"
            logo="assets/img/meta.svg"
            alt="Meta"
          />
          <WorkExperienceItem
            year="2018 - 2021"
            company="Adobe"
            role="Senior UI UX Designer"
            logo="assets/img/adobe.svg"
            alt="Adobe"
          />
          <WorkExperienceItem
            year="2018 - 2021"
            company="Adobe"
            role="Senior UI UX Designer"
            logo="assets/img/adobe.svg"
            alt="Adobe"
          />
        </div>
      </div>
    </div>
    <div className="rounded-2xl bg-white p-6 shadow">
      <h3 className="text-2xl font-semibold">My Expert Area</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        <ExpertiseItem name="Figma" logo="assets/img/figma.svg" />
        <ExpertiseItem name="Notion" logo="assets/img/notion.svg" />
        <ExpertiseItem name="Mico" logo="assets/img/mico.svg" />
        <ExpertiseItem name="Framer" logo="assets/img/framer.svg" />
        <ExpertiseItem name="Webflow" logo="assets/img/webflow.svg" />
        <ExpertiseItem name="Zeplin" logo="assets/img/zeplin.svg" />
      </div>
    </div>
  </div>
);
