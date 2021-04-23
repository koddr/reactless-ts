module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    options: {
      keyframes: true,
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
