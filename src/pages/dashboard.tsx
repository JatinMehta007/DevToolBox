import { SiTailwindcss } from "react-icons/si";
import { Navbar } from "../component/navbar";
import { InfiniteMovingCardsDemo } from "../component/stack_move";
import { useEffect, useState } from "react";
import { Footer } from "../component/Footer";

export const Dashboard = () => {
   const [searchTerm] = useState("");

 useEffect(() => {
  const cards = document.querySelectorAll("[data-searchable]");
  cards.forEach((card) => {
    const element = card as HTMLElement; // ✅ cast to HTMLElement
    const text = element.innerText.toLowerCase();
    const match = text.includes(searchTerm.toLowerCase());
    element.style.display = match ? "block" : "none";
  });
}, [searchTerm]);

  return (
    <div className="bg-stone-900 w-screen h-full text-white pt-32">
      <Navbar></Navbar>
      <h1 className=" text-center text-7xl tracking-normal leading-tight font-black mt-20 ">
        Discover Essential Tools for <br /> <span>Frontend Developers</span>
      </h1>
      <p className="text-lg tracking-wide text-gray-300 text-center mt-1 max-w-2xl mx-auto">
        Explore curated UI kits, icon packs, font libraries, color generators,
        and design utilities — all in one place.
      </p>


      
      {/* // TAILWINDCSS */}
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="grid bg-neutral-800 divide-solid divide-x divide-sky-400 border-sky-400 border-2 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
          <div className="  flex items-center ">
            <div className=" font-semibold flex ">
              <div className=" flex ">
                <div className="">
                  <SiTailwindcss size={44} className="text-sky-400 mx-5 " />
                </div>
                <p className="text-3xl">
                  Tailwind CSS
                  <br />
                  <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                    Rapidly build modern websites without ever leaving your
                    HTML.Tailwind is unapologetically modern, and takes
                    advantage of all the latest and greatest CSS features to
                    make the developer experience as enjoyable as possible.
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
      </a>

      {/* UI */}

      <a
        href="https://ui.aceternity.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="grid bg-neutral-800 grid-cols-2 border-solid divide-solid divide-gray-400 divide-x border-gray-400 border-2 min-h-fit mt-20 m-28 rounded-3xl ">
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
                  <br />
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
            <img src="./acertinity-ui.png" alt="" />
          </div>
        </div>
      </a>

      {/* //Font */}

      <a
        href="https://fonts.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="grid bg-neutral-800 border-solid divide-solid divide-yellow-600 divide-x-2 border-yellow-600 border-2 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
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
                  <br />
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
      </a>
      {/* framer */}

      <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
        <div className="grid bg-neutral-800 border-solid divide-solid divide-pink-400 divide-x-2 border-pink-400 border-2 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
          <div className="flex items-center ">
            <div className=" font-semibold flex ">
              <div className=" flex ">
                <div className="">
                  {/* <HiSparkles size={44} className="text-sky-400 mx-5 " /> */}
                  <img
                    src="./figma.svg"
                    alt="heropatterns"
                    className="mx-5 size-10"
                  />
                </div>
                <p className="text-3xl pl-10">
                  Figma
                  <br />
                  <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                    Think bigger. Build faster. Figma helps design and
                    development teams build great products, together.
                  </span>
                </p>
              </div>
            </div>
            <div className="self-end  uppercase rounded-2xl  m-10">
              <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">
                design
              </p>
            </div>
          </div>
          <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
            <img src="./framer1.png" alt="" />
          </div>
        </div>
      </a>

      {/* // upsplash */}

      <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
        <div className="grid bg-neutral-800 border-solid divide-solid divide-gray-400 divide-x-2 border-gray-400 border-2 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
          <div className="flex items-center ">
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
                  <br />
                  <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                    Yes, it’s really free. All images can be downloaded and used
                    for personal or commercial projects. The internet’s source
                    for visuals. Powered by creators everywhere.
                  </span>
                </p>
              </div>
            </div>
            <div className="self-end  uppercase rounded-2xl  m-10">
              <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">
                images
              </p>
            </div>
          </div>
          <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
            <img src="./image.png" alt="" />
          </div>
        </div>
      </a>

      {/* ICONS */}

      <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
        <div className="grid bg-neutral-800 border-solid divide-solid divide-green-400 divide-x-2 border-green-400 border-2 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
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
                  <br />
                  <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                    Original stock graphics by our team, plus design apps and AI
                    tools. The ultimate design kit for creatives and developers
                  </span>
                </p>
              </div>
            </div>
            <div className="self-end  uppercase rounded-2xl  m-10">
              <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">
                icons
              </p>
            </div>
          </div>
          <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
            <img src="./icons.png" alt="" />
          </div>
        </div>
      </a>

      {/* color pallete */}

      <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer">
        <div className="grid bg-neutral-800 border-solid divide-solid divide-blue-400 divide-x-2 border-blue-400 border-2 grid-cols-2 min-h-fit mt-20 m-28 rounded-3xl ">
          <div className="  flex items-center ">
            <div className=" font-semibold flex ">
              <div className=" flex ">
                <p className="text-3xl pl-20">
                  Coolors
                  <br />
                  <span className="font-normal   text-gray-400 tracking-wide text-base mt-1">
                    The super fast color palettes generators. Create the perfect
                    pallete or get inspired by thousands of beautifull color
                    schemes.
                  </span>
                </p>
              </div>
            </div>
            <div className="self-end  uppercase rounded-2xl  m-10">
              <p className="bg-neutral-600 p-2 rounded-xl px-3 text-sm">
                color
              </p>
            </div>
          </div>
          <div className="w-full h-[300px] rounded-br-3xl rounded-tr-3xl overflow-hidden">
            <img src="./color.png" alt="" />
          </div>
        </div>
      </a>
      {/* <Stack></Stack> */}
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      <Footer></Footer>
    </div>
  );
};
