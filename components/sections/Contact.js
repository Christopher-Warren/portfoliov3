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

  //   useEffect(() => {
  //     const getData = async () => {
  //       const { data } = await axios.get("/api/test");
  //       console.log(data);
  //     };
  //     getData();
  //     return () => {
  //       //nothing
  //     };
  //   }, []);

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
      <div className="w-full h-96 rounded shadow-lg bg-gray-700">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">name: </label>
          <input
            className="rounded"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">email: </label>
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
          />

          <input type="submit" value="Send Message"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
