"use client";

import { Intro } from "./components/ui/intro";
import { Navbar } from "./components/ui/navbar";

export default function Home() {
  return (
    <div className="relative h-screen overflow-y-auto overflow-x-hidden bg-gray-50">
      <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
        <Navbar />

        <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          <Intro />
        </main>
      </div>
    </div>
  );
}
