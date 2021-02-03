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
    <div>
      <NavItems activeLink={activeLink} expandNav={expandNav} />
    </div>
  );
};

export default NavBar;
