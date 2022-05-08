import Image from "next/image";

export default function WorksCard({ title, content, alt, path }) {
  return (
    <div className="justify-center flex-col text-center my-5">
      <Image
        className="rounded-[40px]"
        alt={alt}
        src={path}
        width={350}
        height={184}
      />
      <div className="font-bold text-accent font-Oswald">{title}</div>
      <div className="font-Oxygen text-primarywhite">{content}</div>
    </div>
  );
}
