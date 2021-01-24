module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      backgroundColor: {
        'primary': 'black'   
      },
      backgroundImage: {
        'backapp': "url('https://tix.vn/app/assets/img/icons/backapp.jpg')"
      },
      spacing: {
        'full': '100%',
        '10/25': '40%',
        'yt': '56.25%',
        'tix-v': 'calc((318%/215)*100)',
      },
      inset: {
        '3/25': '12%'
      },
      width: {
        '32': '8rem',
        '150': '37.5rem',
        '225': '56.25rem',
        '235': '58.75rem',
      },
      height: {
        '235': '58.75rem',
      },
      minWidth: {
        '8': '2rem',
        '40': '10rem',
      },
      maxheight: {
        '235': '58.75rem',
      },
      fontSize: {
        '2xs': '0.5rem',
        '3xs': '0.25rem',
        '32': '8rem',
      },
      zIndex: {
        'full': '999999'
      },
      lineHeight: {
        32: '8rem',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'gray-500-95': 'rgba(107, 114, 128, 0.95)',
      }),
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'active', 'group-hover'],
      backgroundImage: ['hover', 'focus'],
      visibility: ['hover', 'focus', 'group-hover'],
      scale: ['responsive', 'active', 'focus', 'hover', 'group-hover'],
      fontSize: ['responsive', 'hover', 'focus'],
      borderWidth: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
