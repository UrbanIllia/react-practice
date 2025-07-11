/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Онови, якщо структура інша
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cocktail-bg": "url('/images/cocktail-background.jpg')", // Перевір шлях
      },
    },
  },
  plugins: [],
};
