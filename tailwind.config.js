/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mob: "375px",
      tab: "768px",
      lap: "1024px",
      desk: "1440px",
    },
    extend: {
      colors: {
        main: "#101828",
        text: "#475467",
        white: "#fff",
        inputs: "#f7f7f7",
        badges: "#f2f4f7",
        gray: "#6c717b",
        grayLight: "#dadde1",
        button: "#e44848",
        buttonHover: "#d84343",
        rating: "#ffc531",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.01em",
      },
      animation: {
        default: "200ms cubic-bezier(0.4, 0.2, 0.2, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".after-line": {
          position: "relative",
          fontSize: "20px",
          lineHeight: "1.5",
          fontWeight: "600",
          marginBottom: "24px",
          "&::after": {
            content: '""',
            position: "absolute",
            height: "1px",
            backgroundColor: "#dadde1",
            bottom: "-24px",
            left: "0",
            width: "100%",
          },
        },
        ".custom-label": {
          "@apply flex flex-col justify-center items-center px-10 border rounded-xl cursor-pointer transition-colors h-[96px]":
            {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
