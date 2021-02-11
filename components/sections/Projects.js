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
      }, 160);
    }
  };

  const projects = [
    {
      id: 0,
      name: "Dev-Apparel",
      about:
        "Dev-Apparel is an E-commerce App, built using - NextJS, MongoDB, React, Stripe, Use-Shopping-Cart, and Bootstrap.Dev-Apparel is an E-commerce App, built using - NextJS, MongoDB, React, Stripe, Use-Shopping-Cart, and Bootstrap.Dev-Apparel is an E-commerce App, built using - NextJS, MongoDB, React, Stripe, Use-Shopping-Cart,",
      imageURL: "https://www.chriswarren.tech/img/projects/dev-apparel.png",
      liveURL: "https://dev-apparel.vercel.app/",
      sourceURL: "https://github.com/Christopher-Warren/dev-apparel",
    },
    {
      id: 1,
      name: "city bois",
      about:
        "Dev-Apparel is an E-commerce App, built using - NextJS, MongoDB, React, Stripe, Use-Shopping-Cart, and Bootstrap.",
      imageURL: "https://www.chriswarren.tech/img/projects/dev-apparel.png",
      liveURL: "https://dev-apparel.vercel.app/",
      sourceURL: "https://github.com/Christopher-Warren/dev-apparel",
    },
    {
      id: 1,
      name: "food makers",
      about:
        "Dev-Apparel is an E-commerce App, built using - NextJS, MongoDB, React, Stripe, Use-Shopping-Cart, and Bootstrap.",
      imageURL: "https://www.chriswarren.tech/img/projects/dev-apparel.png",
      liveURL: "https://dev-apparel.vercel.app/",
      sourceURL: "https://github.com/Christopher-Warren/dev-apparel",
    },
  ];

  const renderProjects = projects.map((project, index) => {
    return (
      <div className="lg:w-1/3 test-1 px-3 mb-20" key={project.id}>
        <div className="relative shadow-a-xl w-full inline-block">
          {/* vvv Source/Live vvv */}
          <div className="test-2 absolute md:w-2/12 w-3/12 right-0 -mr-4 text-center">
            <a href={project.sourceURL}>
              <div className="relative p-2 shadow-md mb-5 mt-3 bg-gray-500 text-white rounded-l rounded-tr text-lg">
                <div className="font text-lg font-medium test-1">Source</div>

                <div className="source-arrow absolute right-0 mt-2 "></div>
              </div>
            </a>
            <a href={project.liveURL}>
              <div className="relative p-2 shadow-md mb-5 mt-3 bg-blue-500 text-white rounded-l rounded-tr text-lg">
                <div className="font text-lg font-medium test-1">Live</div>

                <div className="live-arrow absolute right-0 mt-2 "></div>
              </div>
            </a>
          </div>

          {/* ^^^ Source/Live ^^^ */}
          <img
            src={project.imageURL}
            className="w-8/12 lg:w-9/12 h-3/6 -my-5 ml-5 shadow-a-xl2 object-cover object-left-top test-3 rounded-md"
          />

          <div className="mt-5 py-3 px-5 text-gray-800">
            <h1 className="lg:text-4xl text-2xl font-semibold py-2">
              {project.name}
            </h1>
            <p className="lg:text-xl text-lg font-light text-gray-700 leading-6  truncate-multi mb-4">
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
          className={`fixed bg-white w-full h-screen top-0 ${
            modal ? "right-0" : "right-full"
          } transition-all z-30`}
        >
          <div className="mx-5 h-screen">
            <div onClick={handleModal} className="w-min mx-auto text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="120px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <img
              className=" mx-auto lg:h-2/5 rounded-lg object-contain object-top shadow-a-xl"
              src={selectedProject && selectedProject.imageURL}
            ></img>
            <div className="h-96 mx-auto test-1 lg:w-5/6">
              <h1 className=" text-blue-600 text-5xl lg:text-5xl font-bold text-center my-5">
                {selectedProject && selectedProject.name}
              </h1>
              <p className="text-lg leading-tight lg:text-3xl font-light">
                {selectedProject && selectedProject.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="lg:w-4/5 w-11/12 mx-auto h-full">
      {/* pt-16 offsets the navbar height */}
      <div className="pt-16">
        <article className="relative">
          <div className="flex justify-center">
            <h1
              className=" text-blue-600 text-5xl lg:text-9xl font-bold my-5 lg:my-10 text-center"
              id="projects"
            >
              Projects
            </h1>
          </div>
          {/* Flex Container */}
          <div className="w-full h-full mt-10">
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
