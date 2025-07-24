"use client";

import { ArrowRight } from "lucide-react";
import { WobbleCard } from "../ui/cards";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

export function Logos() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-black h-full  pt-28 space-y-5">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">

          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-green-800 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://www.shopify.com/tools/logo-maker" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Shopify
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
              
                Make a logo you love in minutes. What’s better than a professional logo? A totally free, totally custom logo you make yourself.
                Design yours in no time with Shopify Logo Maker.
              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./logo-maker/shopiy.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-32 xl:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-purple-700 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://www.canva.com/en_in/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Canva
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
            Build a unique brand identity, starting with custom logos you can easily produce and use.
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./logo-maker/canva.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-32 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          </div>


          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-[#05195A] w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px] "
            className=""
            >
          <a href="https://www.ucraft.com/free-logo-maker" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                ucraft
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Choose from our extensive collection of royalty-free icons, shapes, and typography options to bring your creative vision to life.

              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./logo-maker/ucraft.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-36 xl:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-[#0074DF] relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://logo.com/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            logo
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
           #1 Rated logo maker. Generate unique logo designs instantly!
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./logo-maker/logo.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-32 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          </div>
       

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-red-800 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px] "
            className=""
            >
          <a href="https://www.brandcrowd.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                BrandCrowd
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Make a logo design online or browse thousands of premium logos for sale. Start for FREE. AI + templates for fast logos

              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./logo-maker/brandcrowd.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-32 xl:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-blue-900 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://logomakr.com/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            LogoMakr
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
            Make Your
Logo in Minutes
Create professional logos in minutes!
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./logo-maker/logomakr.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-32 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          </div>


        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-[#2AC5B3]  w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px] "
           className=""
            >
          <a href="https://www.designevo.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                DesignEvo
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
              DesignEvo is a free online logo maker with 10,000+ templates that anyone can use to bring to life a compelling, unique logo in minutes.

              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./logo-maker/design.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-32 xl:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-yellow-700 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://www.fiverr.com/logo-maker" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            fiverr
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
           Create a logo you'll love for your brand with Fiverr Logo Maker
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./logo-maker/fiverr.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-32 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          </div>     


        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-black w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
            >
          <a href="https://looka.com/" target="_blank" rel="noopener noreferrer">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Looka
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
             Design your own beautiful brand
Use Looka's AI-powered platform to design a logo and brand you love.

              </p>
               <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            </div>
            <img
              src="./logo-maker/looka.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-32 xl:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-amber-800 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://www.design.com/logo-maker" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Design.com
            </h2>
            <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
           Create your dream logo in seconds
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./logo-maker/design.com.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-32 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>
          </div>     
          
<Footer></Footer>
      </div>
    </>
  );
}
