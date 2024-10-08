/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#f7ba34",
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      keyframes: {
        textclip: {
          "0%": { "background-position": "200% 200%" },
          "100%": { "background-position": "0% 0%" },
        },
      },
      animation: {
        textclip: "textclip 7s linear infinite",
      },
      backgroundSize: {
        "400%": "400%",
      },
    },
  },
  plugins: [],
};
