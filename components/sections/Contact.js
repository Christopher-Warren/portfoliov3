import { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/api/contact", {
      name: name,
      email: email,
      message: message,
    });

    console.log(data);
  };

  return (
    <div id="contact" className=" w-11/12 lg:w-4/5 mx-auto">
      <div className="">
        <h1
          className=" text-blue-600 text-5xl lg:text-9xl font-bold my-5 lg:my-10 lg:mb-20 text-center"
          id="projects"
        >
          Contact
        </h1>
      </div>
      <div className="w-full h-96 rounded shadow-a-xl p-10 ">
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-wrap">
          <div className="relative test-1 w-1/2 pr-5 lg:pr-10">
            <input
              className="rounded bg-gray-200 text-3xl name-input focus:border-gray-900 pt-5 px-4 pb-2 w-full"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              className="absolute name-label text-4xl left-2 bottom-2 transition-all px-2 pb-1 text-gray-600"
              htmlFor="name"
            >
              Name{" "}
            </label>
          </div>
          <div className="relative test-1 w-1/2 ">
            <input
              className="rounded bg-gray-200 text-3xl name-input focus:border-gray-900 pt-5 px-4 pb-2 w-full"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              className="absolute name-label text-4xl left-2 bottom-2 transition-all px-2 pb-1 text-gray-600"
              htmlFor="name"
            >
              Name{" "}
            </label>
          </div>

          <div className="relative test-1 w-full mt-10">
            <textarea
              className="rounded bg-gray-200 text-3xl name-input focus:border-gray-900 pt-8 px-4 pb-2 w-full"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              rows="4"
              disabled="true"
            />
            <label
              className="absolute name-label text-4xl left-2 top-2 transition-all px-2 text-gray-600"
              htmlFor="name"
            >
              Name{" "}
            </label>
          </div>
          {/* <label htmlFor="email">email: </label>
          <input
            className="rounded"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">message: </label>
          <input
            className="rounded"
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          /> */}

          <input
            className="bg-blue-300"
            type="submit"
            value="Send Message"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
