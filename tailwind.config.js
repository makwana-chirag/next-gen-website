// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // <- add this if you have a src/ folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(180deg, rgba(46,111,182,0.4) 0%, rgba(123,174,224,0.4) 100%)",
      },
    },
  },
  plugins: [],
};
