/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'back-card-pattern': "url('/images/bg-card-back.png')",
      'front-card-pattern': "url('/images/bg-card-front.png')",
    },
  },
  plugins: [],
}