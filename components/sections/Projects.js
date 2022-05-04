import { useState, useContext } from 'react'

import DarkModeContext from '../context/DarkModeContext'

const Projects = () => {
  const [modal, setModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  const [selectedImageIdx, setSelectedImageIdx] = useState(0)

  const { darkMode } = useContext(DarkModeContext)

  const handleModal = (e, index) => {
    e.preventDefault()

    setSelectedProject(projects[index])
    setModal(!modal)

    // prevents content from shifting around
    // when modal is shown
    if (modal) {
      document.body.style.overflow = 'visible'
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'hidden'
      }, 200)
    }
  }

  const projects = [
    {
      id: 4,
      name: 'Easydash',
      about: `Easydash is a Fullstack, GraphQL powered inventory management system; 
      Built using Typescript, Node, Express, AWS S3, MongoDB, GraphQL, React, Redux, React-router, and TailwindCSS.
      
      Easy dash features a dashboard in which a store owner can create, modify, and delete products. The store owner
      can also upload any number of photos for each product. They can then create orders, fulfill them, upload tracking information, all while
       viewing incoming orders real-time via the homepage.
      `,
      imageURLS: [
        '/images/easydash/login.png',
        '/images/easydash/dashboard.png',
        '/images/easydash/products.png',
        '/images/easydash/productsfilter.png',
        '/images/easydash/orders.png',
        '/images/easydash/orders2.png',
        '/images/easydash/createorder.png',
        '/images/easydash/mutationexample.png',
        '/images/easydash/queryexample.png',
      ],
      liveURL: 'https://easydash-deploy-test.herokuapp.com/',
      sourceURL: 'https://github.com/Christopher-Warren/easydash',
    },
    {
      id: 0,
      name: 'Fenrir',
      about:
        'A turn-based, survival(ish) RPG game, built from scratch, using - NextJS and MongoDB (for statistic collection). While the art assets are not created by me, the small game engine, itself, is. I built this project to show my skills with bringing an idea to life.',
      imageURLS: ['/images/fenrir-preview.png'],
      liveURL: 'https://beta-fenrir.vercel.app/',
      sourceURL: 'https://github.com/Christopher-Warren/beta-fenrir',
    },
    {
      id: 1,
      name: 'Dev-Apparel',
      about:
        'Dev-Apparel is a Fullstack E-commerce App, built using - NextJS, MongoDB, React, Stripe, and Bootstrap. Dev-Apparel uses CRUD operations to populate the storefront with items stored in a Mongo database.',
      imageURLS: ['/images/dev-apparel.png'],
      liveURL: 'https://dev-apparel.vercel.app/',
      sourceURL: 'https://github.com/Christopher-Warren/dev-apparel',
    },
    {
      id: 2,
      name: 'Refurn',
      about:
        'Refurn is a Fullstack E-commerce App, built using - React, NodeJS, Express, MongoDB, Bootstrap, and Firebase Storage as a solution to store images. Refurn was built to exemplify my abilities to work with CRUD operations. Refurn supports authentication, allowing users to login and upload furniture they wish to sell. This then enables the owner to see the listing and either approve or deny the offer.',
      imageURLS: ['/images/refurn.png'],
      liveURL: 'https://refurn.herokuapp.com/',
      sourceURL: 'https://github.com/Christopher-Warren/Refurn',
    },
    {
      id: 3,
      name: 'IP Tracker',
      about:
        'IP Tracker is an IP location tool, built using - React, TailwindCSS, and leaflet as a mapping solution. IP Tracker gets the users IP address on load and shows the location and ISP information. This tool features a Generate IP button which generates a random IP address, then shows the IP location and ISP info.',
      imageURLS: ['/images/iptracker.png'],
      liveURL: 'https://iptracker-phi.vercel.app/',
      sourceURL: 'https://github.com/Christopher-Warren/iptracker',
    },
  ]

  const renderProjects = projects.map((project, index) => {
    return (
      <div className="lg:w-1/3 px-3 mb-20" key={project.id}>
        <div
          className={`relative rounded-b shadow-a-xl w-full inline-block ${
            darkMode ? 'bg-gray-800 shadow-a-xl-dark' : 'bg-white'
          }`}
        >
          {/* vvv Source/Live vvv */}
          <div className="absolute md:w-2/12 w-3/12 right-0 -mr-4 text-center min-w-max">
            <a target="_blank" href={project.sourceURL}>
              <div className="relative p-2 shadow-md mb-5 mt-3 hover:bg-gray-700 transition-colors bg-gray-500 text-white rounded-l rounded-tr text-lg">
                <div className="font text-lg font-medium ">Source</div>

                <div className="source-arrow absolute right-0 mt-2 "></div>
              </div>
            </a>
            <a target="_blank" href={project.liveURL}>
              <div className="relative p-2 shadow-md mb-5 mt-3 hover:bg-blue-700 transition-colors bg-blue-500 text-white rounded-l rounded-tr text-lg">
                <div className="font text-lg font-medium">Demo</div>

                <div className="live-arrow absolute right-0 mt-2 "></div>
              </div>
            </a>
          </div>

          {/* ^^^ Source/Live ^^^ */}

          <img
            src={project.imageURLS[0]}
            className="w-8/12 lg:w-9/12 lg:h-52 -my-5 ml-5 shadow-a-xl2 object-cover object-left-top rounded-md"
          />

          <div
            className={`mt-5 py-3 px-5  ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            <h1
              className={`lg:text-4xl text-2xl font-semibold py-2 ${
                darkMode ? 'text-pink-600' : 'text-gray-800'
              }`}
            >
              {project.name}
            </h1>
            {/* lg:h-28 ensures all cards are same height on lg screens */}
            <p
              className={`lg:text-xl text-lg font-light leading-6 lg:h-28 truncate-multi mb-4 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              {project.about}
            </p>
            <div
              className="info-button flex align-middle cursor-pointer  text-blue-600 text-2xl max-w-min whitespace-nowrap rounded px-2 py-1 font-semibold"
              onClick={(e) => handleModal(e, index)}
            >
              More Info
              <svg
                className={`${
                  darkMode ? 'info-svg-dark' : 'info-svg '
                } transition-all duration-200 ml-1 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill={darkMode ? '#1F2937' : 'white'}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className={`fixed ${
            darkMode ? 'bg-black-900 text-white' : 'bg-white'
          } w-full h-screen right-0 top-0 ${
            modal ? 'right-0' : 'right-full'
          } transition-all duration-200 z-30`}
        >
          <div className="mx-5 h-screen relative">
            <div
              onClick={handleModal}
              className="w-min mx-auto text-red-500 modal-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-16 lg:w-20 modal-svg  transition-all duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>

            <div className="relative mx-auto  md:w-1/3 w-full">
              <img
                className=" mx-auto h-full  rounded-md object-contain object-top shadow-a-xl"
                src={
                  selectedProject?.imageURLS &&
                  selectedProject.imageURLS[selectedImageIdx]
                }
              ></img>

              <button
                className="absolute top-0 h-full text-white bg-opacity-25 bg-gray-600 rounded"
                onClick={(e) => {
                  setSelectedImageIdx((prev) => {
                    if (prev === 0) return selectedProject.imageURLS.length - 1

                    return prev - 1
                  })
                }}
              >
                <svg
                  className="h-full transform hover:scale-125 transition-transform duration-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                onClick={(e) => {
                  setSelectedImageIdx((prev) => {
                    if (prev === selectedProject.imageURLS.length - 1) return 0

                    return prev + 1
                  })
                }}
                className="absolute top-0 right-0 h-full  text-white  bg-opacity-25 bg-gray-600 rounded "
              >
                <svg
                  className="h-full transform hover:scale-125 transition-transform duration-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            <div className="mx-auto lg:w-4/6">
              <div className="">
                <h1 className="justify-self-start text-blue-600 text-3xl lg:text-4xl font-bold text-center my-2">
                  {selectedProject && selectedProject.name}
                </h1>
                <p className=" leading-tight text-xl font-light max-w-2xl mx-auto indent-2">
                  {selectedProject && selectedProject.about}
                </p>
              </div>

              <div
                className={`flex absolute bottom-0 left-0 mb-5 lg:mb-14 justify-center w-full font-semibold lg:text-4xl text-2xl ${
                  darkMode ? 'text-pink-600' : 'text-gray-800'
                } tracking-wide`}
              >
                <a
                  target="_blank"
                  href={selectedProject && selectedProject.liveURL}
                >
                  <div className="modal-button flex px-5 cursor-pointer">
                    <svg
                      className="lg:w-12 w-8 modal-svg  transition-all duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z" />
                    </svg>
                    <p className="ml-5 ">Demo</p>
                  </div>
                </a>
                <a
                  target="_blank"
                  href={selectedProject && selectedProject.sourceURL}
                >
                  <div className="modal-button flex px-5 cursor-pointer">
                    <svg
                      className=" lg:w-12 w-8 modal-svg  transition-all duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <p className="ml-5 ">Source</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section className="lg:w-4/5 w-11/12 mx-auto h-full mt-10">
      {/* pt-16 offsets the navbar height */}
      <div className="">
        <article className="relative">
          <div>
            <h1
              id="projects"
              className=" text-blue-600 text-5xl  font-bold lg:mb-28 mb-16  text-center pt-20"
            >
              Projects
            </h1>
          </div>
          {/* Flex Container */}
          <div className="w-full h-full">
            <div className="lg:flex lg:flex-wrap">
              {/* Flex Items */}
              {renderProjects}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
