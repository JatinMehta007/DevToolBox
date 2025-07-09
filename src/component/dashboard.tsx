import { SiTailwindcss } from "react-icons/si";
import { Navbar } from "./navbar";
import { HiSparkles } from 'react-icons/hi';

export const Dashboard = () => {
  return (
    <div className="bg-neutral-900 w-screen h-full text-white">
      <Navbar></Navbar>
      <h1 className="text-center text-6xl tracking-normal leading-tight font-black mt-20 ">
        Discover Essential Tools for <br /> Frontend Developers
      </h1>
      <p className="text-lg tracking-wide text-gray-300 text-center mt-1 max-w-2xl mx-auto">
        Explore curated UI kits, icon packs, font libraries, color generators,
        and design utilities — all in one place.
      </p>

      {/* // TAILWINDCSS */}
      <div className="grid bg-neutral-800 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
        <div className="  flex items-center ">
          <div className=" font-semibold flex ">
            <div className=" flex ">
              <div className="">
                <SiTailwindcss size={44} className="text-sky-400 mx-5 " />
              </div>
              <p className="text-3xl ">
                Tailwind CSS
                <p className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                  Rapidly build modern websites without ever leaving your
                  HTML.Tailwind is unapologetically modern, and takes advantage
                  of all the latest and greatest CSS features to make the
                  developer experience as enjoyable as possible.
                </p>
              </p>
            </div>
          </div>
          <div className="self-end  uppercase rounded-2xl  m-10">
            <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">css</p>
          </div>
        </div>
        <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
          <iframe
            src="https://tailwindcss.com"
            title="Tailwind CSS Dashboard"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* // Framer */}
      <div className="grid bg-neutral-800 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
        <div className="  flex items-center ">
          <div className=" font-semibold flex ">
            <div className=" flex ">
              <div className="">
                <HiSparkles size={44} className="text-sky-400 mx-5 " />
              </div>
              <p className="text-3xl ">
                heroicons
                <p className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                  Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
                </p>
              </p>
            </div>
          </div>
          <div className="self-end  uppercase rounded-2xl  m-10">
            <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">css</p>
          </div>
        </div>
        <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
          <iframe
            src="https://heroicons.com/"
            title="Tailwind CSS Dashboard"
            className="w-full h-full"
          ></iframe>
        </div>
        </div>
    </div>
  );
};
