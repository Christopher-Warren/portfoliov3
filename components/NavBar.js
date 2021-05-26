import { useEffect, useState, useContext } from "react";

import isInViewport from "../utils/isInViewPort";

import NavItems from "./NavItems";
import DarkModeContext from "../components/context/DarkModeContext";

const NavBar = ({ activeLink, setActiveLink }) => {
  const [expandNav, setExpandNav] = useState(true);

  const { darkMode } = useContext(DarkModeContext);

  const handleScroll = (e) => {
    if (window.scrollY > 40) {
      setExpandNav(false);
    } else {
      setExpandNav(true);
    }

    if (isInViewport(document.getElementById("home"))) setActiveLink(0);
    if (isInViewport(document.getElementById("about"))) setActiveLink(1);
    if (isInViewport(document.getElementById("projects"))) setActiveLink(2);
    if (isInViewport(document.getElementById("contact"))) setActiveLink(3);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-2xl flex fixed top-0 w-full ${
        darkMode ? "bg-gray-800" : "bg-white"
      } z-20 transition-all ease-in-out ${
        expandNav
          ? "sm:h-20 sm:duration-700 sm:shadow-none h-16 shadow-lg duration-500"
          : "h-16 shadow-lg duration-500"
      }`}
    >
      <NavItems activeLink={activeLink} />
    </nav>
  );
};

export default NavBar;
