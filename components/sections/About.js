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
              className={`text-blue-600 text-5xl  font-bold mb-10 lg:my-10 text-center`}
            >
              About
            </h1>
          </div>

          <p
            className={`text-xl lg:text-2xl font-light max-w-5xl mx-auto lg:leading-snug ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            I have always been fascinated by technology and using it creatively.
            Wether I'm tearing apart laptops and desktops to fix them, or
            modifying their software, I have always felt at home. This
            curiousity is what lead me to pursue a career in Software
            Engineering.
            <br />
            <br /> Software Engineering allows me to utilize my strength with
            solving challenging problems, which is something I not only enjoy,
            but something I'm skilled in. The software ecosystem is constantly
            evolving and I find it very exciting that there is always something
            new to learn.
          </p>
          <br />
          <div
            className={`max-w-5xl mx-auto text-gray-800 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            <h1 className={`text-blue-600 text-4xl mb-5 font-bold text-center`}>
              Software & Skills
            </h1>
            <div
              className={`flex justify-evenly ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              <div className="">
                <div className="mt-5">
                  <ol>
                    <h3 className="text-2xl font-normal">Languages</h3>
                    <li>Typescript</li>
                    <li>Javascript</li>
                  </ol>
                </div>

                <div className="mt-5">
                  <ol>
                    <h3 className="text-2xl font-normal">Frontend</h3>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Redux</li>
                    <li>Next.js</li>
                    <li>Apollo GraphQL</li>
                    <li>REST</li>
                    <li>TailwindCSS</li>
                    <li>SASS</li>
                    <li>Bootstrap</li>
                    <li>HTML/CSS</li>
                  </ol>
                </div>
              </div>
              <div className="">
                <div className="mt-5">
                  <ol>
                    <h3 className="text-2xl font-normal">Backend</h3>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>GraphQL</li>
                    <li>Next.js</li>
                    <li>MongoDB</li>
                    <li>AWS S3</li>
                    <li>Cloud Firestore</li>
                  </ol>
                </div>
                <div className="mt-5">
                  <ol>
                    <h3 className="text-2xl font-normal">Other</h3>
                    <li>VS Code</li>
                    <li>Git</li>
                    <li>Heroku</li>
                    <li>Vercel</li>
                    <li>Stripe</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
