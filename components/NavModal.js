import { useState } from "react";

export default function NavModal({ activeLink }) {
  const [navModal, setNavModal] = useState(false);

  // disables scroll bars when
  // modal is visible
  const handleNavModal = () => {
    setNavModal(!navModal);
    navModal
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
  };

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
    // closes modal after clicking link
    handleNavModal();
  };

  return (
    <div className="flex w-full lg:hidden justify-end items-center">
      <ul className=" text-blue-600">
        <li onClick={handleNavModal} className="text-center px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="60px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </li>
      </ul>

      <div
        className={` transition-all duration-200 top-0 w-full  absolute bg-white h-screen  ${
          navModal ? "left-0" : "-left-full"
        }`}
      >
        <div
          onClick={handleNavModal}
          className="flex justify-center border text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="100px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {/* Modal Link Content */}
        <ul className="flex flex-col items-center text-4xl font-bold mt-10">
          <li className="px-2 py-2">
            <a
              className={activeLink === 0 ? "text-blue-600" : ""}
              href="#home"
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li className="px-2 py-2">
            <a
              className={activeLink === 1 ? "text-blue-600" : ""}
              href="#about"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li className="px-2 py-2">
            <a
              className={activeLink === 2 ? "text-blue-600" : ""}
              href="#projects"
              onClick={handleLinkClick}
            >
              Projects
            </a>
          </li>
          <li className="px-2 py-2">
            <a
              className={activeLink === 3 ? "text-blue-600" : ""}
              href="#projects"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
