"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

type Item = {
  quote: React.ReactNode;
};

type InfiniteMovingCardsProps = {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children) as HTMLElement[];
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

      containerRef.current.style.setProperty("--animation-duration", duration);
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "normal" : "reverse"
      );

      setStart(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl mt-[-44px] pt-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
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
            className="relative shrink-0 w-[150px] flex items-center justify-center"
          >
            <span className="relative z-20 text-sm font-normal">
              {item.quote}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};