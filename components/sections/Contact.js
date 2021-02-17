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
          className=" text-blue-600 text-6xl lg:text-8xl font-bold my-14 lg:my-10 lg:mb-20 text-center"
          id="projects"
        >
          Contact
        </h1>
      </div>
      <div className="relative w-full  rounded shadow-a-xl px-5 lg:px-10 pb-10 p-14 flex">
        <div className="absolute top-0 left-0 mx-5 lg:mx-10 -my-5 text-white text-xl">
          <button className="py-2 px-3 bg-blue-500 rounded shadow-md hover:bg-blue-600">
            <svg
              className="inline w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
            </svg>
            <div className="lg:inline hidden px-2">Email</div>
          </button>

          <button className="py-2 px-3 bg-blue-500 rounded mx-2 lg:mx-5 shadow-md hover:bg-blue-600">
            <svg
              className="inline w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <div className="lg:inline hidden px-2">LinkedIn</div>
          </button>

          <button className="py-2 px-3 bg-blue-500 rounded shadow-md hover:bg-blue-600">
            <svg
              className="inline w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            <div className="px-2 inline">Resume</div>
          </button>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="lg:flex lg:flex-row flex-col flex-wrap w-full"
        >
          <div className="relative lg:w-1/2 pr-0 lg:pr-10 test-1">
            <input
              className="rounded bg-gray-200 text-2xl lg:text-3xl name-input focus:border-gray-900 pt-5 px-4 pb-2 w-full"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              className="absolute name-label text-3xl  left-2 bottom-2 transition-all px-2 pb-1 text-gray-600 pointer-events-none"
              htmlFor="name"
            >
              Name{" "}
            </label>
          </div>

          <div className="relative test-1 lg:w-1/2 ">
            <input
              className="rounded bg-gray-200 text-2xl lg:text-3xl name-input focus:border-gray-900 mt-5 lg:mt-0 pt-5 px-4 pb-2 w-full"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="absolute name-label text-3xl  left-2 bottom-2 transition-all px-2 pb-1 text-gray-600  pointer-events-none"
              htmlFor="name"
            >
              Email{" "}
            </label>
          </div>

          <div className="relative test-1 w-full mt-10">
            <textarea
              className="rounded bg-gray-200 text-2xl lg:text-3xl name-input focus:border-gray-900 pt-8 px-4 pb-2 w-full"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
            />
            <label
              className="absolute name-label text-3xl  left-2 top-2 transition-all px-2 text-gray-600 pointer-events-none"
              htmlFor="name"
            >
              Message{" "}
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
          <div className="">
            {/* <input
              className="bg-blue-600 text-white rounded shadow-a-xl absolute right-10 -bottom-5 px-5 py-2 cursor-pointer"
              type="submit"
              value="Send Message"
            ></input> */}

            <button
              type="submit"
              className="rounded shadow-a-lg bg-white  hover:text-white transition-all absolute right-5 lg:right-10 -bottom-5 w-48 text-xl cursor-pointer flex items-center justify-between"
            >
              <div className="inline test-1 bg-blue-600 p-2 h-10 w-3/12 contact-button transition-all rounded">
                <svg
                  className="absolute text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24px"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <p className="inline absolute right-2 text-xl">Send Message</p>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
