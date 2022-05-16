import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center">
      <nav className="bg-primarywhite/[0.75] backdrop-blur-sm p-5 fixed w-full max-w-[950px] dark:bg-primaryblack/[0.75] z-10">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-row items-center">
              <div>
                <button className="w-[50px] h-[50px] mr-4 border-accent  border-2 flex justify-center items-center rounded-full "></button>
              </div>

              <a
                href="#about"
                className="mx-2 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite hidden md:inline opacity-100 hover:opacity-50 transition duration-300"
              >
                ABOUT
              </a>
              <a
                href="#experience"
                className="mx-2 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite hidden md:inline opacity-100 hover:opacity-50 transition duration-300"
              >
                EXPERIENCE
              </a>
              <a
                href="#works"
                className="mx-2 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite hidden md:inline opacity-100 hover:opacity-50 transition duration-300"
              >
                WORKS
              </a>
            </div>
            <div className="flex">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="w-[50px] h-[50px] mr-1  border-primarywhite stroke-primarywhite opacity-100 hover:opacity-50 border-2 justify-center items-center rounded-full hidden dark:flex opacity-100 hover:opacity-50 transition duration-300"
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
                className="w-[50px] h-[50px] mr-1 border-primaryblack stroke-primaryblack border-2 flex justify-center items-center rounded-full dark:hidden opacity-100 hover:opacity-50 transition duration-300"
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
                className="w-[50px] h-[50px] border-primaryblack stroke-primaryblack dark:border-primarywhite dark:stroke-primarywhite  border-2 flex justify-center items-center rounded-full md:hidden opacity-100 hover:opacity-50 transition duration-300"
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
                    <a className="mx-2 my-1 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite text-right opacity-100 hover:opacity-50 transition duration-300">
                      ABOUT
                    </a>
                  </Link>

                  <Link href="#experience">
                    <a className="mx-2 my-1 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite text-right opacity-100 hover:opacity-50 transition duration-300">
                      EXPERIENCE
                    </a>
                  </Link>

                  <Link href="#works">
                    <a className="mx-2 my-1 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite text-right opacity-100 hover:opacity-50 transition duration-300">
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
