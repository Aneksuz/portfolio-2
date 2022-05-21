import ExperienceItem from "./ExperienceItem";

export default function ExperienceList() {
  return (
    <div className="relative">
      <div className="flex w-full max-w-4xl flex-shrink-0 flex-col text-center font-Oswald font-normal text-primaryblack dark:text-primarywhite">
        <ExperienceItem
          title={"Student, Umeå University"}
          year={""}
          styled={true}
        />
        <ExperienceItem
          title={"Buddy Leader, Umeå University"}
          year={"2021"}
          styled={false}
        />
        <ExperienceItem
          title={"Customer Service, Avero"}
          year={"2019"}
          styled={false}
        />
        <ExperienceItem
          title={"Customer Service, Komplett"}
          year={"2018"}
          styled={false}
        />
        <ExperienceItem
          title={"Customer Service, SYKES Sweden"}
          year={"2018"}
          styled={false}
        />
        <ExperienceItem title={"Intern, AFRY"} year={"2017"} styled={false} />
      </div>
    </div>
  );
}
