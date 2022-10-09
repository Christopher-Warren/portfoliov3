import { useEffect, useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    // array with texts to type in typewriter
    const dataText = [
      `import React from "react";`,
      `const HelloWorld = () => return &lt;div&gt;Hello, World!&lt;div&gt;`,
    ];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < text.length) {
        // add next character to h1
        document.querySelector("h2").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == "function") {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 20000);
      }
      if (typeof dataText[i] == "undefined") {
      } else {
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
          typeWriter(dataText[i], 0, function () {
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
          });
        }
      }
      // check if dataText[i] exists
    }
    // start the text animation
    StartTextAnimation(0);

    return () => {};
  }, []);

  return (
    <section
      id="home"
      className="lg:h-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:w-4/5 w-11/12 mx-auto"
    >
      <article className="lg:w-1/2 mb-4 md:mb-8 lg:mb-56" role="main">
        <div className="my-5 lg:my-10">
          <h1 className="text-blue-600 text-5xl font-bold  lg:text-7xl">
            Christopher
            <br /> Warren
          </h1>
          <div className="  mt-5">
            <a href="mailto:chrisalmith@gmail.com" className="text-red-500">
              <button aria-label="Send mail" className="py-2   rounded  hover:">
                <svg
                  className="inline w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/christopher-warren-188b2180/"
              className="text-blue-500"
              target="_blank"
            >
              <button
                aria-label="Chris Warren LinkedIn Link"
                className="py-2   rounded mx-2 lg:mx-5 md hover:"
              >
                <svg
                  className="inline w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </a>
            <a href="/assets/Christopher_Warren_Resume.pdf" target="_blank">
              <button
                aria-label="Open resume"
                className="py-2 rounded md hover:underline text-blue-500"
              >
                <svg
                  className="inline w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <div className="px-2 inline">Resume</div>
              </button>
            </a>
          </div>
        </div>

        <p
          className={`text-xl lg:text-3xl font-light lg:leading-snug lg:w-10/12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          I am a Frontend Engineer currently residing in Chattanooga, TN. I have
          a passion for problem solving, and technology. This passion is what
          fuels my hunger in software engineering.
        </p>
        <button
          aria-label="Anchor"
          className="hero-button flex max-w-max items-center text-3xl lg:text-5xl font-semibold text-blue-600  mt-5 lg:mt-10 cursor-pointer "
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            className={`${
              darkMode ? "hero-svg-dark" : "hero-svg"
            } transition-all duration-200 mr-1`}
            xmlns="http://www.w3.org/2000/svg"
            fill={darkMode ? "#18191a" : "white"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="50px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>

          <p>See Projects</p>
        </button>
      </article>
      <div role="banner" className="flex relative h-64 lg:h-4/5 z-10 ">
        <div className=" bg-gray-800 absolute w-2/5 h-3/6 text-pink-600">
          <div className="bg-gray-700 h-6 md:h-8"></div>
          <h2 className="px-1 md:pt-2 md:px-2 md:text-2xl leading-5"></h2>
        </div>

        <img
          alt="Programmer thinking"
          className="mx-auto h-full z-0"
          src="/programmer2.svg"
        />
      </div>
    </section>
  );
};

export default Hero;
