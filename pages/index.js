import Head from "next/head";
import { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

export default function Home() {
  const [activeLink, setActiveLink] = useState(0);

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
    <div>
      <Head>
        <title>
          {(activeLink === 0 && "Home") ||
            (activeLink === 1 && "About") ||
            (activeLink === 2 && "Projects")}{" "}
          | Christopher Warren
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* pt-20 offsets size of NavBar 
      
      flex lg:flex-row flex-col h-full lg:items-start lg:justify-between items-center border  lg:mx-60 border-purple-500
      */}
      <div className="h-screen sm:pt-20 pt-16">
        <section
          id="home"
          className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:w-4/5 w-11/12 mx-auto"
        >
          <article className="lg:w-1/2 mb-4 md:mb-8 lg:mb-56">
            <h1 className="text-blue-600 text-5xl font-bold my-5 lg:my-10 lg:text-8xl">
              Christopher
              <br /> Warren
            </h1>

            <p className="text-2xl lg:text-4xl font-light lg:leading-snug lg:w-10/12">
              I am a self-taught Software Developer currently residing in
              Chattanooga, TN. I began coding in early 2020 and haven't looked
              back since.
            </p>
            <div
              className="button flex max-w-max items-center text-3xl lg:text-5xl font-bold text-blue-600 mt-5 lg:mt-10 cursor-pointer hover:underline"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <svg
                className="svg transition-all duration-200 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
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

              <div>See Projects</div>
            </div>
          </article>
          <div className="flex relative min-h-0 lg:h-4/5  z-10">
            <div className=" bg-gray-800 absolute w-2/5 h-3/6 text-pink-600">
              <div className="bg-gray-700 h-6 md:h-8"></div>
              <h2 className="px-1 md:pt-2 md:px-2 md:text-2xl leading-5"></h2>
            </div>

            <img className="mx-auto h-full z-0" src="/programmer2.svg" />
          </div>
        </section>
        <div className="relative hidden lg:block">
          <div className="absolute  -my-28">
            <img className="h-96" src="/sideill.svg" />
          </div>
        </div>
        <section className="lg:w-4/5 w-11/12 mx-auto">
          {/* pt-16 offsets the navbar height */}
          <div id="about" className="pt-16">
            <article className="">
              <div className="relative ">
                {/* <img className="absolute test-2" src="/about.svg" /> */}
                <h1 className="text-blue-600 text-5xl lg:text-9xl font-bold my-5 lg:my-10 text-center ">
                  About
                </h1>
              </div>

              <p className="text-2xl lg:text-4xl font-light lg:leading-snug pt-7">
                I began coding many years ago in a distant dojo, known to very
                few. It wasn't long after that the shoulin showed me the way of
                the web development ways.I began coding many years ago in a
                distant dojo, known to very few. It wasn't long after that the
                shoulin showed me the way of the web development ways.I began
                coding many years ago in a distant dojo, known to very few. It
                wasn't long after that the shoulin showed me the way of the web
                development ways.
              </p>
            </article>
          </div>
        </section>
        <div className="relative hidden lg:block">
          <div className="absolute right-0 -my-28">
            <img style={{ height: "30rem" }} src="/thinking-dude.svg" />
          </div>
        </div>
        <section className="lg:w-4/5 w-11/12 mx-auto h-full">
          {/* pt-16 offsets the navbar height */}
          <div id="projects" className="pt-16">
            <article className="relative">
              <div className="flex justify-center">
                <h1 className=" text-blue-600 text-5xl lg:text-9xl font-bold my-5 lg:my-10 text-center">
                  Projects
                </h1>
              </div>

              {/* <div className="w-full h-full mt-10">
                <div className="lg:flex lg:flex-wrap test-2">
                  <div className="mb-20 shadow-a-xl lg:w-1/3 h-96 w-full inline-block px-10">
                    <img
                      src="https://www.chriswarren.tech/img/projects/dev-apparel.png"
                      className="w-8/12 h-3/6 -mt-8 mx-4 shadow-a-xl2 object-cover object-top"
                    />
                  </div>
                </div>
              </div> */}

              <div className="w-full h-full mt-10">
                <div className="lg:flex lg:flex-wrap test-2">
                  <div className="lg:w-1/3 test-1 px-5">
                    <div className="shadow-a-xl h-96 w-full inline-block ">
                      <img
                        src="https://www.chriswarren.tech/img/projects/dev-apparel.png"
                        className="w-8/12 h-3/6 -my-5 ml-5 shadow-a-xl2 object-cover object-left-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}
