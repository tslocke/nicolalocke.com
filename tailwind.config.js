module.exports = {
  purge: [
    './site/**/*.html',
  ],
  theme: {
    extend: {
      spacing: {
        
      }
    },
  },
  variants: {},
  plugins: [],
  furture: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
