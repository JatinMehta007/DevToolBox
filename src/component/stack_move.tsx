"use client";

import { InfiniteMovingCards } from "../ui/moving_stack";
import stack1 from "/accer.png";
import stack2 from "/upslash.png";
import stack3 from "/googel.svg";
import stack4 from "/hero.png";
import stack5 from "/react.png";
import stack6 from "/github.png";
import stack7 from "/tailwindcss.svg";
import stack8 from "/shadcn.svg";
import stack9 from "/figma.png";
import stack10 from "/framer.png";
import stack11 from "/material-ui.svg";
import stack12 from "/bootstrap.svg";


export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
       <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
    <img src={stack1} alt="accertinity " className="w-32" />, 
},
{
    quote:
    <img src={stack2} alt="upslash" className="w-32" />, 
},
{
    quote:
    <img src={stack3} alt="google_font" className="w-32" />, 
},
{
    quote:
    <img src={stack4} alt="google_font" className="w-32" />, 
},

{
    quote:
    <img src={stack5} alt="react" className="w-32" />, 
},

{
    quote:
    <img src={stack6} alt="github" className="w-32" />, 
},

{
    quote:
    <img src={stack7} alt="tailwind" className="w-32" />, 
},
{
    quote:
    <img src="https://goodies.icons8.com/web/common/header/logo/logo-icons8.svg" alt="icons" className="w-32" />, 
},
{
    quote:
    <img src={stack8} alt="shadcn" className="w-32" />, 
},
{
    quote:
    <img src={stack9} alt="figma" className="w-32" />, 
},
{
    quote:
    <img src={stack10} alt="framer" className="w-32" />, 
},
{
    quote:
    <img src={stack11} alt="material-ui" className="w-32" />, 
},

{
    quote:
    <img src={stack12} alt="boostrap" className="w-32" />, 
},
];
