import SlideUp from "./SlideUp";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center py-12 md:p-[5%] lg:p-[7%]">
      <div className="container flex flex-col items-center">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6  leading-[28px] mb-10 md:mb-12 lg:mb-0">
            <SlideUp>
              <h5 className="heading-5 text-extra-dark-gray mb-5 font-light">
                Fresh and modern work was just the ticket for Concierge Insurance Solutions.
                The company’s spirit of innovation inspired designs that could
                break traditional rules and erupt excitement within the viewer.
              </h5>
              <div className="text-medium-gray sm:text-base font-light">
                – Jill St.Clair / Creative Director
              </div>
            </SlideUp>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:ml-[20%]">
            <SlideUp>
              <p>
                Individual design pieces include: full scale branding suite,
                creatively shaped business cards, comprehensive stationary set,
                branding asset collection, brand manual, and the design and
                development of an responsive, informational website.
              </p>
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
