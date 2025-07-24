"use client";

import { ArrowRight } from "lucide-react";
import { WobbleCard } from "../ui/cards";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

export function Fonts() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-black h-full  pt-28 space-y-5">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">

          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-blue-800 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Google fonts
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
               1,500+ open-source fonts,	Fast CDN (served from Google servers), Easy to embed in HTML or CSS, Previews for each font in different weights, Supports language subsets
              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./fonts/google-fonts.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-28 xl:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-amber-800 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://www.fontshare.com/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Fontshare
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
             Beautiful free fonts from Indian Type Foundry

            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./fonts/fontshare.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-28 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          
</div>

<div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">

          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-pink-800 w-full lg:w-[70%] xl:w-[75%]min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://fonts.adobe.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Adobe fonts
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
               Every font you need, everywhere you need it
Find the perfect font. Premium fonts (paid Adobe Creative Cloud)

              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./fonts/adobe-font.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-28 xl:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-sky-700 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://typescale.com/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Typescale
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
             Unlock the full potential of your business. Start your journey today and experience the future of business software.

            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./fonts/typescale-font.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-28 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          
</div>


<div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">

          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-emerald-800 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://fontjoy.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Fontjoy
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
               Font pairing made simple. Generate font combinations with deep learning

              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./fonts/fontjoy-font.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-28 xl:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-black-80 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://uncut.wtf/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Uncut
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
             Start your journey today and experience the future of business software.

            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./fonts/uncut-font.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-28 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          
</div>



<div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">

          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-[#A27EAF]   w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
          <a href="https://www.fontsquirrel.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Fontsquirrel
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Free fonts have met their match. We know how hard it is to find quality freeware that is licensed for commercial work. 

              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./fonts/fontsquirrel-font.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-28 xl:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-indigo-800 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://velvetyne.fr/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Velvetyne
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
            Velvetyne is an association and collective dedicated to researching and disseminating typography and typeface creation. 

            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./fonts/velvetyne-font.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-28 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          
</div>
<Footer></Footer>
      </div>
    </>
  );
}
