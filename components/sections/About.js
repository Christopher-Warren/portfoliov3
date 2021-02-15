const About = () => {
  return (
    <section className="lg:w-4/5 w-11/12 mx-auto" id="about">
      {/* pt-16 offsets the navbar height */}
      <div className="pt-16">
        <article className="">
          <div className="relative ">
            {/* <img className="absolute test-2" src="/about.svg" /> */}
            <h1 className="text-blue-600 text-6xl lg:text-9xl font-bold mb-10 lg:my-10 text-center ">
              About
            </h1>
          </div>

          <p className="text-2xl lg:text-4xl font-light lg:leading-snug">
            I began coding many years ago in a distant dojo, known to very few.
            It wasn't long after that the shoulin showed me the way of the web
            development ways.I began coding many years ago in a distant dojo,
            known to very few. It wasn't long after that the shoulin showed me
            the way of the web development ways.I began coding many years ago in
            a distant dojo, known to very few. It wasn't long after that the
            shoulin showed me the way of the web development ways.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
