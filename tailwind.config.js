/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#f093fb",
        cyan: "#00ffff",
        pink: "#ec4899",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        gradientShift: "gradientShift 15s ease infinite",
        fadeSlideDown: "fadeSlideDown 1.5s ease forwards",
        typing: "typing 5s steps(40, end) forwards",
        glow: "glow 2s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
      },
      keyframes: {
        slideInLeft: {
          from: { transform: "translateX(-20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          from: { transform: "translateX(20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "scale(0)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(-30px) translateX(20px)" },
          "66%": { transform: "translateY(20px) translateX(-20px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeSlideDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.5)" },
          "50%": { textShadow: "0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 255, 255, 0.7), 0 0 100px rgba(0, 255, 255, 0.4)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "10%, 30%": { transform: "scale(1.1)" },
          "20%, 40%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
