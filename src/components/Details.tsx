import FadeIn from "./FadeIn";
import SlideUp from "./SlideUp";

const Details = () => {
  return (
    <div className="text-white flex flex-col items-center pt-12 pb-5 md:p-[7%] lg:p-[6%] xl:p-[7%] xl:pb-[4%] bg-[#f2f1ee]">
      <div className="container flex flex-col items-center">
        <div className="flex flex-col items-center">
          <FadeIn>
            <img src="/img/concierge-logo-purple.png" className="mb-7 lg:mb-10 w-44 md:w-56 lg:w-72" />
          </FadeIn>
        </div>

        <div className="flex flex-col items-center">
          <FadeIn>
            <h6 className="heading-6 text-extra-dark-gray font-light text-center mb-6 md:mb-0 md:w-[80%] lg:w-[65%] mx-auto">
              Concierge Insurance Solutions’ bold site design was created as a testament
              to their team’s groundbreaking work in the real estate industry.
              This responsive design engages users through the use of sleek
              colors, interesting textures, and attention-grabbing typography.
            </h6>
          </FadeIn>
        </div>
        <div className="flex flex-col items-center mt-14">
          <SlideUp startY={200} delay={0.2}>
            <img src="/img/concierge.png" className="object-cover" />
          </SlideUp>
        </div>
      </div>
    </div>
  );
};

export default Details;
