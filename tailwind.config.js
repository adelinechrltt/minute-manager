/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // includes all files in the app folder
    "./components/**/*.{js,jsx,ts,tsx}", // includes all files in the components folder
    "./screens/**/*.{js,jsx,ts,tsx}", // includes all files in the screens folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
