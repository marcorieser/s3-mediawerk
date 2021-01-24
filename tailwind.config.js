const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      extend: {
          fontFamily: {
              sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          },
      },
    },
    variants: {},
    plugins: [],
  }
