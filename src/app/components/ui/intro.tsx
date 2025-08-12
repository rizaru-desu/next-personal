import React, { FC } from "react";

export const Intro: FC = () => (
  <div className="rounded-2xl bg-white p-6 shadow">
    <div className="aspect-6/4 overflow-hidden rounded-lg bg-gray-100 pt-4 text-center">
      {/* Menggunakan path gambar asli, meskipun mungkin tidak akan tampil di lingkungan ini */}
      <img
        src="assets/img/profile.png"
        alt="Cris Rayaan"
        className="inline-block h-full w-full scale-110 object-contain object-bottom"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://placehold.co/600x400/EFEFEF/333333?text=Profile+Image";
        }}
      />
    </div>
    <div className="mt-6">
      <h3 className="text-2xl font-semibold text-gray-800">
        Rizal Achmad .S 👋
      </h3>
      <p className="mt-2 text-gray-500">
        A Passionate
        <span className="font-semibold text-gray-900">
          {" "}
          Full Stack Developer{" "}
        </span>
        🖥️ &
        <span className="font-semibold text-gray-900"> Mobile Developer </span>
        having
        <span className="font-semibold text-gray-900"> 13 years </span>
        of Experiences over 1 Country Worldwide.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href="#"
          className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-500 px-6 py-4 font-medium text-white transition hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="h-6 w-6"
          >
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
          </svg>
          <span>Book A Call</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-transparent px-6 py-4 font-medium text-gray-800 transition hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="h-6 w-6"
          >
            <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
          </svg>
          <span>Copy Email</span>
        </button>
      </div>
      
  </div>
);
