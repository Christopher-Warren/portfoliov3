import { useState } from "react";

export default function NavModal() {
  const [navModal, setNavModal] = useState(false);

  // disables scroll bars when
  // modal is visible
  navModal
    ? (document.body.style.overflow = "visible")
    : (document.body.style.overflow = "hidden");

  return (
    <div className="flex w-full justify-end items-center">
      <ul className="sm:hidden  text-blue-400">
        <li
          onClick={() => setNavModal(!navModal)}
          className="text-center px-2 border  border-red-400"
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
          navModal ? "-left-full" : "left-0"
        }`}
      >
        <div onClick={() => setNavModal(!navModal)}>hide/show modal</div>
      </div>
    </div>
  );
}
