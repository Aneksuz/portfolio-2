export default function ExperienceItem({ title, year, styled }) {
  if (styled) {
    return (
      <div className="relative">
        <div className="flex flex-row justify-between">
          <div>{title}</div>
          <div class="block h-px w-full flex-1 bg-accent/50 dark:bg-accentdark/50 mx-4 self-center"></div>
          <div className=" border-accent dark:border-r-accentdark border-2 rounded-full px-2 text-accent dark:text-accentdark">
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
          <div class="block h-px w-full flex-1 bg-primaryblack/50 dark:bg-primarywhite/50 mx-4 self-center"></div>
          <div>{year}</div>
        </div>
      </div>
    );
  }
}
