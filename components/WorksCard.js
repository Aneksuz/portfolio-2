import Image from "next/image";

export default function WorksCard({ title, content, alt, path }) {
  return (
    <div className="relative m-2">
      <div className="group justify-center flex-col text-center w-[422px]">
        <Image
          className="rounded-[40px]"
          alt={alt}
          src={path}
          width={350}
          height={184}
        />
        <div className="opacity-0 scale-50 -translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out">
          <div className="font-bold text-accent dark:text-accentdark font-Oswald">
            {title}
          </div>
          <div className="font-Oxygen text-primaryblack dark:text-primarywhite">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
