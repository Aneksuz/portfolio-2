import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative ">
      <div className="flex  w-full max-w-3xl justify-center">
        <svg
          viewBox="0 0 110 110"
          className="-top-5/4 absolute left-8 h-40 w-40 -translate-x-1/4 text-accent dark:text-accentdark"
        >
          <circle
            stroke="currentColor"
            strokeWidth="4"
            cx="55"
            cy="55"
            r="50"
            fillOpacity={0}
          />
        </svg>
        <Image src="/Tobias-Cutout 1.png" width={142} height={151} />
        <div className="flex flex-col justify-end text-primaryblack dark:text-primarywhite">
          <div className="ml-4 font-Oswald text-3xl font-bold">
            <div className="">TOBIAS</div>
            <div className="ml-herospc -mt-2">BERGSTRÖM</div>
          </div>
          <div className=" font-Oxygen">Ux Designer | Developer</div>
        </div>
      </div>
    </div>
  );
}
