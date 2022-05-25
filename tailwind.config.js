module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#09E9F1",

          secondary: "#966FB3",

          accent: "#FFE999",

          neutral: "#3B8BC4",

          "base-100": "#345CA8",

          info: "#2463EB",

          success: "#16A249",

          warning: "#DB7706",

          error: "#DC2828",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
