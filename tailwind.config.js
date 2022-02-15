module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ringWidth: {
        DEFAULT: "0px",
      },
    },
    fontFamily: {
      yahei: ["Microsoft YaHei"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
