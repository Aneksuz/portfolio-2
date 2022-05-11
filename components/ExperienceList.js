export default function ExperienceList() {
  return (
    <div className="relative">
      <div className="flex flex-row justify-between text-primaryblack dark:text-primarywhite font-Oswald font-normal">
        <div>
          <div>ACTIVE</div>
          <div>OLD 2</div>
          <div>OLD 1</div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-[100%] stroke-accent dark:stroke-accentdark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 12H6"
              width="100"
            />
          </svg>
          <div>LINE 2</div>
          <div>LINE 1</div>
        </div>
        <div className="text-center">
          <div className=" border-accent dark:border-r-accentdark border-2 rounded-full px-2 text-accent dark:text-accentdark">
            NOW
          </div>
          <div>YEAR 2</div>
          <div>YEAR 1</div>
        </div>
      </div>
    </div>
  );
}
