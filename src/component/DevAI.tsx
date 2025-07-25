"use client";

import { ArrowRight } from "lucide-react";
import { WobbleCard } from "../ui/cards";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";
import { Card, Skeleton } from "../ui/DemoCard";

export function DevAI() {
  return (
    <>
      <div className="bg-black h-full   pt-28 space-y-5">
      <Navbar></Navbar>
      <div className="bg-black mt-32 flex   justify-center items-center">
        <Card>
      <Skeleton></Skeleton>
        </Card>
      </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10 md:px-20 lg:px-0 lg:right-14">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-black w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <a
              href="https://chatgpt.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-base md:max-w-base lg:max-w-xs ">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                 ChatGPT
                </h2>
                <p className="mt-4 text-left  lg:text-base/6 md:text-xl text-neutral-200">
                  Get answers. Find inspiration. Be more productive. Join hundreds of millions of users and try ChatGPT today.
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./devai/chatgpt.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-40 xl:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
           <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-blue-800 relative w-full p-3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://gemini.google.com/app?hl=en-IN" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gemini
            </h2>
            <p className="mt-4 max-w-base md:max-w-[350px] lg:max-w-[18rem] text-left  lg:text-base/6 md:text-xl text-neutral-200">
            Meet Gemini, your personal AI assistant. AI for every developer
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./devai/gemini.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-28 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>

         </div>

          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10  md:px-20 lg:px-0 lg:right-14">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-purple-800 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <a
              href="https://github.com/features/copilot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="">
                <h2 className="text-left text-balance text-xl md:text-3xl font-semibold tracking-[-0.015em] text-white">
                 Github Copilot
                </h2>
                <p className="mt-4 text-left w-[50%] lg:text-base/6 md:text-xl text-neutral-200">
                 Delegate open issues to GitHub Copilot and let your coding agent write, run, and test code in the background.
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./devai/copliot.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-28 xl:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
           <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-blue-700 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://www.meta.ai/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl  md:text-3xl font-semibold tracking-[-0.015em] text-white">
            Meta
            </h2>
            <p className="mt-4 max-w-base  md:max-s-[350px] lg:max-w-[18rem] text-left  lg:text-base/6 md:text-xl text-neutral-200">
           Use Meta AI assistant to get things done, create AI-generated images for free, and get answers to any of your questions.
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./devai/meta.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4  lg:-right-[60%] xl:-right-[40%] grayscale filter lg:-bottom-28 xl:-bottom-16 md:-bottom-10 object-contain rounded-2xl"
              />
              </a>
          </WobbleCard>

         </div>



          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto  relative px-1 sm:px-10  md:px-20 lg:px-0 lg:right-14">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 border border-gray-700 lg:border-0  p-3 lg:p-0 h-full bg-orange-700 w-full lg:w-[70%] xl:w-[75%] min-h-[500px] lg:min-h-[300px] "
            className=""
          >
            <a
              href="https://claude.ai/login?returnTo=%2F%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-base lg:max-w-xs">
                <h2 className="text-left text-balance text-xl sm:text-2xl md:text-3xl  lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                 Claude
                </h2>
                <p className="mt-4 text-left  lg:text-base/6 md:text-xl text-neutral-200">
Claude is a next generation AI assistant built by Anthropic and trained to be safe, accurate, and secure to help you do your best work.
                </p>
                <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                  Click the image
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </p>
              </div>
              <img
                src="./devai/cluade.png"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[45%] xl:-right-[30%] grayscale filter lg:-bottom-32 xl:-bottom-10 object-contain rounded-2xl"
              />
            </a>
          </WobbleCard>
           <WobbleCard containerClassName="col-span-1 min-h-[450px] lg:min-h-[300px] p-3 border border-gray-700 lg:border-0 bg-gray-800 relative w-full -3 lg:p-0 lg:right-24 lg:w-[480px] xl:w-[590px]">
            <a href="https://cursor.com/" target="_blank" rel="noopener noreferrer">
            <h2 className="max-w-96  text-left text-balance text-xl  md:text-3xl font-semibold tracking-[-0.015em] text-white">
            Cursor
            </h2>
            <p className="mt-4 max-w-base  lg:max-w-[18rem]  text-left  lg:text-base/6 md:text-xl text-neutral-200">
           The AI Code Editor. Built to make you extraordinarily productive, Cursor is the best way to code with AI.
            </p>
            <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
          Click the image
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </p>
            <img
              src="./devai/cursor.png"
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
