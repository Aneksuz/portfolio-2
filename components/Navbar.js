import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center">
      <nav className="fixed z-10 w-full max-w-[950px] bg-primarywhite/[0.75] p-5 backdrop-blur-sm transition duration-500 dark:bg-primaryblack/[0.75]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex flex-row items-center">
              <div>
                <button className="mr-4 flex h-[50px] w-[50px]  items-center justify-center rounded-full border-2 border-accent "></button>
              </div>

              <a
                href="#about"
                className="mx-2 hidden font-Oswald text-[1.25rem] font-bold text-primaryblack opacity-100 transition duration-300 hover:opacity-50 dark:text-primarywhite md:inline"
              >
                ABOUT
              </a>
              <a
                href="#experience"
                className="mx-2 hidden font-Oswald text-[1.25rem] font-bold text-primaryblack opacity-100 transition duration-300 hover:opacity-50 dark:text-primarywhite md:inline"
              >
                EXPERIENCE
              </a>
              <a
                href="#works"
                className="mx-2 hidden font-Oswald text-[1.25rem] font-bold text-primaryblack opacity-100 transition duration-300 hover:opacity-50 dark:text-primarywhite md:inline"
              >
                WORKS
              </a>
            </div>
            <div className="flex">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="mr-1 hidden h-[50px]  w-[50px] items-center justify-center rounded-full border-2 border-primarywhite stroke-primarywhite opacity-100 opacity-100 transition duration-300 hover:opacity-50 hover:opacity-50 dark:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>

              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="mr-1 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-primaryblack stroke-primaryblack opacity-100 transition duration-300 hover:opacity-50 dark:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>

              <button
                onClick={() => setOpen(!open)}
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full  border-2 border-primaryblack stroke-primaryblack opacity-100 transition duration-300 hover:opacity-50 dark:border-primarywhite dark:stroke-primarywhite md:hidden"
              >
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            {open && (
              <div className="flex flex-row justify-end md:hidden">
                <div className="flex flex-col">
                  <Link href="#about">
                    <a className="mx-2 my-1 text-right font-Oswald text-[1.25rem] font-bold text-primaryblack opacity-100 transition duration-300 hover:opacity-50 dark:text-primarywhite">
                      ABOUT
                    </a>
                  </Link>

                  <Link href="#experience">
                    <a className="mx-2 my-1 text-right font-Oswald text-[1.25rem] font-bold text-primaryblack opacity-100 transition duration-300 hover:opacity-50 dark:text-primarywhite">
                      EXPERIENCE
                    </a>
                  </Link>

                  <Link href="#works">
                    <a className="mx-2 my-1 text-right font-Oswald text-[1.25rem] font-bold text-primaryblack opacity-100 transition duration-300 hover:opacity-50 dark:text-primarywhite">
                      WORKS
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
