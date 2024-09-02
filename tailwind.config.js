/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        general: ["Light","sans-serif"],
        quick: ["Medium","sans-serif"]
      },
    },
  },
  plugins: [],
}