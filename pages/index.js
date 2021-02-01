import Head from "next/head";

import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="">
      <NavBar />

      <div className=" ">
        <div className="flex h-screen">
          <article className="border border-purple-500 mt-16">
            <h1 className="md:text-7xl text-4xl font-bold">
              Christopher Warren
            </h1>

            <p className="md:text-3xl">
              O all you host of heaven, O earth – what else? And shall I couple
              hell? O fie! Hold, hold, my heart, And you, my sinews, grow not
              instant old But bear me swiftly up. Remember thee?
            </p>
          </article>
          <div className="border border-purple-500">
            <img src="/kitty.png" />
          </div>
        </div>
        <div className="bg-gray-600 h-96"></div>
      </div>
    </div>
  );
}
