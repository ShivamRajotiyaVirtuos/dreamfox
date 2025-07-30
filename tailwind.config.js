/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '120': '120px',
        '48': '48px',
        '32': '32px',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
