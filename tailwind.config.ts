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
      main: '#0F172A',
      'main-100': '#93D1DE',
      'main-300': '#1E5A67',
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
