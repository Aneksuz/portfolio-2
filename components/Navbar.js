export default function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="bg-primarywhite/[0.75] backdrop-blur-sm p-5 fixed w-full max-w-3xl dark:bg-primaryblack/[0.75]">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div>
                <button className="w-[50px] h-[50px] mr-4 border-accent  border-2 flex justify-center items-center rounded-full "></button>
              </div>

              <a className="mx-2 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite hidden md:inline">
                ABOUT
              </a>
              <a className="mx-2 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite hidden md:inline">
                EXPERIENCE
              </a>
              <a className="mx-2 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite hidden md:inline">
                WORKS
              </a>
            </div>
            <div className="flex">
              <button className="w-[50px] h-[50px] mr-1  border-primarywhite stroke-primarywhite border-2 justify-center items-center rounded-full hidden dark:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>

              <button className="w-[50px] h-[50px] mr-1 border-primaryblack stroke-primaryblack border-2 flex justify-center items-center rounded-full dark:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>

              <button className="w-[50px] h-[50px] border-primaryblack stroke-primaryblack dark:border-primarywhite dark:stroke-primarywhite border-2 flex justify-center items-center rounded-full md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-end">
              <div className="flex flex-col">
                <a className="mx-2 my-1 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite text-right">
                  ABOUT
                </a>
                <a className="mx-2 my-1 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite text-right">
                  EXPERIENCE
                </a>
                <a className="mx-2 my-1 font-bold font-Oswald text-[1.25rem] text-primaryblack dark:text-primarywhite text-right">
                  WORKS
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
