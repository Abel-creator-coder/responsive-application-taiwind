/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }
    // },
    extend: {
      spacing: {
        '2.5': '10px',
        '6.94': '6.944vw',
        '72': '72px',
        '78': '78px',
        'mobile36': '9.6vw',
        'mobile64': '17.06vw',
        'mobile72': '19.2vw',
        'mobile120': '32vw',
        'mobile128': '34.13vw',
        'mobile171': '45.6vw',
        'pc14': '0.97vw',
        'pc22': '1.52vw',
        'pc30': '2.08vw',
        'pc34': '2.36vw',
        'pc108': '7.5vw',
        'pc217': '15.069vw',
        'pc291': '20.2vw',
        '13': '52px',
        '30': '120px',
        '10%': '10%',
        '17%': '17%',
        '26%': '26%',
        '29%': '29%',
        '36%': '36%',
        '40%': '40%',
        '50%': '50%',
        '73%': '73%'
      },
      height: {
        '21': '21.87vw',
        '24': '24.65vw',
        'pc60': '4.16vw',
        'pc736': '24.65vw',
        '35': '35vw',
        'pc595': '41.31vw',
        '50': '50vw',
        '64': '17.06vw',
        '97': '97vw',
        '100': '100vw',
      },
      width: {
        '20.34': '20.347vw',
        '22': '22.92vw',
        '23': '23.125vw',
        'pc161': '11.18vw',
        'pc736': '51.11vw',
        '64': '17.06vw',
        'mobile89.6': '89.6vw',
        '95': '95.277vw'
      },
      backgroundPosition: {
        'bottom': 'bottom',
        'arrow': 'right 15px center',
        'pcarrow': 'right 0.8vw center'
      },
      backgroundSize: {
        'mobile16': '4.266vw',
        'pc26': '1.805vw',
      },
      colors: {
        'grey': '#1A1A1A',
        'pink':'#EDE9FF',
        'blue': '#3232FB',
        'grey1': '#F4F4F4',
        'yellow': '#E8FFA8'
      },
      fontFamily: {
        'polysans': ['PolySans'],
        'dmsans': ['DM Sans'],
      },
      borderRadius: {
        '5': '5px',
        '10': '10px',
        '20': '20px'
      },
      fontSize: {
        'mobile14': '3.733vw',
        'mobile16': '4.266vw',
        'mobile18': '4.8vw',
        'mobile24': '6.4vw',
        'mobile32': '8.533vw',
        'pc16': '1.11vw',
        'pc18': '1.25vw',
        'pc50': '3.472vw',
        '8': '32px',
        '3.47': '3.4722vw',
        '1.11': '1.11vw',
        'pc35': '2.43vw'
      },
      lineHeight: {
        'mobile36': '9.6vw',
        'pc60': '4.16vw',
      },
      padding: {
        '3.2': '3.2vw',
        '37': '2.569vw'
      },
      rotate: {
        '7': '7deg',
        '8.5':'8.5deg'
      }
    },
  },
  plugins: [],
}

