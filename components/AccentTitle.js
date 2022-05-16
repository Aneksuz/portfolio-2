export default function AccentTitle({ title }) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 110 110"
        className="absolute left-1 -top-1/4 -translate-x-1/2 h-8 w-8 text-accent dark:text-accentdark"
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
      <div className=" text-3xl font-bold font-Oswald text-primaryblack dark:text-primarywhite isolate bg-primarywhite dark:bg-primaryblack p-0">
        {title}
      </div>
    </div>
  );
}
