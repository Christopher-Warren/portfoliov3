const About = () => {
  return (
    <section className="lg:w-4/5 w-11/12 mx-auto" id="about">
      {/* pt-16 offsets the navbar height */}
      <div className="lg:pt-24">
        <article className="pt-10">
          <div className="relative ">
            {/* <img className="absolute test-2" src="/about.svg" /> */}
            <h1 className="text-blue-600 text-6xl lg:text-7xl font-bold mb-10 lg:my-10 text-center ">
              About
            </h1>
          </div>

          <p className="text-2xl lg:text-3xl font-light max-w-6xl mx-auto lg:leading-snug">
            I currently work at Parkridge Valley West – a behavioral health
            hospital located in Tennessee, however, I am focused on making a
            career switch to Web Development as technology has always been my
            biggest passion. My language of choice is{" "}
            <bold className="font-medium">Javascript.</bold> Some
            technologies/frameworks that I work with are{" "}
            <bold className="font-medium">
              NextJS, React, NodeJS, MongoDB, Express, Bootstrap, and
              TailwindCSS.
            </bold>{" "}
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
