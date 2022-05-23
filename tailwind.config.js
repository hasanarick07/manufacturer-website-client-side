module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#06b6d4",

          secondary: "#10b981",

          accent: "#1f2937",

          neutral: "#374151",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#34d399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
