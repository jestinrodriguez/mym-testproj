const HoverImage = ({ src, alt, title, description }) => {
  return (
    <div className="relative inline-block w-full h-full group overflow-hidden">
      <div className="transition-all duration-300 ease-in-out transform group-hover:-translate-y-20">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-opacity-50 text-black p-4 opacity-0 transform translate-y-full transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 text-center">
        <p className="alt-font uppercase font-semibold">{title}</p>
        <p className="text-medium-gray uppercase sm:text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default HoverImage;
