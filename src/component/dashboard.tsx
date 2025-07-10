import { SiTailwindcss } from "react-icons/si";
import { Navbar } from "./navbar";
import { InfiniteMovingCardsDemo } from "./stack_move";

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
                <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                  Rapidly build modern websites without ever leaving your
                  HTML.Tailwind is unapologetically modern, and takes advantage
                  of all the latest and greatest CSS features to make the
                  developer experience as enjoyable as possible.
                </span>
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

      {/* UI */}
      <div className="grid bg-neutral-800 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
        <div className="  flex items-center ">
          <div className=" font-semibold flex ">
            <div className=" flex ">
              <div className="">
                {/* <HiSparkles size={44} className="text-sky-400 mx-5 " /> */}
                <img
                  src="./accer.png"
                  alt="acertinity"
                  className="mx-5 size-10"
                />
              </div>
              <p className="text-3xl pl-10">
                Aceternity UI
                <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                  Make your websites look 10x better. Copy paste the most
                  trending components and use them in your websites without
                  having to worry about styling and animations.
                </span>
              </p>
            </div>
          </div>
          <div className="self-end  uppercase rounded-2xl  m-10">
            <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">UI</p>
          </div>
        </div>
        <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
          <img src="./UI.png" alt="" />
        </div>
      </div>

      {/* //Font */}

      <div className="grid bg-neutral-800 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
        <div className="  flex items-center ">
          <div className=" font-semibold flex ">
            <div className=" flex ">
              <div className="">
                {/* <HiSparkles size={44} className="text-sky-400 mx-5 " /> */}
                <img
                  src="./googel.svg"
                  alt="heropatterns"
                  className="mx-5 size-10"
                />
              </div>
              <p className="text-3xl pl-10">
                Google Fonts
                <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                  Create stunning typography, generate CSS, and find
                  inspiration. What are you waiting for?
                </span>
              </p>
            </div>
          </div>
          <div className="self-end  uppercase rounded-2xl  m-10">
            <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">Font</p>
          </div>
        </div>
        <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
          <img src="./font.png" alt="" />
        </div>
      </div>

      {/* // Framer */}

      <div className="grid bg-neutral-800 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
        <div className="  flex items-center ">
          <div className=" font-semibold flex ">
            <div className=" flex ">
              <div className="">
                {/* <HiSparkles size={44} className="text-sky-400 mx-5 " /> */}
                <img
                  src="./upslash.png"
                  alt="heropatterns"
                  className="mx-5 size-10"
                />
              </div>
              <p className="text-3xl pl-10">
                Unsplash
                <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                  Yes, it’s really free. All images can be downloaded and used
                  for personal or commercial projects. The internet’s source for
                  visuals. Powered by creators everywhere.
                </span>
              </p>
            </div>
          </div>
          <div className="self-end  uppercase rounded-2xl  m-10">
            <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">images</p>
          </div>
        </div>
        <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
          <img src="./image.png" alt="" />
        </div>
      </div>

      {/* ICONS */}
      <div className="grid bg-neutral-800 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
        <div className="  flex items-center ">
          <div className=" font-semibold flex ">
            <div className=" flex ">
              <div className="">
                <img
                  src="https://goodies.icons8.com/web/common/header/logo/logo-icons8.svg"
                  alt="icons"
                  className="mx-5 size-10"
                />
              </div>
              <p className="text-3xl pl-10">
                ICONS8
                <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                 Original stock graphics by our team, plus design apps and AI tools. The ultimate design kit for creatives and developers
                </span>
              </p>
            </div>
          </div>
          <div className="self-end  uppercase rounded-2xl  m-10">
            <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">icons</p>
          </div>
        </div>
        <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
          <img src="./icons.png" alt="" />
        </div>
      </div>
      {/* color pallete */}

      <div className="grid bg-neutral-800 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
        <div className="  flex items-center ">
          <div className=" font-semibold flex ">
            <div className=" flex ">
              <p className="text-3xl pl-20">
                Coolors
                <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                  The super fast color palettes generators. Create the perfect
                  pallete or get inspired by thousands of beautifull color
                  schemes.
                </span>
              </p>
            </div>
          </div>
          <div className="self-end  uppercase rounded-2xl  m-10">
            <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">color</p>
          </div>
        </div>
        <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
          <img src="./color.png" alt="" />
        </div>
      </div>
        {/* <Stack></Stack> */}
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
    </div>
  );
};
