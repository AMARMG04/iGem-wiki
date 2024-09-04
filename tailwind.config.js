/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCream: '#FFFAE9',
      },
      fontFamily: {
        nohemi_l: ["Light", "sans-serif"],
        nohemi_t: ["Thin", "sans-serif"],
        nohemi_r: ["Regular", "sans-serif"],
        nohemi_m: ["Medium", "sans-serif"],
        nohemi_sb: ["SemiBold", "sans-serif"],
        nohemi_b: ["Bold", "sans-serif"],
        nohemi_eb: ["ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}