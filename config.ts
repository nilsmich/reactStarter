export const config = {
  env: {
    isDev: process.env.NODE_ENV === 'development',
    isTest: process.env.NODE_ENV === 'test',
    isProd: process.env.NODE_ENV === 'production'
  },

  tracking: {
    googleAnalytics: 'UA-xxxxx-1'
  },

  theme: {
    animations: {
      speed: '.25s',
      func: 'ease'
    },
    spacings: {
      $paddingXS: '.3rem',
      $paddingS: '.7rem',
      $paddingBase: '1rem',
      $paddingM: '1.25rem',
      $paddingL: '1.5rem',
      $paddingXL: '2rem',
      $paddingXXL: '3rem',

      $borderRadius: '.3rem'
    },
    colors: {
      palette: {}
    }
  }
}
