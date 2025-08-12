import React, { useState, FC, ReactNode } from "react";

// Mendefinisikan tipe untuk props NavItem
interface NavItemProps {
  href: string;
  children: ReactNode;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Komponen untuk setiap item navigasi dengan tipe props
const NavItem: FC<NavItemProps> = ({ href, children, isActive, onClick }) => (
  <li className={isActive ? "group/menu-item active" : "group/menu-item"}>
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 ${
        isActive ? "bg-gray-100 text-gray-900" : ""
      }`}
    >
      {children}
    </a>
  </li>
);

// Komponen Navbar Utama
export const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>("Home");

  // Tipe untuk setiap link navigasi
  interface NavLink {
    name: string;
    href: string;
    paths: string[];
  }

  const navLinks: NavLink[] = [
    {
      name: "Home",
      href: "#",
      paths: [
        "M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z",
        "M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0",
      ],
    },
    {
      name: "About",
      href: "#",
      paths: [
        "M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
        "M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z",
        "M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041",
      ],
    },
    {
      name: "Services",
      href: "#",
      paths: [
        "M10.5 3.333 3.833 6.667 10.5 10l6.667-3.333L10.5 3.333ZM3.833 10l6.667 3.333L17.167 10M3.833 13.333l6.667 3.334 6.667-3.334",
      ],
    },
    {
      name: "Works",
      href: "#",
      paths: [
        "m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478",
      ],
    },
    {
      name: "Blog",
      href: "#",
      paths: [
        "m14.667 9.167 1.25-1.25a2.357 2.357 0 1 0-3.333-3.334l-8.75 8.75v3.334h3.333L8.834 15m2.916-9.583 3.333 3.333m.417 9.583 2.792-2.736a1.785 1.785 0 0 0 .004-2.56 1.87 1.87 0 0 0-2.608-.005l-.186.184-.186-.184a1.869 1.869 0 0 0-2.607-.005 1.787 1.787 0 0 0-.005 2.56l2.796 2.746Z",
      ],
    },
    {
      name: "Contact",
      href: "#",
      paths: [
        "M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z",
      ],
    },
  ];

  // Fungsi untuk me-render link navigasi dengan SVG inline
  const renderNavLinks = () =>
    navLinks.map((link) => (
      <NavItem
        key={link.name}
        href={link.href}
        isActive={activePage === link.name}
        onClick={(e) => {
          e.preventDefault(); // Mencegah reload halaman untuk link '#'
          setActivePage(link.name);
          // Jika di mobile, tutup menu setelah item diklik
          if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          className={`h-6 w-6 transition group-hover:text-gray-900 ${
            activePage === link.name ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {link.paths.map((path, index) => (
            <path key={index} d={path} />
          ))}
        </svg>
        <span>{link.name}</span>
      </NavItem>
    ));

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow">
        {/* Logo */}
        <a
          href="/"
          className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              fill="currentColor"
              d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
            />
          </svg>
          <span>
            Rizaru<span className="text-blue-500">Desu</span>
          </span>
        </a>

        {/* Navigation menu for Desktop */}
        <ul className="hidden flex-1 flex-wrap items-center justify-center lg:flex">
          {renderNavLinks()}
        </ul>

        {/* Header buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-blue-500"
          >
            <span>Let's Talk</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
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

        {/* Navigation toggler for Mobile */}
        <button
          type="button"
          className="text-gray-800 transition lg:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="h-9 w-9 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed bottom-0 start-0 top-0 z-[60] h-full w-64 transform bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto lg:hidden`}
      >
        <div className="flex h-full flex-col justify-between gap-5 p-5">
          <div>
            {/* Mobile Logo */}
            <a
              href="/"
              className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  fill="currentColor"
                  d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
                />
              </svg>
              <span>
                Bento<span className="text-blue-500">Folio</span>
              </span>
            </a>
          </div>

          <ul className="mt-4 flex flex-1 flex-col gap-2">
            {renderNavLinks()}
          </ul>

          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800 px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-blue-500"
            >
              <span>Let's Talk</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
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
        </div>
      </div>
    </header>
  );
};
