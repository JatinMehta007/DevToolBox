"use client";

import { InfiniteMovingCards } from "../ui/moving_stack";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex mt-10 md:mt-0 flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className=""
      />
      <div className="">
        <InfiniteMovingCards
          items={testimonials} 
          direction="left"
          speed="slow"
          className=""
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: <img src="/logos/accer.png" alt="accertinity" className="w-20 md:w-28" />,
  },
  {
    quote: <img src="/logos/upslash.png" alt="upslash" className="w-20 md:w-28" />,
  },
  {
    quote: <img src="/logos/googel.svg" alt="google_font" className="md:w-32 w-20" />,
  },
  {
    quote: <img src="/logos/hero.png" alt="hero" className="md:w-32 w-20" />,
  },
  {
    quote: <img src="/logos/react.png" alt="react" className="md:w-32 w-20" />,
  },
  {
    quote: <img src="/logos/github.png" alt="github" className="md:w-32 w-20" />,
  },
  {
    quote: <img src="/logos/tailwindcss.svg" alt="tailwind" className="md:w-32 w-20" />,
  },
  {
    quote: (
      <img
        src="https://goodies.icons8.com/web/common/header/logo/logo-icons8.svg"
        alt="icons8"
        className="md:w-28 w-20"
      />
    ),
  },
  {
    quote: <img src="/logos/shadcn.svg" alt="shadcn" className="md:w-32 w-20" />,
  },
  {
    quote: <img src="/logos/figma.png" alt="figma" className="md:w-32 w-20" />,
  },
  {
    quote: <img src="/logos/framer.png" alt="framer" className="md:w-32 w-20" />,
  },
  {
    quote: (
      <img src="/logos/material-ui.svg" alt="material-ui" className="md:w-32 w-20" />
    ),
  },
  {
    quote: <img src="/logos/bootstrap-.svg" alt="bootstrap" className="md:w-32 w-20" />,
  },
  {
    quote: (
      <img
        src="https://typescale.com/wp-content/themes/typescale/_site/images/logo_header.svg"
        alt="typescale"
        className="md:w-32 w-20"
      />
    ),
  },
  {
    quote: (
      <img
        src="https://www.realtimecolors.com/favicon.png"
        alt="realtime-colors"
        className="md:w-32 w-20"
      />
    ),
  },
  {
    quote: (
      <img
        src="https://huemint.com/assets/img/logo-icon.svg"
        alt="huemint"
        className="md:w-28 w-20"
      />
    ),
  },
  {
    quote: (
      <img
        src="https://lucide.dev/logo.dark.svg"
        alt="lucide icons"
        className="md:w-28 w-20"
      />
    ),
  },
  {
    quote: (
      <img
        src="https://coolors.co/assets/img/logo.svg"
        alt="typescale"
        className="md:w-44 w-24"
      />
    ),
  },
  {
    quote: (
      <img
        src="https://flowbite.com/images/logo.svg"
        alt="flowbite"
        className="md:w-28 w-20"
      />
    ),
  },
  
  {
    quote: (
      <img
      src="https://neon.com/_next/static/svgs/6da928883916f39a4848774319dcaf81.svg"
      alt="typescale"
      className="md:w-32 w-20"
      />
    ),
  },
  {
    quote: (
      <img
        src="/logos/lottieflies.png"
        alt="lottieflies"
        className="md:w-32 w-20"
      />
    ),
  },
  {
    quote: (
      <img
        src="https://aiven.io/assets/logo-aiven-DLhBz3IO.svg"
        alt="typescale"
        className="md:w-44 w-24"
      />
    ),
  },
  {
    quote: <img src="/logos/vercel.png" alt="vercel" className="md:w-32 w-20" />,
  },

  {
    quote: <img src="/logos/netlify.webp" alt="netlify" className="md:w-32 w-20" />,
  },

  {
    quote: <img src="/logos/postman.png" alt="postman" className="md:w-32 w-20" />,
  },

  {
    quote: <img src="/logos/cloudflare.png" alt="cloudflare" className="md:w-44 w-24" />,
  },

  {
    quote: <img src="/logos/removebg.png" alt="removebg" className="md:w-32 w-20" />,
  },

  {
    quote: <img src="/logos/canva.png" alt="canva" className="md:w-32 w-20" />,
  },

  {
    quote: <img src="/logos/chatgpt.webp" alt="canva" className="md:w-48 w-28" />,
  },
  {
    quote: <img src="/logos/gemini.png" alt="canva" className="md:28 w-20" />,
  },

  {
    quote: <img src="/logos/copliot.png" alt="canva" className="44" />,
  },

  {
    quote: <img src="/logos/cursor.png" alt="canva" className="w-24 md:w-auto" />,
  },
  {
    quote: <img src="/logos/meta.png" alt="canva" className="w-24 md:w-auto" />,
  },
  {
    quote: <img src="/logos/cluade.png" alt="canva" className="w-24 md:w-auto" />,
  }
];