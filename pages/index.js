import Head from "next/head";
import { useState } from "react";

import NavBar from "../components/NavBar";

export default function Home() {
  const [activeLink, setActiveLink] = useState(0);

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
      <div className="h-screen pt-20">
        <section
          id="home"
          className="test-1 h-full flex flex-col mx-5 lg:flex-row lg:mx-48 lg:items-center"
        >
          <article className="test-2 pb-10 lg:w-1/2">
            <h1 className="text-green-400 text-5xl font-bold pb-5 lg:text-8xl">
              Christopher
              <br /> Warren
            </h1>
            <p className="text-2xl text-green-50">
              I am a self taught Software Developer currently residing in
              Chattanooga, TN. In early 2020 I decided to completely dedicate
              myself to coding.
            </p>
          </article>
          <div className="test-3  lg:w-1/2">
            <img src="/space2.png" />
          </div>
        </section>
        <div className="bg-gray-600 h-screen">
          ABOUT
          <div id="about" className="mt-20">
            About
          </div>
        </div>
        <div className="bg-gray-600 h-screen">
          projects
          <div id="projects" className="mt-20">
            projects
          </div>
        </div>
      </div>
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}
