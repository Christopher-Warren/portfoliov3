import Head from 'next/head'
import { useState, useEffect } from 'react'

import NavBar from '../components/NavBar'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

import DarkModeContext from '../components/context/DarkModeContext'

export default function Home() {
  const [activeLink, setActiveLink] = useState(0)

  const [darkMode, setDarkMode] = useState(false)
  const value = { darkMode, setDarkMode }

  return (
    <DarkModeContext.Provider value={value}>
      <Head>
        <title>
          {(activeLink === 0 && 'Home') ||
            (activeLink === 1 && 'About') ||
            (activeLink === 2 && 'Projects') ||
            (activeLink === 3 && 'Contact')}{' '}
          | Christopher Warren
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="Christopher Warren - Portfolio" />
        <meta property="og:image" content="/images/seo/seo-linkedin.png" />
        <meta
          property="og:description"
          content="The porfolio page of Christopher Warren"
        />
        <meta property="og:url" content="https://www.chriswarren.tech/" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* pt-20 offsets size of NavBar */}

      <div
        className={`sm:pt-20 pt-16 ${
          darkMode ? 'bg-black-900' : 'bg-white'
        } transition-all duration-500`}
      >
        <Hero />
        <div className="relative hidden lg:block">
          <div className="absolute -my-28">
            <img className="h-96" src="/sideill.svg" />
          </div>
        </div>
        <About />
        <div className="relative hidden lg:block">
          <div className="absolute right-0 -my-28">
            <img style={{ height: '30rem' }} src="/thinking-dude.svg" />
          </div>
        </div>
        <Projects />
        <div className="relative hidden lg:block">
          <div className="absolute -my-28  ">
            <img className="h-96" src="/undraw_contact.svg" />
          </div>
        </div>
        <Contact />
      </div>

      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
      <footer
        className={`h-20 w-full ${darkMode ? 'bg-black-900' : 'bg-white'}`}
      >
        <div className="pr-4  border-gray-300">
          <h1 className={`text-xl font-black text-blue-600 text-center `}>
            -Christopher Warren
          </h1>
        </div>
      </footer>
    </DarkModeContext.Provider>
  )
}
