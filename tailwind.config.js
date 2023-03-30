/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#51E9EF',
        secondary: '#39B0A8',
        dark: '#1C1C1C',
        graydark: '#5C5B5B',
        lightGray: '#E5E5E5',
      },
      fontFamily : {
        poppins : ['Poppins', 'sans-serif']
      },
      fontSize: {
        huge: 'clamp(3rem, 6vw, 5rem)',
        norm: 'clamp(1rem, 6vw, 2rem)',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1248px',
        /*'2xl' : '1496px',*/
      },
    },
  },
  plugins: [],
}

