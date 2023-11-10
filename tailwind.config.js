import keepPreset from "keep-react/src/keep-preset.js";



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [keepPreset],

  theme: {
    extend: {},
  },
  plugins: [],
}

