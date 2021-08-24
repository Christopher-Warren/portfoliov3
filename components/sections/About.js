import { useContext } from 'react'
import DarkModeContext from '../context/DarkModeContext'

const About = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <section className="lg:w-4/5 w-11/12 mx-auto pb-20" id="about">
      {/* pt-16 offsets the navbar height */}
      <div className="lg:pt-24">
        <article className="pt-10">
          <div className="relative ">
            {/* <img className="absolute test-2" src="/about.svg" /> */}
            <h1
              className={`text-blue-600 text-5xl lg:text-7xl font-bold mb-10 lg:my-10 text-center`}
            >
              About
            </h1>
          </div>

          <p
            className={`text-xl lg:text-3xl font-light max-w-6xl mx-auto lg:leading-snug ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            I have always been fascinated by technology and using it creatively.
            Wether I'm tearing apart laptops and desktops to fix them, or
            modifying their software, I have always felt at home. This
            curiousity is what lead me to pursue a career in Web Development.
            <br />
            <br /> I love Software Engineering because it allows me to utilize
            my strengths with problem solving and troubleshooting. Web
            development is constantly evolving and I find it very exciting that
            there is always something new to learn. The languages I use the most
            are <bold className="font-medium">
              Javascript, and Typescript.
            </bold>{' '}
            Some technologies/frameworks that I work with are{' '}
            <bold className="font-medium">
              NextJS, React, Redux, NodeJS, MongoDB, Express, Bootstrap, and
              TailwindCSS.
            </bold>{' '}
          </p>
          {/* <ul>
            <li>Thing</li>
            <li>Thing</li>
            <li>Thing</li>
            <li>Thing</li>
          </ul> */}
        </article>
      </div>
    </section>
  )
}

export default About
