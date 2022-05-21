import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import WorksCard from "../components/WorksCard.js";
import AccentTitle from "../components/AccentTitle.js";
import Hero from "../components/Hero.js";
import ExperienceList from "../components/ExperienceList.js";
import Navbar from "../components/Navbar.js";

export default function Home() {
  return (
    <div className="transition duration-300">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&family=Oxygen&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        id="about"
        className="bg-primarywhite transition duration-500 dark:bg-primaryblack"
      >
        <Navbar />

        <div className="flex flex-col items-center p-5">
          <div className="mb-20 mt-24 items-center">
            <Hero />
          </div>
          <div className="mb-20 max-w-4xl">
            <AccentTitle title={"ABOUT"} />
            <p className="mb-4 font-Oxygen leading-7 text-primaryblack dark:text-primarywhite">
              Tobias is a UX Desginer and Developer based in Umeå with a passion
              for Developing webapps, games and desgins. His skillset is diverse
              and this grants him a unique edge in problemsolving of all kinds.
              He is currently studying for a masters degree in Interaction and
              Design at Umeå University. In his free time he enjoys spending
              time with friends, programming, playing video-games and listening
              to music. Below you can find his CV for further details about his
              career.
            </p>
            <div className="flex flex-row items-center justify-around">
              <button className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-accent dark:stroke-accentdark"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div className="mx-1 font-Oswald font-bold text-accent dark:text-accentdark">
                  CV
                </div>
              </button>
            </div>
          </div>
          <div id="experience" className="mb-20 w-full max-w-4xl">
            <AccentTitle title={"EXPERIENCE"} />
            <ExperienceList />
          </div>
          <div className="mb-40" id="works">
            <AccentTitle title={"WORKS"} />
            <div className="flex max-w-4xl flex-wrap items-center  justify-center">
              <WorksCard
                title="DEBRIS DANGER"
                content="A solo developed videogame MVP currently in the works"
                alt="Screenshot from the game Debris Danger"
                path="/Scene.png"
              />
              <WorksCard
                title="BLOGOO"
                content="A dynamic blog app with markdown support for blog posts"
                alt="Screenshot from the Blogoo app"
                path="/blogooscreenshot.png"
              />
              <WorksCard
                title="GAME BARGAIN"
                content="An API based webapp that fetches the lowest available price for PC Games"
                alt="Screenshot from the Game Bargain"
                path="/gamebargainsc.png"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex w-64 flex-col justify-center">
              <div>
                <div className="flex justify-between">
                  <Link href="https://www.linkedin.com/in/tobias-bergstr%C3%B6m-250220194/">
                    <a
                      className="opacity-100 transition duration-300 hover:opacity-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-accent dark:fill-accentdark"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25 0C38.7979 0 50 11.2021 50 25C50 38.7979 38.7979 50 25 50C11.2021 50 0 38.7979 0 25C0 11.2021 11.2021 0 25 0ZM17.1839 39.0499V19.5264H10.6933V39.0499H17.1839ZM40.5843 39.0499V27.854C40.5843 21.857 37.3824 19.0673 33.1127 19.0673C29.6698 19.0673 28.1276 20.9607 27.2642 22.2906V19.5264H20.7752C20.8612 21.3581 20.7752 39.0499 20.7752 39.0499H27.2641V28.1466C27.2641 27.563 27.3061 26.9796 27.478 26.5625C27.9463 25.397 29.0148 24.1896 30.8076 24.1896C33.1547 24.1896 34.095 25.9806 34.095 28.604V39.0499H40.5843ZM13.9824 10.1123C11.7617 10.1123 10.3108 11.5723 10.3108 13.4858C10.3108 15.3591 11.7176 16.8593 13.8965 16.8593H13.9384C16.2016 16.8593 17.6103 15.3591 17.6103 13.4858C17.5683 11.5723 16.2017 10.1123 13.9824 10.1123Z"
                          fill="#0F7FFF"
                        />
                      </svg>
                    </a>
                  </Link>

                  <Link href="mailto:tobiasbergstrom@outlook.com">
                    <a
                      className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent opacity-100 transition duration-300 hover:opacity-50 dark:bg-accentdark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 stroke-primarywhite dark:stroke-primaryblack"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </Link>

                  <Link href="mailto:tobiasbergstrom@outlook.com">
                    <a
                      className="opacity-100 transition duration-300 hover:opacity-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          className="fill-accent dark:fill-accentdark"
                          d="M25 0C38.7979 0 50 11.2021 50 25C50 38.7979 38.7979 50 25 50C11.2021 50 0 38.7979 0 25C0 11.2021 11.2021 0 25 0ZM25 9.375C20.7565 9.375 20.2244 9.39297 18.5578 9.46904C16.8947 9.54492 15.7589 9.80908 14.7649 10.1953C13.7375 10.5946 12.8661 11.1289 11.9975 11.9976C11.1288 12.8662 10.5945 13.7376 10.1952 14.765C9.80898 15.7589 9.54492 16.8947 9.46895 18.5578C9.39297 20.2244 9.375 20.7565 9.375 25C9.375 29.2435 9.39297 29.7756 9.46895 31.4422C9.54492 33.1053 9.80898 34.2411 10.1952 35.235C10.5945 36.2624 11.1288 37.1338 11.9975 38.0025C12.8661 38.8712 13.7375 39.4055 14.7649 39.8048C15.7589 40.1909 16.8947 40.4551 18.5578 40.531C20.2244 40.607 20.7565 40.625 25 40.625C29.2435 40.625 29.7756 40.607 31.4422 40.531C33.1053 40.4551 34.2411 40.1909 35.235 39.8048C36.2624 39.4055 37.1338 38.8712 38.0025 38.0025C38.8712 37.1338 39.4055 36.2624 39.8048 35.235C40.1909 34.2411 40.4551 33.1053 40.531 31.4422C40.607 29.7756 40.625 29.2435 40.625 25C40.625 20.7565 40.607 20.2244 40.531 18.5578C40.4551 16.8947 40.1909 15.7589 39.8048 14.765C39.4055 13.7376 38.8712 12.8662 38.0025 11.9976C37.1338 11.1289 36.2624 10.5946 35.235 10.1953C34.2411 9.80908 33.1053 9.54492 31.4422 9.46904C29.7756 9.39297 29.2435 9.375 25 9.375ZM25 12.1903C29.1721 12.1903 29.6662 12.2063 31.3139 12.2814C32.8373 12.351 33.6646 12.6055 34.2151 12.8194C34.9445 13.1028 35.465 13.4415 36.0117 13.9883C36.5586 14.535 36.8972 15.0556 37.1806 15.7849C37.3945 16.3354 37.6491 17.1627 37.7186 18.6861C37.7938 20.3338 37.8097 20.8279 37.8097 25C37.8097 29.1721 37.7938 29.6662 37.7186 31.3139C37.6491 32.8373 37.3945 33.6646 37.1806 34.2151C36.8972 34.9445 36.5586 35.465 36.0117 36.0117C35.465 36.5586 34.9445 36.8972 34.2151 37.1806C33.6646 37.3945 32.8373 37.6491 31.3139 37.7186C29.6665 37.7938 29.1724 37.8097 25 37.8097C20.8276 37.8097 20.3336 37.7938 18.6861 37.7186C17.1627 37.6491 16.3354 37.3945 15.7849 37.1806C15.0555 36.8972 14.535 36.5586 13.9882 36.0117C13.4414 35.465 13.1028 34.9445 12.8194 34.2151C12.6055 33.6646 12.3509 32.8373 12.2813 31.3139C12.2062 29.6662 12.1903 29.1721 12.1903 25C12.1903 20.8279 12.2062 20.3338 12.2813 18.6861C12.3509 17.1627 12.6055 16.3354 12.8194 15.7849C13.1028 15.0556 13.4414 14.535 13.9882 13.9883C14.535 13.4415 15.0555 13.1028 15.7849 12.8194C16.3354 12.6055 17.1627 12.351 18.6861 12.2814C20.3338 12.2063 20.8279 12.1903 25 12.1903ZM25 16.9764C20.5687 16.9764 16.9764 20.5687 16.9764 25C16.9764 29.4313 20.5687 33.0236 25 33.0236C29.4313 33.0236 33.0236 29.4313 33.0236 25C33.0236 20.5687 29.4313 16.9764 25 16.9764ZM25 30.2083C22.1235 30.2083 19.7917 27.8765 19.7917 25C19.7917 22.1235 22.1235 19.7917 25 19.7917C27.8765 19.7917 30.2083 22.1235 30.2083 25C30.2083 27.8765 27.8765 30.2083 25 30.2083ZM35.2157 16.6594C35.2157 17.6949 34.3762 18.5343 33.3406 18.5343C32.3052 18.5343 31.4657 17.6949 31.4657 16.6594C31.4657 15.6238 32.3052 14.7844 33.3406 14.7844C34.3762 14.7844 35.2157 15.6238 35.2157 16.6594Z"
                          fill="#0F7FFF"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className="flex justify-around">
                  <Link href="https://twitter.com/Mangamaskinen">
                    <a
                      className="opacity-100 transition duration-300 hover:opacity-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          className="fill-accent dark:fill-accentdark"
                          d="M25 0C38.7979 0 50 11.2021 50 25C50 38.7979 38.7979 50 25 50C11.2021 50 0 38.7979 0 25C0 11.2021 11.2021 0 25 0ZM20.5966 38.2967C31.6594 38.2967 37.7083 29.1297 37.7083 21.1851C37.7083 20.9231 37.7083 20.6612 37.6958 20.4117C38.8682 19.5637 39.8909 18.5035 40.7016 17.2937C39.629 17.7677 38.469 18.092 37.2468 18.2416C38.494 17.4933 39.4419 16.3209 39.8909 14.9116C38.731 15.5976 37.4464 16.0964 36.0744 16.3708C34.9769 15.1984 33.4179 14.4751 31.6843 14.4751C28.3667 14.4751 25.6728 17.169 25.6728 20.4866C25.6728 20.9605 25.7227 21.422 25.8349 21.8585C20.8336 21.6091 16.406 19.2145 13.4377 15.5726C12.9263 16.4581 12.627 17.4933 12.627 18.5908C12.627 20.6736 13.6871 22.5195 15.3085 23.5921C14.3231 23.5672 13.4002 23.2928 12.5896 22.8438V22.9187C12.5896 25.8371 14.6599 28.2566 17.4162 28.818C16.9174 28.9551 16.3811 29.03 15.8323 29.03C15.4456 29.03 15.0715 28.9926 14.6974 28.9177C15.4581 31.3123 17.6781 33.046 20.3098 33.0958C18.2519 34.7048 15.6577 35.6651 12.839 35.6651C12.3525 35.6651 11.8786 35.6401 11.4047 35.5778C14.0363 37.2989 17.2042 38.2967 20.5966 38.2967Z"
                          fill="#0F7FFF"
                        />
                      </svg>
                    </a>
                  </Link>

                  <Link href="https://github.com/Aneksuz">
                    <a
                      className="opacity-100 transition duration-300 hover:opacity-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-accent dark:fill-accentdark"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.9984 0C11.1934 0 0 11.4761 0 25.6328C0 36.9567 7.16116 46.5644 17.098 49.955C18.3483 50.1889 18.7422 49.4294 18.7422 48.75C18.7422 48.1411 18.7547 46.4394 18.7422 44.3003C11.7889 45.8497 10.3479 40.9241 10.3479 40.9241C9.21168 37.963 7.57377 37.1746 7.57377 37.1746C5.30445 35.5851 7.74412 35.6155 7.74412 35.6155C10.2526 35.7966 11.5748 38.2578 11.5748 38.2578C13.805 42.1723 17.4247 41.0411 18.8485 40.3873C19.0766 38.7305 19.7237 37.6008 20.4379 36.9599C14.8865 36.3125 9.0507 34.1141 9.0507 24.2917C9.0507 21.4924 10.0244 19.2058 11.6232 17.4144C11.3653 16.767 10.5058 14.16 11.8686 10.63C11.8686 10.63 13.9676 9.941 18.7422 13.2595C20.7364 12.6906 22.876 12.407 25.0016 12.3974C27.1255 12.407 29.2636 12.6906 31.2609 13.2595C36.0356 9.9426 38.1314 10.63 38.1314 10.63C39.4942 14.16 38.6362 16.767 38.3799 17.4144C39.9787 19.2058 40.9493 21.4924 40.9493 24.2917C40.9493 34.1397 35.1041 36.3061 29.5339 36.9391C30.431 37.7322 31.2453 39.2705 31.2453 41.6612C31.2453 44.8659 31.2453 47.9136 31.2453 48.7564C31.2453 49.4422 31.6485 50.2001 32.9176 49.9518C42.8451 46.5564 50 36.9535 50 25.6328C50 11.4761 38.8066 0 24.9984 0Z"
                          fill="#0F7FFF"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
