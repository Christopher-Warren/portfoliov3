import Head from "next/head";
import { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div>
      <Head>
        <title>
          {(activeLink === 0 && "Home") ||
            (activeLink === 1 && "About") ||
            (activeLink === 2 && "Projects") ||
            (activeLink === 3 && "Contact")}{" "}
          | Christopher Warren
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* pt-20 offsets size of NavBar */}

      <div className=" sm:mt-20 mt-16">
        <Hero />
        <div className="relative hidden lg:block">
          <div className="absolute -my-28">
            <img className="h-96" src="/sideill.svg" />
          </div>
        </div>
        <About />
        <div className="relative hidden lg:block">
          <div className="absolute right-0 -my-28">
            <img style={{ height: "30rem" }} src="/thinking-dude.svg" />
          </div>
        </div>
        <Projects />

        <Contact />
      </div>
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
      <footer className="h-20 w-full bg-green-600 mt-20"></footer>
    </div>
  );
}
