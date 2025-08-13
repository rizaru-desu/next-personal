import React, { FC } from "react";

export const Contact: FC = () => (
  <div className="rounded-2xl bg-white p-6 shadow">
    <div className="overflow-hidden text-nowrap rounded-lg bg-gray-100 p-3 text-lg font-medium text-gray-500">
      <p className="animate-scrollX inline-block whitespace-nowrap">
        Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire
        🚀 Crafting Digital Experiences 🎨
      </p>
    </div>
    <h2 className="mt-4 text-[40px] font-semibold leading-snug text-gray-800">
      Let's👋 <br />
      Work Together
    </h2>
    <a
      href="#"
      className="mt-6 inline-flex items-center justify-center gap-2 border-b border-b-transparent text-center text-base text-blue-500 transition hover:border-b-blue-500"
    >
      <span>Let's Talk</span>
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
        <path d="M17.5 11.667v-5h-5" />
        <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
      </svg>
    </a>
  </div>
);
