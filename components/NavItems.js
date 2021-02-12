import NavModal from "./NavModal";

const NavItems = ({ activeLink }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();

    // gets clicked element id
    // and scrolls to it
    // "home" scrolls to top
    if (document.getElementById(e.target.text.toLowerCase()).id === "home") {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (document.getElementById(e.target.text.toLowerCase())) {
      document
        .getElementById(e.target.text.toLowerCase())
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const textblue = "text-blue-600";
  return (
    <div className="flex justify-between lg:w-4/5 w-11/12 mx-auto">
      <ul className="flex items-center">
        <li className="p-2">
          <h1 className={`text-5xl font-black pr-8 ${textblue}`}>CW</h1>
        </li>
      </ul>

      <ul className="lg:flex lg:items-center sm:text-4xl hidden font-medium">
        <li className="px-2">
          <a
            href="#home"
            onClick={handleLinkClick}
            className={activeLink === 0 ? textblue : ""}
          >
            Home
          </a>
        </li>
        <li className="px-2">
          <a
            href="#about"
            onClick={handleLinkClick}
            className={activeLink === 1 ? textblue : ""}
          >
            About
          </a>
        </li>
        <li className="px-2">
          <a
            href="#projects"
            onClick={handleLinkClick}
            className={activeLink === 2 ? textblue : ""}
          >
            Projects
          </a>
        </li>
        <li className="px-2">
          <a
            href="#projects"
            onClick={handleLinkClick}
            className={activeLink === 3 ? textblue : ""}
          >
            Contact
          </a>
        </li>
      </ul>
      <NavModal activeLink={activeLink} />
    </div>
  );
};

export default NavItems;
