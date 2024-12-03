import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative h-[600px] sm:min-h-screen lg:bg-fixed bg-cover bg-center lg:bg-left"
      style={{ backgroundImage: "url('/img/hero-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex justify-center max-w-[600px]">
          <img
            src="/img/concierge-logo-white.png"
            alt="Hero Logo"
            className="object-cover max-w-[65%]"
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#info-section">
          <div className="bg-white p-3 rounded-full">
            <ArrowDown stroke="#b5a794" strokeWidth={1.5} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
