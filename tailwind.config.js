/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["var(--Montserrat)"],
        rubik: ["var(--Rubik)"],
        space: ["var(--font-space)"],
        jakarta: ["var(--font-jakarta)"],
        clash: ["Clash Display", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        syne: ["var(--font-syne)", "sans-serif"],
        unbounded: ["var(--font-unbounded)", "sans-serif"],
      },
      colors: {
        // ... existing colors merged with new palette
        // Neo-Obsidian (Dark Mode)
        void: "#02040a",
        "deep-midnight": "#050511",
        "acid-green": "#ccff00",
        "cyber-cyan": "#00f0ff",
        "electric-purple": "#7000ff",

        // Optical Lab (Light Mode)
        "vapor-white": "#f8fafc",
        "cool-white": "#f0f4f8",
        "deep-blue": "#1e293b",
        "electric-teal": "#0d9488",
        "international-orange": "#ff4d00", // High contrast accent

        // Existing merged...
        obsidian: "#0f0f11",
        "radioactive-teal": "#00ffa3",
        "hyper-violet": "#a855f7",
        silver: "#e4e4e7",
        tealClr: "var(--tealClr)",
        tealDarkClr: "var(--tealDarkClr)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
