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
          className=" text-blue-600 text-6xl lg:text-9xl font-bold my-5 lg:my-10 lg:mb-20 text-center"
          id="projects"
        >
          Contact
        </h1>
      </div>
      <div className="relative w-full  rounded shadow-a-xl px-5 lg:px-10 py-10  test-1">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="lg:flex lg:flex-row flex-col flex-wrap"
        >
          <div className="relative test-1 lg:w-1/2 pr-0 lg:pr-10">
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
              className="rounded shadow-a-lg bg-white  hover:text-white transition-all absolute right-10 -bottom-5 w-48 text-xl cursor-pointer flex items-center justify-between"
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
                <p className="inline absolute right-2">Send Message</p>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
