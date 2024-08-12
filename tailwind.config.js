/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#272343',
        'secondary':'#636270',
      },
      boxShadow: {
        '5xl': '0px 24px 100px 0px rgba(22, 25, 50, 0.07)',
      },
      borderRadius: {
        'large': '10px',
      },
    },
  },
  plugins: [],
}

