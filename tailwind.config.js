/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customCream: "#FFFAE9",
        brown: "#5C2F01",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        float: 'float 3s ease-in-out infinite',
      },
      fontFamily: {
        nohemi_l: ["Light", "sans-serif"],
        nohemi_t: ["Thin", "sans-serif"],
        nohemi_r: ["Regular", "sans-serif"],
        nohemi_m: ["Medium", "sans-serif"],
        nohemi_sb: ["SemiBold", "sans-serif"],
        nohemi_b: ["Bold", "sans-serif"],
        nohemi_eb: ["ExtraBold", "sans-serif"],
        inter: ["variable", "sans-serif"]
      },
      backgroundImage:{
        'hero-bg': "url('./src/assets/footer-bg2.jpg')"
      }
    },
  },
  plugins: [],
};
