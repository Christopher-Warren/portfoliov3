import NavModal from "./NavModal";

const NavItems = ({ activeLink, expandNav }) => {
  const handleNavClick = (e) => {
    e.preventDefault();

    document.getElementById(e.target.text.toLowerCase())
      ? document
          .getElementById(e.target.text.toLowerCase())
          .scrollIntoView({ behavior: "smooth" })
      : console.log("404: Hash link doesn't exist");
  };

  return (
    <div
      className={`text-2xl flex md:justify-between justify-center fixed top-0 w-full bg-gray-900 transition-all ease-in-out ${
        expandNav ? "h-20 duration-700" : "h-16 glow-md duration-500"
      }`}
    >
      {/* 
      <ul className="flex items-center border border-red-400">
        <li className="text-center px-2 ">Chris Warren</li>
      </ul>
      
      
      
      */}
      <NavModal />
      <ul className="sm:flex sm:items-center sm:text-4xl hidden font-bold border border-red-600 ">
        <li className="px-2">
          <a
            href="#home"
            onClick={handleNavClick}
            className={activeLink === 0 ? "text-blue-400" : ""}
          >
            Home
          </a>
        </li>
        <li className="px-2">
          <a
            href="#about"
            onClick={handleNavClick}
            className={activeLink === 1 ? "text-blue-400" : ""}
          >
            About
          </a>
        </li>
        <li className="px-2">
          <a
            href="#projects"
            onClick={handleNavClick}
            className={activeLink === 2 ? "text-blue-400" : ""}
          >
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
