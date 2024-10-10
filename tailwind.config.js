/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'share-green': '#3BDA89',
        customBg: 'rgb(46, 43, 53)',
      },
    },
  },
  plugins: [],
}

