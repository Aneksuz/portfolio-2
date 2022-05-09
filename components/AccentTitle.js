export default function AccentTitle({ title }) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 110 110"
        class="absolute left-1 -top-1/4 -translate-x-1/2 h-8 w-8 text-accent absolute"
      >
        <circle
          stroke="currentColor"
          stroke-width="15"
          cx="60"
          cy="60"
          r="50"
          fill-opacity={0}
        />
      </svg>
      <div className=" text-3xl font-bold font-Oswald text-primarywhite isolate bg-primaryblack p-0">
        {title}
      </div>
    </div>
  );
}
