import ExperienceItem from "./ExperienceItem";

export default function ExperienceList() {
  return (
    <div className="relative">
      <div className="flex flex-col flex-shrink-0 text-primaryblack dark:text-primarywhite font-Oswald font-normal text-center w-full max-w-4xl">
        <ExperienceItem title={"Umeå University"} year={""} styled={true} />
        <ExperienceItem
          title={"Avero, Customer Service"}
          year={"2019"}
          styled={false}
        />
        <ExperienceItem
          title={"Komplett, Customer Service"}
          year={"2018"}
          styled={false}
        />
      </div>
    </div>
  );
}
