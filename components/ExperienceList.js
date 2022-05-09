export default function ExperienceList() {
  return (
    <div className="relative">
      <div className="flex flex-row justify-between text-primarywhite font-Oswald font-normal">
        <div>
          <div>ACTIVE</div>
          <div>OLD 2</div>
          <div>OLD 1</div>
        </div>
        <div className="w-full flex flex-col justify-center">
          <div>
            <svg
              viewBox="0 0 1 1"
              width="100%"
              height="24"
              className=" fill-accent"
            >
              <rect width="90%" height="1px" />
            </svg>
          </div>
          <div>LINE 2</div>
          <div>LINE 1</div>
        </div>
        <div className="text-center">
          <div className=" border-accent border-2 rounded-full px-2 text-accent">
            NOW
          </div>
          <div>YEAR 2</div>
          <div>YEAR 1</div>
        </div>
      </div>
    </div>
  );
}
