"use client";

import { Contact } from "./components/ui/contact";
import { Footer } from "./components/ui/footer";
import { Intro } from "./components/ui/intro";
import { Navbar } from "./components/ui/navbar";
import { RecentProjects } from "./components/ui/recentProject";
import { Services } from "./components/ui/service";
import { SideContent } from "./components/ui/slideContent";

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes scrollY {
          from { transform: translateY(0); }
          to { transform: translateY(-100%); }
        }
        .animate-scrollY {
          animation: scrollY 20s linear infinite;
        }
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 100s linear infinite;
        }
        @keyframes scrollX {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-scrollX {
          animation: scrollX 25s linear infinite;
        }
      `}</style>
      <div className="relative h-screen overflow-y-auto overflow-x-hidden bg-gray-50">
        <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
          <Navbar />

          <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            <Intro />
            <SideContent />
            <RecentProjects />
            <Services />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
