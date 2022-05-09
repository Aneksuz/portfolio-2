import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <div className="flex flex-row">
        <svg
          viewBox="0 0 110 110"
          class="absolute left-8 -top-5/4 -translate-x-1/4 h-40 w-40 text-accent absolute"
        >
          <circle
            stroke="currentColor"
            stroke-width="4"
            cx="55"
            cy="55"
            r="50"
            fill-opacity={0}
          />
        </svg>
        <Image src="/Tobias-Cutout 1.png" width={142} height={151} />
        <div className="flex flex-col justify-end text-primarywhite">
          <div className="ml-4 font-Oswald text-3xl font-bold">
            <div className="">TOBIAS</div>
            <div className="">BERGSTRÖM</div>
          </div>
          <div className=" font-Oxygen">UX DESIGNER | DEVELOPER</div>
        </div>
      </div>
    </div>
  );
}
