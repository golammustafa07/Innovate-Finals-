/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "sans" : ["Open Sans", "sans-serif"],
        "pap" : ["Paprika", "system-ui"],
        "robo" : ["Roboto", "system-ui"],
        "nun" : ["Nunito", "system-ui"]
      },
      maxWidth : {
        "container" : "1170px",
        "containerx" : "1920px"
      },
      colors : {
        "primary" : "#FF7628"
      }
    },
  },
  plugins: [],
}