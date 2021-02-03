import { useState } from "react";

export default function NavModal() {
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
    document.getElementById(e.target.text.toLowerCase())
      ? document
          .getElementById(e.target.text.toLowerCase())
          .scrollIntoView({ behavior: "smooth" })
      : console.log("404: Hash link doesn't exist");
  };

  return (
    <div className="flex w-full justify-end items-center">
      <ul className="sm:hidden  text-blue-400">
        <li
          onClick={handleNavModal}
          className="text-center px-2 border  border-red-100"
        >
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
        className={` transition-all duration-200 top-0 w-full  absolute bg-gray-800 h-screen  ${
          navModal ? "left-0" : "-left-full"
        }`}
      >
        <div
          onClick={handleNavModal}
          className="flex justify-center border  border-red-400"
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
        <ul className="flex items-center sm:text-4xl font-bold border border-red-400 ">
          <li className="px-2">
            <a href="#home" onClick={handleLinkClick && handleNavModal}>
              Home
            </a>
          </li>
          <li className="px-2">
            <a href="#about" onClick={handleLinkClick && handleNavModal}>
              About
            </a>
          </li>
          <li className="px-2">
            <a href="#projects" onClick={handleLinkClick && handleNavModal}>
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
