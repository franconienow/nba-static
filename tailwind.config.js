module.exports = {
  // Basic PurgeCSS config.  Read more at
  // https://tailwindcss.com/docs/controlling-file-size/
  purge: ["./src/site/**/*.njk"],
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      ringWidth: ['hover', 'active'],
    }
  },
  plugins: [],
};
