import { useEffect, useState } from "react";

import isInViewport from "../utils/isInViewPort";

import NavItems from "./NavItems";

const NavBar = ({ activeLink, setActiveLink }) => {
  const [expandNav, setExpandNav] = useState(true);

  const handleScroll = (e) => {
    if (window.scrollY > 40) {
      setExpandNav(false);
    } else {
      setExpandNav(true);
    }

    if (isInViewport(document.getElementById("home"))) setActiveLink(0);
    if (isInViewport(document.getElementById("about"))) setActiveLink(1);
    if (isInViewport(document.getElementById("projects"))) setActiveLink(2);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`text-2xl flex fixed top-0 w-full bg-gray-900 transition-all ease-in-out ${
        expandNav ? "h-20 duration-700" : "h-16 glow-md duration-500"
      }`}
    >
      <NavItems activeLink={activeLink} />
    </div>
  );
};

export default NavBar;
