/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
        "transparent-black": "rgba(0, 0, 0, 0.545)",
      },
    },
    fontFamily: {
      epiloge: ["Epilogue", "sans-serif"],
    },
    keyframes: {
      fadeInBg: {
        "0%": { opacity: "0", display: "block" },
        "100%": { opacity: "100" },
      },
      fadeOutBg: {
        "0%": { opacity: "100" },
        "100%": { opacity: "0", display: "none", visibility: "hidden" },
      },
      fadInAside: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
      fadOutAside: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(100%)" },
      },
    },
    animation: {
      fadeInBg: "fadeInBg 500ms linear forwards",
      fadInAside: "fadInAside 500ms linear forwards",
      fadeOutBg: "fadeOutBg 500ms linear forwards",
      fadOutAside: "fadOutAside 500ms linear forwards",
    },
    transitionProperty: {
      "height": "height"
    }
  },
  plugins: [],
};
