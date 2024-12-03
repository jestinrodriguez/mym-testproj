import { ArrowLeft } from "lucide-react";
import FadeIn from "./FadeIn";

const PreviousProject = () => {
  return (
    <FadeIn>
      <div className="flex items-center w-full relative border-y py-2 sm:py-7 px-[15px] lg:px-[30px]">
        <div className="flex items-center pl-8">
          <div className="flex flex-col">
            <div className="hidden md:block text-[15px] text-medium-gray">PREVIOUS PROJECT</div>
            <a href="https://www.makeyourmarkdigital.com/portfolio/metrocity/" className="flex items-center relative md:text-[16px]">
              <ArrowLeft className="absolute top-0 left-[-35px] md:top-[-50%] md:left-[-40px]" />
              <div>MetroCity</div>
            </a>
          </div>
        </div>
        <div className="absolute left-0 right-0 flex justify-center">
          <a href="https://www.makeyourmarkdigital.com/work/">
            <div className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="16px"
                height="16px"
                viewBox="0 0 17 17"
                version="1.1"
              >
                <path
                  d="M0 0h7v7h-7v-7zM9 0v7h7v-7h-7zM0 16h7v-7h-7v7zM9 16h7v-7h-7v7z"
                  fill="#6f6f6f"
                  className="group-hover:fill-red"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </FadeIn>
  );
};

export default PreviousProject;
