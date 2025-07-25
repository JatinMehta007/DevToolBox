"use client";

import { ArrowRight } from "lucide-react";
import { WobbleCard } from "../ui/cards";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

export function Icons() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-black h-full  pt-28 space-y-5">
                 <h1 className=" text-center text-3xl sm:text-5xl p-3 xl:p-0 xl:text-7xl tracking-normal leading-tight font-black xl:mt-12 text-white ">
Free & Open Source Icon Packs – <br /> <span>Lucide, Heroicons</span>
      </h1>
      <p className="text-base md:text-xl p-3 xl:p-0 xl:text-xl tracking-wide text-gray-300 text-center mt-1 max-w-2xl mx-auto">
         Browse developer-friendly icon libraries like Icons8, Tabler, Bootstrap, and more. Easily copy and use in your React or HTML projects.
      </p>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-pink-800 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <a
              href="https://heroicons.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Heroicons
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Beautiful hand-crafted SVG icons, by the makers of Tailwind
                  CSS.Created by Tailwind team; clean and developer-first icons
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./icons/heroicons.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-28 xl:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[450px] md:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-amber-800 relative w-full p-3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a
              href="https://icons.getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Bootstrap
              </h2>
              <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
                Free, high quality, open source icon library with over 2,000
                icons. Include them anyway you like—SVGs, SVG sprite, or web
                fonts. Use them with or without Bootstrap in any project.
              </p>
              <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                Click the image
                <ArrowRight className="w-4 h-4"></ArrowRight>
              </p>
              <img
                src="./icons/bootstrap.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4  lg:-right-[40%] xl:-right-[40%] grayscale filter lg:-bottom-36 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
        </div>



        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-yellow-600 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <a
              href="https://fontawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Font Awesome
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Serving up new icons, styles, and improvements in July 2025.
                  Pre-order before launch and get a discounted price!
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./icons/font_awesome.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-36 xl:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-green-700 lg:border-0 bg-green-700 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
              <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Icons8
              </h2>
              <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
                Large icon packs of over 10k icons, so you can find visually
                consistent icons for all your designs.
              </p>
              <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                Click the image
                <ArrowRight className="w-4 h-4"></ArrowRight>
              </p>
              <img
                src="./icons.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4  lg:-right-[40%] xl:-right-[40%] grayscale filter lg:-bottom-32 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14 ">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-indigo-700 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <a
              href="https://phosphoricons.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Phosphor Icons
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Phosphor is a flexible icon family for interfaces, diagrams,
                  presentations — whatever, really.
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./icons/phosphor.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-28 xl:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-amber-800 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a
              href="https://remixicon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Remix Icon
              </h2>
              <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
                Open-source neutral-style system symbols elaborately crafted for
                designers and developers. All of the icons are free for both
                personal and commercial use.
              </p>
              <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                Click the image
                <ArrowRight className="w-4 h-4"></ArrowRight>
              </p>
              <img
                src="./icons/resmix.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4  lg:-right-[40%] xl:-right-[40%] grayscale filter lg:-bottom-28 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-blue-800 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <a
              href="https://tabler.io/icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Tabler Icons
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Free and open source icons designed to make your website or
                  app attractive, visually consistent and simply beautiful.
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./icons/tabler.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-32 xl:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-red-800 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a
              href="https://lucide.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Lucide
              </h2>
              <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
                Beautiful & consistent icons Made by the community.
              </p>
              <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                Click the image
                <ArrowRight className="w-4 h-4"></ArrowRight>
              </p>
              <img
                src="./icons/lucide.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4  lg:-right-[40%] xl:-right-[40%] grayscale filter lg:-bottom-28 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
