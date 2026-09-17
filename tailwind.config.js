/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "2rem", lg: "3rem", xl: "4rem" },
    },
    extend: {
      colors: {
        ink: "#10233F",
        "ink-soft": "#4A5568",
        paper: "#F5F6F4",
        gold: "#C89A3C",
        "gold-dark": "#A87D2A",
        line: "#E2E4E0",
        teal: "#2F6F62",
        rust: "#A6462B",
        navy: {
          DEFAULT: "#10233F",
          light: "#1A3358",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "drawer-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "drawer-in": "drawer-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
}
