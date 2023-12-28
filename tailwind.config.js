/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "9dvh": "9dvh",
      },
      gap: {
        "3rem": "3rem",
      },

      boxShadow: {
        buttons: "inset 0 0 15px white",
        hoverBtns: "inset 0 0 25px white",
        hoverFins: "inset 0 0 5px midnightblue",
        hoverFins2: "inset 0 0 5px white",
        input: "0 0 10px aliceblue",
        priceBox: "1px 1px 8px 1px rgba(237, 237, 255, 0.4)",
        watchList: "0 0 10px rgba(25, 25, 112, 0.5)",
        appHeader: "0 5px 5px rgba(25, 25, 112, 0.5)",
        statPrice: "0px 0px 5px rgba(25, 25, 112, 0.5)",
        statPrice2: "0px 0px 20px rgba(25, 25, 112, 0.5)",
        infoTable: "0px 0px 5px lightblue",
        sensitivityX: "0 2px 10px purple",
        sensitivityY: "2px 0 10px midnightblue",
        tableHeaderEA: "0 4px 10px skyblue",
        tableHeaderEA2: "0 2px 5px darkblue",
        biBarNeg: "inset 0 0 10px #dc2626",
        biBarPos: "inset 0 0 10px #1e3a8a",
        biMiddleCirc: "inset 0 0 25px #e5e5e5",
        detailBoxNeg: "inset 0 0 6px red",
        detailBoxPos: "inset 0 0 6px blue",
        buyBtn: "inset 0 0 5px lightskyblue",
        sellBtn: "inset 0 0 5px yellow",
      },

      dropShadow: {
        gridderInd: "2px 2px 5px rgba(25, 25, 112, 0.5)",
        gridderBld: "2px 2px 7px rgba(25, 25, 112, 0.65)",
        detailBoxHeaderN: "2px 2px 5px red",
        boxScoreTotalN: "3px 3px 5px red",
        boxScoreTotalP: "3px 3px 5px blue",
      },
      keyframes: {
        "rotate-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "spin-slow": "rotate-slow 20s linear infinite", // Define the animation class
      },
    },
  },
  plugins: [],
};
