import { useContext } from "react";
import NavModal from "./NavModal";
import DarkModeContext from "../components/context/DarkModeContext";

const NavItems = ({ activeLink }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

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
      <ul
        className={`flex items-center py-2 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        <li
          className={`pr-4 border-r-2 ${
            darkMode ? "border-gray-700" : "border-gray-300"
          } `}
        >
          <h1 className={`text-5xl font-black ${textblue}`}>CW</h1>
        </li>
        <button>
          <li className="pl-4 pr-4">
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
        </button>

        <button>
          <li className="pr-4">
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
        </button>

        <li className="">
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <label
              htmlFor="toggle"
              className={`inline whitespace-nowrap text-sm absolute bottom-6 left-1`}
            ></label>
            <div
              className={`absolute block w-8 h-8 -top-1.5 rounded-full border-4  appearance-none cursor-pointer z-10 pointer-events-none ${
                darkMode
                  ? "right-0 border-white bg-white "
                  : "border-gray-700 bg-gray-700"
              }`}
            >
              <svg
                className={`dark-mode-svg ${darkMode ? "hidden" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z" />
              </svg>

              <svg
                className={`light-mode-svg ${darkMode ? "" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.088 13.126l1.912-1.126-1.912-1.126c-1.021-.602-1.372-1.91-.788-2.942l1.093-1.932-2.22-.02c-1.185-.01-2.143-.968-2.153-2.153l-.02-2.219-1.932 1.093c-1.031.583-2.34.233-2.941-.788l-1.127-1.913-1.127 1.913c-.602 1.021-1.91 1.372-2.941.788l-1.932-1.093-.02 2.219c-.01 1.185-.968 2.143-2.153 2.153l-2.22.02 1.093 1.932c.584 1.032.233 2.34-.788 2.942l-1.912 1.126 1.912 1.126c1.021.602 1.372 1.91.788 2.942l-1.093 1.932 2.22.02c1.185.01 2.143.968 2.153 2.153l.02 2.219 1.932-1.093c1.031-.583 2.34-.233 2.941.788l1.127 1.913 1.127-1.913c.602-1.021 1.91-1.372 2.941-.788l1.932 1.093.02-2.219c.011-1.185.969-2.143 2.153-2.153l2.22-.02-1.093-1.932c-.584-1.031-.234-2.34.788-2.942zm-10.117 6.874c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zm6.029-8c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6z" />
              </svg>
            </div>
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className={`absolute block w-8 h-8 -top-1.5 rounded-full bg-white border-4  appearance-none cursor-pointer ${
                darkMode ? "right-0 " : ""
              }`}
              onChange={() => setDarkMode(!darkMode)}
            ></input>

            <label
              htmlFor="toggle"
              className={`toggle-label block overflow-hidden h-5 rounded-full  cursor-pointer ${
                darkMode ? "bg-yellow-300" : "bg-purple-400"
              }`}
            ></label>
          </div>
        </li>
      </ul>

      <ul
        className={`lg:flex lg:items-center sm:text-4xl hidden font-medium ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
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
