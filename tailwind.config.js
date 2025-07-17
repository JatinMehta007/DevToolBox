/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Add Press Start 2P for retro ASCII art headers
        p2p: ['"Press Start 2P"', "monospace"],
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)", // fixed
          },
        },
         move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) linear infinite",
        move: "move 5s linear infinite",
      },
    },
  },
  plugins: [],
};
