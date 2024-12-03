import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

const BackToTopButton = () => {
  const { y } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (y > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [y]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 p-1 bg-[#878787] text-white rounded-full shadow-lg transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"} hidden lg:block`}
      aria-label="Back to Top"
    >
      <ArrowUp/>
    </button>
  );
};

export default BackToTopButton;
