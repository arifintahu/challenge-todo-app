module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    options: {
      safelist: ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500']
    }
  },
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
