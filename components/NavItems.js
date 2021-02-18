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
      <ul className="flex items-center py-2 text-gray-800">
        <li className="pr-4 border-r-2 border-gray-300">
          <h1 className={`text-5xl font-black ${textblue}`}>CW</h1>
        </li>
        <li className="pl-8 pr-6">
          <a href="https://github.com/Christopher-Warren">
            <svg
              className="w-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>
        <li className="">
          <a href="https://www.linkedin.com/in/christopher-warren-188b2180/">
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </li>
      </ul>

      <ul className="lg:flex lg:items-center sm:text-4xl hidden font-medium text-gray-800">
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
