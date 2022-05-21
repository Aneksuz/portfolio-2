export default function ExperienceItem({ title, year, styled }) {
  if (styled) {
    return (
      <div className="relative">
        <div className="flex flex-row justify-between">
          <div>{title}</div>
          <div className="mx-4 block h-px w-full flex-1 self-center bg-accent/50 dark:bg-accentdark/50"></div>
          <div className=" rounded-full border-2 border-accent px-2 text-accent dark:border-r-accentdark dark:text-accentdark">
            NOW
          </div>
        </div>
      </div>
    );
  }

  if (styled !== true) {
    return (
      <div className="relative">
        <div className="flex flex-row justify-between">
          <div>{title}</div>
          <div className="mx-4 block h-px w-full flex-1 self-center bg-primaryblack/50 transition duration-500 dark:bg-primarywhite/50"></div>
          <div>{year}</div>
        </div>
      </div>
    );
  }
}
