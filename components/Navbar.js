import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="bg-primaryblack bg-opacity-75 backdrop-blur-sm p-5 fixed w-full max-w-3xl">
        <div>
          <div className="flex justify-between">
            <div>
              <Image src="/Logo.svg" width="50" height="50" />
            </div>
            <div className="flex">
              <div className="mr-1">
                <Image src="/MODE-BUTTON.svg" width="50" height="50" />
              </div>

              <Image src="/BURGER-BUTTON.svg" width="50" height="50" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
