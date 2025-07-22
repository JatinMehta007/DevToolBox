"use client";

import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { WobbleCard } from "../ui/cards";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

type CommandBlock = {
    title : string;
    lines : string[];
}

type LibraryBlock = {
    Name : string;
    description : string;
    commands : CommandBlock[];
}
export function Command() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(id);
      setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2s
    });
  };

  const blocks : LibraryBlock[] = [
        {
            Name : "React",
            description:"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
            commands : [
                {
                    title : "Classic way to start",
                    lines : ["npm create-react-app my-app","cd my-app",  "npm start"]
                },
                {
                    title : "using vite",
                    lines : ["npm create vite@latest my-app -- --template react","cd my-app",  "npm install","npm run dev"]
                },
              
            ]
        },
        {
            Name : "Next.js",
            description:"Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
            commands : [
                {
                    title : "App Router",
                    lines : ["npx create-next-app@latest my-app","cd my-app",  "npm run dev"]
                }
            ]
        },
         {
            Name : "Express",
            description:"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
            commands : [
                {
                    title : "Basic Setup",
                    lines : ["npm init -y","npm install express",  "touch index.js"]
                },
                {
                    title:"index.js:",
                    lines : ["const express = require('express')", "const app = express();","app.get'(/', (req, res) => res.send('Hello World!'));", "app.listen(3000, () => console.log('Server running on port 3000'));"]
                }
            ]
        },
         {
            Name : "Vue.js",
            description:"The Progressive JavaScript Framework An approachable, performant and versatile framework for building web user interfaces.",
            commands : [
                {
                    title : "using vite",
                    lines : ["npm create vite@latest my-app -- --template vue", "cd my-app"]
                },
                {
                    title:"index.js:",
                    lines : ["const express = require('express')", "const app = express();","app.get'(/', (req, res) => res.send('Hello World!'));", "app.listen(3000, () => console.log('Server running on port 3000'));"]
                }
            ]
        },
        {
           Name : "Tailwind CSS",
           description :"Get started with Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file it's fast, flexible, and reliable — with zero-runtime.Rapidly build modern websites without ever leaving your HTML.",
           commands:[
               {
                   title:"with Vite + React",
                   lines : ["npm create vite@latest my-app -- --template react","cd my-app","npm install","npm install -D tailwindcss postcss autoprefixer","npx tailwindcss init -p"]
               },
               {
                   title : "Update tailwind.config.js:",
                   lines : ["content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']"] 
               },
               {
                   title : "Update index.css:",
                   lines : ["@tailwind base;","@tailwind components;,","@tailwind utilities;"] 
               }
           ]
       },
        {
            Name : "MongoDB",
            description :"You don't need a separate database to handle transactions, rich search, or generative AI. The world's most popular modern database adapts and scales to handle all your application requirements.",
            commands:[
                {
                    title:"Local with Mongoose",
                    lines : ["npm install mongoose"]
                },
                {
                    title : "Estabilish connection:",
                    lines : ["import mongoose from 'mongoose';", "mongoose.connect('mongodb://localhost:27017/mydb')",".then(() => console.log('Connected to MongoDB'))",".catch((err) => console.error(err));"] 
                }
            ]
        },
        {
            Name : "Docker",
            description : "Accelerate how you build, share, and run applications Docker helps developers build, share, run, and verify applications anywhere — without tedious environment configuration or management.",
            commands : [
                {
                    title:"Dockerfile:",
                    lines : [
                        "FROM node:18",
                        "WORKDIR /app",
                        "COPY package*.json ./",
                        "RUN npm install",
                        "COPY . .",
                        "CMD ['node', 'index.js']",
                        "EXPOSE 3000"
                    ],
                },
                {
                    title: "Build & Run:",
                    lines : [
                        "docker build -t my-node-app .",
                        "docker run -p 3000:3000 my-node-app"
                    ]
                }
            ]
        }
  ]

  const bgColors=[
    "bg-sky-700",
    "bg-gray-900",
    "bg-yellow-600",
    "bg-green-800",
    "bg-blue-800",
    "bg-green-900",
    "bg-blue-900", 
  ]

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen pt-28 space-y-5 pb-10">
            {blocks.map((block,blockIndex)=>(
          <WobbleCard
            containerClassName={`grid  ${bgColors[blockIndex % bgColors.length]} w-[90%] md:w-[80%] `}
            className=""
          >
                <div key={blockIndex} className="max-w-xs">
              <h2 className="text-left text-xl md:text-3xl font-semibold tracking-[-0.015em] text-white">
                {block.Name}
              </h2>
              <p className="mt-4 text-left text-neutral-200">
              {block.description}
              </p>
              <p className="text-white/90 font-medium inline-flex items-center mt-5 gap-2">
                Copy the command
                <ArrowRight className="w-4 h-4" />
              </p>
            </div>

            <div className="lg:absolute right-0 lg:top-0 m-6 lg:w-[53%] xl:w-[62%] flex flex-col  gap-4">
            {block.commands.map((cmd, cmdIndex) => {
                const id = `${blockIndex}-${cmdIndex}`;
                return (
                    <div key={cmdIndex} className="text-white rounded-xl grayscale">
          <div className="bg-stone-800 flex rounded-t-xl border-b border-b-gray-400">
            <p className="p-2">
              bash{" "} <span className="text-gray-400">/ {cmd.title}</span>
            </p>
            <div
              className="flex items-center ml-auto pr-2 cursor-pointer"
              onClick={() => handleCopy(cmd.lines.join("\n"), id)}
              >
              {copiedIndex ===id ? (
                  <Check className="text-green-400 w-5 h-5" />
                ) : (
                    <Copy className="text-gray-400 hover:text-white w-5 h-5" />
                )}
              <p className="pl-2 text-gray-400">
                {copiedIndex === id ? "Copied" : "Copy"}
              </p>
            </div>
          </div>
          <div className="p-2 bg-zinc-900 rounded-b-xl text-gray-400 font-mono">
            {cmd.lines.map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
            ))}
          </div>
        </div>
        );
})}
            </div>
          </WobbleCard>
            ))}
        

<Footer></Footer>
</div>

    </>
  );
}