import { useEffect, useRef, useState } from "react";
import { Facebook, Linkedin, Twitter } from "react-bootstrap-icons";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { Minus, Plus } from "lucide-react";

const Navbar2 = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isMenuOpen ? 0 : isNavVisible ? 0 : -100,
      opacity: isMenuOpen ? 1 : isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible, isMenuOpen]);

  const ROOT_URL = "https://www.makeyourmarkdigital.com";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/marketing-agency/" },
    { name: "Services", path: "/services/" },
    { name: "Work", path: "/work/" },
    { name: "Blog", path: "/blog/" },
    { name: "Careers", path: "/careers/" },
    { name: "Connect", path: "/connect/" },
  ];

  const services = [
    { name: "Digital Strategy", path: "/digital-strategy/" },
    { name: "Design & Development", path: "/design-development-services/" },
    { name: "Google Ads", path: "/google-adwords-and-bing-advertising/" },
    { name: "Social Media Marketing Agency Philadelphia", path: "/social-media-marketing-agency-philadelphia/" },
    { name: "Linkedin Lead Generation", path: "/linkedin-lead-acquisition/" },
    { name: "Ecommerce Marketing", path: "/ecommerce-marketing/" },
    { name: "Search Engine Optimization (SEO)", path: "/search-engine-optimization-seo/" },
    { name: "Inbound Marketing", path: "/inbound-marketing/" },
    { name: "Account-Based Marketing", path: "/account-based-marketing/" },
  ];

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 z-50 h-24 border-none transition-all duration-700
         px-4 lg:px-[3%] py-8 flex justify-between items-center bg-white
    "
    >
      <nav className="flex items-center justify-between w-full h-full px-4">
        <a className="text-3xl font-bold leading-none py-5" href="https://www.makeyourmarkdigital.com/">
          <img src="/img/mym-logo.png" className="max-h-[60px]" />
        </a>
        <div className="flex h-full items-center">
          <button
            className="navbar-burger flex items-center text-black p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
            onClick={toggleMenu}
          ></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col h-screen w-full py-6 px-6 bg-white border-r overflow-y-auto text-black">
            <div className="flex items-center justify-end">
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8.586L4.293 2.879 2.879 4.293 8.586 10l-5.707 5.707 1.414 1.414L10 11.414l5.707 5.707 1.414-1.414L11.414 10l5.707-5.707-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            </div>
            <div className="w-full flex flex-col items-center">
              {/* todo */}
              <div className="max-w-[570px]">
                <ul className="flex flex-col items-center alt-font font-semibold">
                  {navItems.map((item, idx) => (
                    <>
                      <li key={`item-${idx}`} className={`flex items-center gap-2 ${item.name === "Services" ? "relative" : ""}`}>
                        <a
                          href={`${ROOT_URL}${item.path}`}
                          className="text-[22px] leading-[42px] lg:text-[36px] lg:leading-[70px] xl:text-[48px] xl:leading-[85px]"
                        >
                          {item.name}
                        </a>
                        {item.name === "Services" && (
                          <button
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                            className="focus:outline-none absolute left-[120%]"
                          >
                            {isDropdownOpen ? <Minus size={20}/> : <Plus size={20}/>}
                          </button>
                        )}
                      </li>

                      {item.name === "Services" && isDropdownOpen && (
                        <ul className="flex flex-col">
                          {services.map((service, serviceIndex, servicesArray) => (
                            <li
                              key={`service-${serviceIndex}`}
                              className={`text-black w-full text-center py-1 ${
                                serviceIndex !== servicesArray.length - 1
                                  ? "border-b"
                                  : ""
                              }`}
                            >
                              <a
                                href={`${ROOT_URL}${service.path}`}
                                className="text-xs sm:text-[14px] sm:leading-[18px]"
                              >
                                {service.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-[7%] sm:mt-[3%]">
              <ul className="flex justify-center">
                <li className="mx-[2%] sm:mx-[1%]">
                  <a href="https://www.instagram.com/makeyourmarkdigital/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </a>
                </li>
                <li className="mx-[2%] sm:mx-[1%]">
                  <a href="https://www.linkedin.com/company/make-your-mark-digital/" target="_blank">
                    <Linkedin />
                  </a>
                </li>
                <li className="mx-[2%] sm:mx-[1%]">
                  <a href="https://www.facebook.com/MakeYourMarkDigital/" target="_blank">
                    <Facebook />
                  </a>
                </li>
                <li className="mx-[2%] sm:mx-[1%]">
                  <a href="https://twitter.com/makeyourmarkdig" target="_blank">
                    <Twitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-8">
                <img
                  src="/img/WOSB-logo.webp"
                  className="w-[133px] object-contain mx-[2px] mb-[33px]"
                />
              <a href="https://www.expertise.com/business/digital-marketing-agencies/pennsylvania/philadelphia" target="_blank">
                <img
                  src="/img/awards-logo.webp"
                  className="w-[133px] object-contain mx-[2px] mb-[33px]"
                />
              </a>
              <a href="https://www.semrush.com/agencies/" target="_blank">
                <img
                  src="/img/semrush-logo.webp"
                  className="w-[133px] object-contain mx-[2px] mb-[33px]"
                />
              </a>
              <a href="/wp-content/uploads/2024/06/badge_AN.png" target="_blank">
                <img
                  src="/img/ariba-logo.png"
                  className="w-[133px]  object-contain mx-[2px] mb-[33px]"
                />
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
