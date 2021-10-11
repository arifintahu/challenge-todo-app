module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false,
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      'primary-darken': 'var(--color-primary-darken)',
      background: 'var(--color-background)',
      title: 'var(--color-title)',
      subtitle: 'var(--color-subtitle)',
      white: '#ffffff'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
