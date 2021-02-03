import NavModal from "./NavModal";

const NavItems = ({ activeLink }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();

    // gets clicked element id
    // and scrolls to it
    document.getElementById(e.target.text.toLowerCase())
      ? document
          .getElementById(e.target.text.toLowerCase())
          .scrollIntoView({ behavior: "smooth" })
      : console.log("404: Hash link doesn't exist");
  };

  return (
    <div className="flex justify-between w-screen mx-5 lg:mx-48">
      {/* 
      SEE: onClick={handleLinkClick}
            className={activeLink === 0 ? "text-blue-400" : ""}
      @TODO extract nav links into standalone component
      
      */}

      <ul className="flex items-center border border-red-400">
        <li className="text-center px-2 ">Chris Warren</li>
      </ul>

      <ul className="sm:flex sm:items-center sm:text-4xl hidden font-bold border border-red-400 ">
        <li className="px-2">
          <a
            href="#home"
            onClick={handleLinkClick}
            className={activeLink === 0 ? "text-blue-400" : ""}
          >
            Home
          </a>
        </li>
        <li className="px-2">
          <a
            href="#about"
            onClick={handleLinkClick}
            className={activeLink === 1 ? "text-blue-400" : ""}
          >
            About
          </a>
        </li>
        <li className="px-2">
          <a
            href="#projects"
            onClick={handleLinkClick}
            className={activeLink === 2 ? "text-blue-400" : ""}
          >
            Projects
          </a>
        </li>
      </ul>
      <NavModal />
    </div>
  );
};

export default NavItems;
