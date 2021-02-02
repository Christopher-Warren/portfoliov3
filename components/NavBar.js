import { useEffect, useState } from "react";

import isInViewport from "../utils/isInViewPort";

import NavItems from "./NavItems";

const NavBar = ({ activeNav, setActiveNav }) => {
  const [mountNav, setMountNav] = useState(null);

  const handleScroll = (e) => {
    if (window.scrollY > 40) {
      setMountNav(false);
    } else {
      setMountNav(true);
    }
    if (isInViewport(document.getElementById("home"))) setActiveNav(0);
    if (isInViewport(document.getElementById("about"))) setActiveNav(1);
    if (isInViewport(document.getElementById("projects"))) setActiveNav(2);
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
      <NavItems activeNav={activeNav} mountNav={mountNav} />
    </div>
  );
};

export default NavBar;
