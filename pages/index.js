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
      </Head>

      <div className="">
        <div id="home" className="flex items-center h-screen">
          <article className="border border-purple-500">
            <h1 className="md:text-7xl text-4xl font-bold text-green-400">
              Christopher Warren
            </h1>

            <p className="md:text-3xl">
              I am a self taught Software Developer currently residing in
              Chattanooga, TN. In early 2020 I decided to completely dedicate
              myself to coding. Ever since my first line of code, I can't
              imagine living a life without it. There's always something new,
              and challenging to learn and I love that.
            </p>
          </article>
          <div className="border border-purple-500">
            <img src="/kitty.png" />
          </div>
        </div>

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
