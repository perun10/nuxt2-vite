/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: true, // enabling this reduces css size but significantly increases the build time!
    content: [
      '{pages,components,plugins,static,store,layouts}/**/*.vue',
      'assets/**/*.scss',
      'assets/**/*.css',
      'stories/**/*.stories.ts',
      '!components/global/comment-system/**/*.vue',
      '{components,pages,plugins}/**/*.{js,ts,jsx,tsx,vue}',
      'nuxt.config.js',
      'node_modules/tailwindcss/**/*.css',
    ],
  },
  theme: {
    screens: {
      xs: '360px',
      sm: '600px',
      smd: { min: '800px' },
      md: '1024px',
      lg: '1366px',
      xl: '1448px',
      xxl: '1920px',
    },
    extend: {
      fontFamily: {
        heading: ['sofia-pro', 'sans-serif'],
        body: ['pt-serif', 'serif'],
      },
      colors: {
        bluelagoon: {
          500: '#06545e',
          400: '#0C646F',
          350: '#3b828b',
          300: '#628C91',
          200: '#A9D2D3',
          100: '#D6E5E3',
        },
        salmon: {
          400: '#FB625A',
          200: '#fb928d',
          500: '#de5952',
        },
        squash: {
          400: '#ebb71d',
        },
        seagreen: {
          200: '#e5f5f3',
          400: '#38BBA0',
        },
        neutral: {
          500: '#343D3C',
          450: '#545554',
          400: '#929897',
          300: '#D2D9D8',
          200: '#E3E6E5',
          180: '#E6EBEB',
          150: '#f4f4f4',
          100: '#F5F7F7',
        },
        semiTransparentDarkGray: {
          0.6: 'rgba(84, 85, 84, 0.6)',
        },
        transparentNeutral500: {
          30: 'rgba(95, 85, 84, 0.3)',
        },
        // used for validation error messages
        radicalred: {
          400: '#ff3860',
        },
        lightgraycyan: {
          400: '#deeae9',
        },
      },
      spacing: {
        n1: '-0.25rem',
        n2: '-0.5rem',
        n3: '-0.75rem',
        n4: '-1rem',
        n6: '-1.5rem',
        n7: '-1.75rem',
        0.5: '0.125rem', // 2px if 1rem is 16px
        0.75: '0.1875rem', // 3px if 1rem is 16px
        1.5: '0.375rem', // 6px if 1rem is 16px
        2.5: '0.625rem', // 10px if 1rem is 16px
        2.75: '0.6875rem', // 11px if 1rem is 16px
        3.5: '0.875rem', // 14px if 1rem is 16px
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        6.5: '1.625rem', // 26px
        7: '1.75rem', // 28px if 1rem is 16px
        7.5: '1.875rem',
        8.5: '2.125rem',
        9: '2.25rem', // 36 px
        9.5: '2.375rem', // 38 px
        11: '2.75rem',
        11.5: '2.875rem',
        14: '3.5rem',
        18: '4.5rem',
        22: '5.5rem',
        25: '6.25rem',
        25.5: '6.375rem', // card content min height
        26: '6.5rem',
        58: '14.5rem', // 232px if 1rem is 16px
        68: '17rem', // card list item height 272px
        70: '17.5rem',
        82: '20.5rem', // card list item large width 328px
        89: '22.25rem', // card list item extra large width 356px
      },
      maxHeight: {
        0: '0',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        screen: '100vh',
      },
      minHeight: {
        0.5: '0.125rem', // 2px if 1rem is 16px
        0.75: '0.1875rem', // 3px if 1rem is 16px
        1.5: '0.375rem', // 6px if 1rem is 16px
        2.5: '0.625rem', // 10px if 1rem is 16px
        2.75: '0.6875rem', // 11px if 1rem is 16px
        3.5: '0.875rem', // 14px if 1rem is 16px
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        6.5: '1.625rem', // 26px
        7: '1.75rem', // 28px if 1rem is 16px
        7.5: '1.875rem',
        8.5: '2.125rem',
        9: '2.25rem', // 36 px
        9.5: '2.375rem', // 38 px
        11: '2.75rem',
        11.5: '2.875rem',
        14: '3.5rem',
        18: '4.5rem',
        22: '5.5rem',
        25: '6.25rem',
        25.5: '6.375rem', // card content min height
        26: '6.5rem',
        42.5: '10.625rem', // 170px 262px playlist l min width
        58: '14.5rem', // 232px if 1rem is 16px
        65.5: '16.375rem', // 262px playlist m min width
        68: '17rem', // card list item height 272px
        70: '17.5rem',
        77.5: '19.375rem', // 310px playlist lg min width
        82: '20.5rem', // card list item large width 328px
        85.5: '21.375rem', // 342px playlist xl min width
        89: '22.25rem', // card list item extra large width 356px
      },
      minWidth: {
        0.5: '0.125rem', // 2px if 1rem is 16px
        0.75: '0.1875rem', // 3px if 1rem is 16px
        1.5: '0.375rem', // 6px if 1rem is 16px
        2.5: '0.625rem', // 10px if 1rem is 16px
        2.75: '0.6875rem', // 11px if 1rem is 16px
        3.5: '0.875rem', // 14px if 1rem is 16px
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        6.5: '1.625rem', // 26px
        7: '1.75rem', // 28px if 1rem is 16px
        7.5: '1.875rem',
        8.5: '2.125rem',
        9: '2.25rem', // 36 px
        9.5: '2.375rem', // 38 px
        11: '2.75rem',
        11.5: '2.875rem',
        14: '3.5rem',
        18: '4.5rem',
        22: '5.5rem',
        25: '6.25rem',
        25.5: '6.375rem', // card content min height
        26: '6.5rem',
        42.5: '10.625rem', // 170px 262px playlist l min width
        58: '14.5rem', // 232px if 1rem is 16px
        65.5: '16.375rem', // 262px playlist m min width
        68: '17rem', // card list item height 272px
        70: '17.5rem',
        77.5: '19.375rem', // 310px playlist lg min width
        82: '20.5rem', // card list item large width 328px
        85.5: '21.375rem', // 342px playlist xl min width
        89: '22.25rem', // card list item extra large width 356px
      },
      fontSize: {
        smaller: '0.8125rem', // 13px
        md: '0.9375rem', // 15px
        '1.4xl': '1.3125rem', // 21px
        '1.5xl': '1.375rem', // 22px
        '2.5xl': '1.75rem', // 28px if 1rem is 16px
        '3.5xl': '2rem', // 28px if 1rem is 16px
        '4.5xl': '2.5rem', // 40 px if 1rem is 16px
        'display-4': '4rem',
        'display-3': '4.5rem',
        'display-2': '5.5rem',
        'display-1': '6rem',
      },
      borderRadius: {
        default: '4px',
        4: '1rem',
        5: '1.25rem', // 20px on 16px base font
        8: '2rem', // 32px
      },
      borderColor: {
        default: '#E6E6E6',
      },
      inset: {
        2.5: '0.625rem',
        3: '0.75rem',
        16: '4rem',
        20: '5rem',
      },
      boxShadow: {
        input_outline: '0 0 0 3px #D6E5E3', // bluelagoon-100
        popup_message: '0 3px 16px 0 rgba(0, 0, 0, 0.08)',
      },
      opacity: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        50: '.5',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
      },
      zIndex: {
        '-10': '-10',
      },
      gridTemplateColumns: {
        'cards-auto': 'repeat(auto-fill, minmax(312px, 1fr))',
        'cards-xs-auto': 'repeat(auto-fill, minmax(240px, 1fr))',
        'auto-1': 'repeat(1, minmax(auto, 1fr))',
        'auto-2': 'repeat(2, minmax(auto, 1fr))',
        'auto-3': 'repeat(3, minmax(auto, 1fr))',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const bgImageUtilities = {
        '.bg-image-gradient-cardLoading': {
          'background-image': 'linear-gradient(0deg, #F4F4F4 0%, #FFFFFF 100%)',
        },
      }
      const centerAbsoluteElement = {
        '.center-absolute-element': {
          position: 'absolute',
          left: '50%',
          top: ' 50%',
          transform: 'translate(-50%, -50%)',
        },
      }

      addUtilities(bgImageUtilities)
      addUtilities(centerAbsoluteElement)
    }),
  ],
}
