import { useState } from "react";

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleModal = (e, index) => {
    e.preventDefault();

    setSelectedProject(projects[index]);
    setModal(!modal);

    // prevents content from shifting around
    // when modal is shown
    if (modal) {
      document.body.style.overflow = "visible";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 200);
    }
  };

  const projects = [
    {
      id: 0,
      name: "Dev-Apparel",
      about:
        "Dev-Apparel is a Fullstack E-commerce App, built using - NextJS, MongoDB, React, Stripe, and Bootstrap. Dev-Apparel uses CRUD operations to populate the storefront with items stored in a Mongo database. It features a filtering option to filter store items based on various types. It also features dynamically rendered pages for each item in the database.",
      imageURL: "/images/dev-apparel.png",
      liveURL: "https://dev-apparel.vercel.app/",
      sourceURL: "https://github.com/Christopher-Warren/dev-apparel",
    },
    {
      id: 1,
      name: "Refurn",
      about:
        "Refurn is a Fullstack E-commerce App, built using - React, NodeJS, Express, MongoDB, Bootstrap, and Firebase Storage as a solution to store images. Refurn was built to exemplify my abilities to work with CRUD operations. Refurn supports authentication, allowing users to login and upload furniture they wish to sell. This then enables the owner to see the listing and either approve or deny the offer.",
      imageURL: "/images/refurn.png",
      liveURL: "https://refurn.herokuapp.com/",
      sourceURL: "https://github.com/Christopher-Warren/Refurn",
    },
    {
      id: 2,
      name: "IP Tracker",
      about:
        "IP Tracker is an IP location tool, built using - React, TailwindCSS, and leaflet as a mapping solution. IP Tracker gets the users IP address on load and shows the location and ISP information. This tool features a Generate IP button which generates a random IP address, then shows the IP location and ISP info.",
      imageURL: "/images/iptracker.png",
      liveURL: "https://iptracker-phi.vercel.app/",
      sourceURL: "https://github.com/Christopher-Warren/iptracker",
    },
    {
      id: 3,
      name: "Portfolio",
      about:
        "Here you can find the source code of my portfolio. I used NextJS, React, TailwindCSS, and Nodemailer as a solution for users to contact me. This portfolio was built to exemplify my skills with UX/UI best practices.",
      imageURL: "/images/portfolio.png",
      liveURL: "https://www.chriswarren.tech/",
      sourceURL: "https://github.com/Christopher-Warren/portfoliov3",
    },
  ];

  const renderProjects = projects.map((project, index) => {
    return (
      <div className="lg:w-1/3 px-3 mb-20" key={project.id}>
        <div className="relative shadow-a-xl w-full inline-block bg-white">
          {/* vvv Source/Live vvv */}
          <div className="absolute md:w-2/12 w-3/12 right-0 -mr-4 text-center">
            <a href={project.sourceURL}>
              <div className="relative p-2 shadow-md mb-5 mt-3 hover:bg-gray-600 transition-colors bg-gray-500 text-white rounded-l rounded-tr text-lg">
                <div className="font text-lg font-medium ">Source</div>

                <div className="source-arrow absolute right-0 mt-2 "></div>
              </div>
            </a>
            <a href={project.liveURL}>
              <div className="relative p-2 shadow-md mb-5 mt-3 hover:bg-blue-600 transition-colors bg-blue-500 text-white rounded-l rounded-tr text-lg">
                <div className="font text-lg font-medium">Demo</div>

                <div className="live-arrow absolute right-0 mt-2 "></div>
              </div>
            </a>
          </div>

          {/* ^^^ Source/Live ^^^ */}

          <img
            src={project.imageURL}
            className="w-8/12 lg:w-9/12 -my-5 ml-5 shadow-a-xl2 object-cover object-left-top rounded-md"
          />

          <div className="mt-5 py-3 px-5 text-gray-800">
            <h1 className="lg:text-4xl text-2xl font-semibold py-2">
              {project.name}
            </h1>
            {/* lg:h-28 ensures all cards are same height on lg screens */}
            <p className="lg:text-xl text-lg font-light text-gray-700 leading-6 lg:h-28 truncate-multi mb-4">
              {project.about}
            </p>
            <div
              className="info-button flex align-middle cursor-pointer  text-blue-600 text-2xl max-w-min whitespace-nowrap rounded px-2 py-1 font-semibold"
              onClick={(e) => handleModal(e, index)}
            >
              More Info
              <svg
                className="info-svg transition-all duration-200 ml-1 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
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
          className={`fixed bg-white w-full h-screen right-0 top-0 ${
            modal ? "right-0" : "right-full"
          } transition-all duration-200 z-30`}
        >
          <div className="mx-5 h-screen relative">
            <div
              onClick={handleModal}
              className="w-min mx-auto text-red-400 modal-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-16 lg:w-28"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>

            <img
              className=" mx-auto lg:h-2/5  rounded-md object-contain object-top shadow-a-xl"
              src={selectedProject && selectedProject.imageURL}
            ></img>
            <div className="fit mx-auto lg:w-4/6">
              <div className="">
                <h1 className="justify-self-start text-blue-600 text-5xl lg:text-5xl font-bold text-center my-5">
                  {selectedProject && selectedProject.name}
                </h1>
                <p className="text-lg leading-tight lg:text-3xl font-light">
                  {selectedProject && selectedProject.about}
                </p>
              </div>

              <div className="flex absolute bottom-0 left-0 mb-5 lg:mb-14 justify-center w-full font-semibold lg:text-4xl text-2xl text-gray-800 tracking-wide">
                <a href={selectedProject && selectedProject.liveURL}>
                  <div className="modal-button flex px-5 cursor-pointer">
                    <svg
                      className="lg:w-12 w-8 modal-svg  transition-all duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z" />
                    </svg>
                    <p className="ml-5 ">Live</p>
                  </div>
                </a>
                <a href={selectedProject && selectedProject.sourceURL}>
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
    );
  });

  return (
    <section className="lg:w-4/5 w-11/12 mx-auto h-full mt-10">
      {/* pt-16 offsets the navbar height */}
      <div className="pt-16">
        <article className="relative">
          <div className="" id="projects">
            <h1 className=" text-blue-600 text-6xl lg:text-7xl font-bold lg:mb-28 mb-16  text-center">
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
  );
};

export default Projects;
