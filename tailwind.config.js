/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik"],
    },
    extend: {
      backgroundImage: {
        customGradient:
          "linear-gradient(107.46deg, rgba(110, 113, 254, 0.12) 0%, rgba(157, 159, 242, 0.12) 99.15%)",
      },
      dropShadow: {
        "3xl": "2px 2px 10px 0px (#E9E9FD80)",
      },
     
    },
    
     backgroundColor: {
        lineBackground: "linear-gradient(148.78deg, rgba(255, 255, 255, 0.62) -18.48%, rgba(255, 255, 255, 0.12) 82.59%)"
      }
  },
  //   exports = {
  //   plugins: {
  //     "postcss-import": {},
  //     tailwindcss: [],
  //     autoprefixer: {},
  //   },
  // },
  //   // [],

  // background: linear-gradient(107.46deg, rgba(110, 113, 254, 0.12) 0%, rgba(157, 159, 242, 0.12) 99.15%);
};
