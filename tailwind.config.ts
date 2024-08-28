import type { Config } from 'tailwindcss'
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      main: '#0E002B',
      'main-100': '#C1A4FF',
      'main-300': '#7018FF',
     },
     fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      inter: ['Inter', 'sans-serif'], 
     },
     backgroundImage: {
      'hero-mobile': "url('/icons/logo-splash.svg')",
      'hero-tablet': "url('/icons/hero-tablet.svg')",
      'hero-desktop': "url('/icons/hero-desktop.svg')",
      'about': "url('/icons/about.svg')",
     },
     }
    },
  plugins: [
    addVariablesForColors,
  ],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config
