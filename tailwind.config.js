/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cocktail-bg': "url('/images/cocktail-background.jpg')",
      },
      colors: {
        'dark-primary': 'var(--dark-primary)',
        'light-primary': 'var(--light-primary)',
        'light-secondary': 'var(--light-secondary)',
        accent: 'var(--accent)',
        'btn-disabled': 'var(--btn-disabled)',
      },
    },
  },
  plugins: [],
};
