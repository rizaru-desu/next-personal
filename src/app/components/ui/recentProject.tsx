import React, { FC } from "react";

const ProjectItem: FC<{ image: string; tag: string }> = ({ image, tag }) => (
  <div className="group relative overflow-hidden rounded-lg bg-gray-100 p-4 pb-0 md:p-6 md:pb-0">
    <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
      <img
        src={image}
        alt={tag}
        className="h-full w-full rounded-t-lg object-cover object-top transition"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://placehold.co/500x375/EFEFEF/333333?text=Project";
        }}
      />
      <a
        href={image}
        className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-blue-500 shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          <path d="M10 4.167v11.666M4.167 10h11.666" />
        </svg>
      </a>
    </div>
    <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
      <span className="rounded bg-white px-2 py-1 text-xs font-medium text-blue-500 shadow">
        {tag}
      </span>
    </div>
  </div>
);

export const RecentProjects: FC = () => (
  <div className="rounded-2xl bg-white p-6 shadow">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-2xl font-semibold">Recent Projects</h3>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-2 border-b border-b-transparent text-center text-base text-blue-500 transition hover:border-b-blue-500"
      >
        <span>All Projects</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          className="h-5 w-5"
        >
          <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
        </svg>
      </a>
    </div>
    <div className="mt-6 space-y-6">
      <ProjectItem image="assets/img/project-1.png" tag="Product Design" />
      <ProjectItem image="assets/img/project-2.png" tag="Product Design" />
    </div>
  </div>
);
