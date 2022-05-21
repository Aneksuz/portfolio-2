export default function AccentTitle({ title }) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 110 110"
        className="absolute left-1 -top-1/4 h-8 w-8 -translate-x-1/2 text-accent dark:text-accentdark"
      >
        <circle
          stroke="currentColor"
          strokeWidth="15"
          cx="60"
          cy="60"
          r="50"
          fillOpacity={0}
        />
      </svg>
      <div className=" isolate bg-primarywhite p-0 font-Oswald text-3xl font-bold text-primaryblack transition duration-500 dark:bg-primaryblack dark:text-primarywhite">
        {title}
      </div>
    </div>
  );
}
