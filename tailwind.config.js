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
      backgroundImage: {
        'hello_page': "url('./hello_page_backgr.png')",
      }
    },
  },
  plugins: [],
}
