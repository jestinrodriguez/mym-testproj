import FadeIn from "./FadeIn"

const Info = () => {
  return (
    <div id="info-section" className="text-white flex flex-col items-center py-12 md:p-[8%] xl:p-[7%] bg-[#111643]">
        <div className="container">
            <div className="text-center mb-[30px] md:mb-[50px] lg:mb-[100px] font-light">
                <h1 className="mb-4 text-4xl md:leading-[42px] lg:leading-[58px] xl:leading-[68px]">
                    Concierge Insurance Solutions Branding and Online Presence
                </h1>
                <p className="leading-7 underline underline-offset-[5px]">
                    Branding Design + Web Design + Print Collateral Design + Content Development
                </p>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 lg:ml-[20%] leading-[28px] mb-10 md:mb-12 lg:mb-0">
                    <FadeIn>
                        <p className="sm:leading-7">
                            Concierge Insurance Solutions is all about forging connections and needed a brand to live up to their notable work in real estate. Through the use of vibrant colors, dynamic patterns, and a modern design aesthetic, Make Your Mark was able to create a memorable brand suitable for this incredible company.
                        </p>
                    </FadeIn>
                </div>
                <div className="col-span-12 lg:col-span-5 lg:ml-[25%]">
                    <FadeIn>
                        <div className="font-light">
                            <p className="mb-[5px]"><span className="w-[30%] inline-block font-medium sm:font-bold">Client: </span>Concierge Insurance Solutions</p>
                        </div>
                        <hr/>
                        <div className="mt-2 font-light">
                            <p className="mb-[5px]"><span className="w-[30%] inline-block font-medium sm:font-bold">Industry: </span>Insurance</p>
                        </div>
                        <hr/>
                        <div className="mt-2 font-light">
                            <span className="w-[30%] inline-block font-medium sm:font-bold">Services: </span>
                            Personal Lines Insurance
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info