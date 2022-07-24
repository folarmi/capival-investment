module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "325px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#33458D",
        secondary: "#C6211B",
        blueOne: "#A4B5E233",
        blueTwo: "#3B58A8",
        blueThree: "#8EA8DD",
        blueFour: "#CBE1FD",
        blueFive: "#699DEE",
        blueSix: "#E8ECF5",
        blueSix: "#DEE3F0",
        redOne: "#C6211B",
        redTwo: "#AE1F24",
        orange: "#C06B29",
      },
      // backgroundImage: {
      //   login: "url('../../icons/loginBg.png')",
      // },
    },
  },
  plugins: [],
};
