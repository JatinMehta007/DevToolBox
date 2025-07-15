"use client";

import { ArrowRight } from "lucide-react";
import { WobbleCard } from "../ui/cards";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

export function UI() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-black h-full  pt-28 space-y-5">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4  mx-auto  relative right-14">
          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 h-full bg-black w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
               Aceternity UI
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Copy paste the most trending components and use them in your websites without having to worry about styling and animations.
              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="/acertinity-ui.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-amber-800 relative right-24 w-[600px]">
            <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Shadcn UI
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
           A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. 

            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./ui/Shadcn-Ui.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>   
</div>




           <div className="grid grid-cols-1  lg:grid-cols-3 gap-4  mx-auto  relative right-14">
          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://flowbite.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
               Flowbite UI
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Build websites even faster with components on top of Tailwind CSS.
              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./ui/Flowbite-ui.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-violet-800 relative right-24 w-[600px]">
            <a href="https://uiverse.io/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            UIverse
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
           The Largest Library of Open-Source UI. Community-built library of UI elements. Copy as HTML/CSS, Tailwind, React and Figma.

            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./ui/uiverse-ui.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>   
</div>
   
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4  mx-auto  relative right-14">
          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 h-full bg-green-800 w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://www.hyperui.dev/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
               HyperUI
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                HyperUI is a collection of free Tailwind CSS components that can be used in your next project. With a range of components
              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./ui/hyper-ui.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-indigo-800 relative right-24 w-[600px]">
            <a href="https://merakiui.com/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            MerakiUI
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
           Build stunning, responsive interfaces with our premium collection of Tailwind CSS components.

            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./ui/meraki-ui.png"
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
