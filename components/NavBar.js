import { useEffect, useState } from "react";

const NavBar = () => {
  const [mountNav, setMountNav] = useState(null);
  console.log(mountNav);

  const handleScroll = (e) => {
    if (window.scrollY > 64) {
      setMountNav(false);
    } else {
      setMountNav(true);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  switch (mountNav) {
    case true:
      return <div className="fixed w-full h-20 bg-gray-500"></div>;
      break;
    case false:
      return <div className="fixed w-full h-16 bg-gray-500"></div>;
    default:
      return <div></div>;
  }
};

export default NavBar;
