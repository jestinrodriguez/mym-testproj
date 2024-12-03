import SlideUp from "./SlideUp";

const ThreeImage = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center px-4 py-12 sm:p-[5%] sm:py-[7%] bg-[#f2f1ee]">
      <div className="flex-1 sm:w-1/3 px-3.5 mb-8 sm:mb-0">
        <SlideUp startY={200} delay={0.3}>
          <div className="relative w-full sm:aspect-w-16 sm:aspect-h-12">
            <img
              src="/img/three-image-1.jpg"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
        </SlideUp>
      </div>
      <div className="flex-1 sm:w-1/3 px-3.5 mb-8 sm:mb-0">
        <SlideUp startY={200} delay={0.6}>
          <div className="relative w-full sm:aspect-w-16 sm:aspect-h-12">
            <img
              src="/img/three-image-2.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SlideUp>
      </div>
      <div className="flex-1 sm:w-1/3 px-3.5 mb-8 sm:mb-0">
        <SlideUp startY={200} delay={0.9}>
          <div className="relative w-full sm:aspect-w-16 sm:aspect-h-12">
            <img
              src="/img/three-image-3.jpg"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </SlideUp>
      </div>
    </div>
  );
};

export default ThreeImage;
