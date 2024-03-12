/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'dark-blue': '#2E3A8C',
        green: '#3B755F',
        'light-green': '#AFC6BD',
        yellow: '#F2EBDB',
        'light-yellow': '#F9F9F9',
        divider: '#B0B0B0',
        'black-1': '#212121'
      },
      screens: {
        sm: '640px',

        md: '768px',

        lg: '1050px',

        xl: '1280px',

        '2xl': '1536px'
      }
    }
  },
  plugins: []
}
