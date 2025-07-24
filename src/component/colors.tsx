"use client";

import { ArrowRight } from "lucide-react";
import { WobbleCard } from "../ui/cards";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

export function Colors() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-black h-full  pt-28 space-y-5">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">

          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-blue-800 w-full lg:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Coolors
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
               The Super Fast color palettes generator!Create the perfect palette or get inspired by thousands of beautiful color schemes.
              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./color.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-purple-900 relative w-full -3 lg:p-0 lg:right-24 lg:w-[600px]">
            <a href="https://www.happyhues.co/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Happyhues
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
            Happy Hues is a color palette inspiration site that acts as a real world example as to how the colors could be used in your design projects.
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./colors/happy-color.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-20 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          </div>


          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">

          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-blue-900 w-full lg:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://huemint.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Huemint
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
               The Super Fast color palettes generator!Create the perfect palette or get inspired by thousands of beautiful color schemes.
              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./colors/heumint-color.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-red-900 relative w-full -3 lg:p-0 lg:right-24 lg:w-[600px]">
            <a href="https://www.realtimecolors.com/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Realtime Colors
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
            Visualize Your Colors & Fonts On a Real Site. Choosing colors or typography for your website?
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./colors/real-color.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          </div>


             <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">

          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-black w-full lg:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://uicolors.app/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                UI colors
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
               Instantly create stunning color scales by entering a base color or hitting the spacebar.
              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./colors/UI-color.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-yellow-600 relative w-full -3 lg:p-0 lg:right-24 lg:w-[600px]">
            <a href="https://colorhunt.co/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Color Hunt
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
            Curated beautiful palettes

            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./colors/Hunt-color.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          </div>



          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">

          
          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-pink-800 w-full lg:w-[75%] min-h-[500px] lg:min-h-[300px] "
            className=""
            >
          <a href="https://www.grabient.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Grabient
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
               Instantly create stunning color scales by entering a base color or hitting the spacebar.
              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./colors/gradient.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-violet-900 relative w-full -3 lg:p-0 lg:right-24 lg:w-[600px]">
            <a href="https://pigment.shapefactory.co/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Pigment
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
               Pigment by ShapeFactory. Beautiful gradient generator

            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./colors/Pigment-color.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          </div>


             
<Footer></Footer>
      </div>
    </>
  );
}
