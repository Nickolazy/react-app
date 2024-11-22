/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans serif"],
        dmSans: ['"DM Sans"', "sans-serif"]
      },
      colors: {
        'light-bg': '#f0f0f0',
        'light-text': '#333',
        'dark-bg': '#333',
        'dark-text': '#f0f0f0',
        'green-bg': '#4CAF50',
        'green-text': '#fff',
      }
    },
  },
  plugins: [],
}
