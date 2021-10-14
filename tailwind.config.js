module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-darken': 'var(--color-primary-darken)',
        background: 'var(--color-background)',
        danger: 'var(--color-danger)',
        title: 'var(--color-title)',
        subtitle: 'var(--color-subtitle)',
        white: '#ffffff'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active']
    }
  },
  plugins: []
};
