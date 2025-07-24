"use client";

import { ArrowRight } from "lucide-react";
import { WobbleCard } from "../ui/cards";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";


export function Tools() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-black h-full  pt-28 space-y-5">
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-black w-full lg:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Vercel
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./tools/vercel-tools.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0  bg-[#36E2E6] relative w-full -3 lg:p-0 lg:right-24 lg:w-[600px]">
            <a
              href="https://www.netlify.com/"
              target="_blank"
    rel="noopener noreferrer"
            >
              <h2 className="max-w-96  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black/80">
                Netlify
              </h2>
              <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-black/80">
                Deploy any modern frontend stack, from marketing sites to AI apps. Join millions of developers and teams shipping faster on Netlify.
              </p>
              <p className="text-black/80 font-medium inline-flex items-center mt-5 gap-2">
                Click the image
                <ArrowRight className="w-4 h-4"></ArrowRight>
              </p>
              <img
                src="./tools/netlify-tools.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-20 lg:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
        </div>


            <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-orange-600 w-full lg:w-[75%] min-h-[500px] lg:min-h-[300px] "
            className=""
          >
            <a
              href="https://www.cloudflare.com/en-in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Cloudflare
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                We make websites, apps, and networks faster and more secure. Our developer platform is the best place to build modern apps and deliver AI initiatives.
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./tools/cloudflare-tools.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-red-800 relative w-full -3 lg:p-0 lg:right-24 lg:w-[600px]">
            <a
              href="https://aiven.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Avien
              </h2>
              <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
                Your AI-ready Open Source Data Platform
Build freely and securely where you want.
              </p>
              <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                Click the image
                <ArrowRight className="w-4 h-4"></ArrowRight>
              </p>
              <img
                src="./tools/avien.png"
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
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-orange-800 w-full lg:w-[75%] min-h-[500px] lg:min-h-[300px] "
            className=""
          >
            <a
              href="https://www.postman.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Postman
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Postman helps you design, test, and manage APIs that power both human workflows and intelligent agents.
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./tools/postman.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-lime-700 relative w-full -3 lg:p-0 lg:right-24 lg:w-[600px]">
            <a
              href="https://neon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Neon
              </h2>
              <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
                Set up serverless Postgres in seconds.
              </p>
              <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                Click the image
                <ArrowRight className="w-4 h-4"></ArrowRight>
              </p>
              <img
                src="./tools/neon.png"
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
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-yellow-600 w-full lg:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <a
              href="https://www.remove.bg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Remove
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Remove Image Background 100% Automatically and Free.
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./tools/Remove-tools.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-sky-700 relative w-full -3 lg:p-0 lg:right-24 lg:w-[600px]">
            <a
              href="https://favicon.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Favicon
              </h2>
              <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
                Quickly generate your favicon from an image by uploading your image.
              </p>
              <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                Click the image
                <ArrowRight className="w-4 h-4"></ArrowRight>
              </p>
              <img
                src="./tools/favicon-tools.png"
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
            <a
              href="https://cssgradient.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  CSS Gradient
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  CSS Gradient is a Designstripe project that lets you create free gradient backgrounds for your website. 
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./tools/CSS_Gradient-tools.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-purple-600 relative w-full -3 lg:p-0 lg:right-24 lg:w-[600px]">
            <a
              href="https://neumorphism.io/#e0e0e0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Neumorphism.io
              </h2>
              <p className="mt-4 max-w-[18rem] text-left  text-base/6 text-neutral-200">
                Neumorphism, also known as soft UI, is a visual design trend that combines elements of skeuomorphism and flat design.
              </p>
              <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                Click the image
                <ArrowRight className="w-4 h-4"></ArrowRight>
              </p>
              <img
                src="./tools/neumorphism-tools.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-20 lg:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
