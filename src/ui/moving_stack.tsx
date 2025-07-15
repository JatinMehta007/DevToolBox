"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      // Set animation duration
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }

      // Set animation direction (normal or reverse)
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "normal" : "reverse"
      );

      setStart(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl mt-[-44px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{
        animationDirection: "var(--animation-direction)",
      }}
    >
      <ul
  ref={scrollerRef}
  className={cn(
    "flex w-max min-w-full shrink-0 h-[200px] flex-nowrap py-4",
    start && "animate-scroll",
    pauseOnHover && "hover:[animation-play-state:paused]"
  )}
  style={{
    animationDirection: `var(--animation-direction)`, 
  }}
>
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative shrink-0  w-[150px] flex items-center justify-center"
          >
            <span className="relative z-20 text-sm font-normal  ">
              {item.quote}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};