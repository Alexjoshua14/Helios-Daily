import type { Config } from 'tailwindcss'

const greyBlue = {
  light: "hsl(233, 8%, 79%)",
  dark: "hsl(240, 100%, 5%)"
}

const offWhite = "hsl(36, 100%, 99%)"

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "white": offWhite,
        "dark-blue": greyBlue["dark"],
        "light-grey-blue": greyBlue["light"],
        "soft-red": "hsl(5, 85%, 63%)",
        "soft-orange": "hsl(35, 77%, 62%)",
      },
      textColor: {
        "primary": greyBlue["dark"],
        "secondary": greyBlue["dark"],
        "tertiary": greyBlue["light"],
        "light-primary": offWhite,
        "light-secondary": greyBlue["light"],
      },
      fontSize: {
        base: "15px"
      },
      backgroundColor: {
        "primary": offWhite
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
