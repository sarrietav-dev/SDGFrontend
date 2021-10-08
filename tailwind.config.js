module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  mode: 'jit',
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
}
