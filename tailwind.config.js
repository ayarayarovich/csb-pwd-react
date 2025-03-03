const plugin = require('tailwindcss/plugin')

const hocusPlugin = plugin(function ({ addVariant }) {
    addVariant('hocus', ['&:hover', '&:focus'])
})

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            m1: '#1A263E',
            m2: '#1B2438',
            m3: '#DEDEE9',
            m4: '#ECECEC',
            w1: '#FFFFFF',
            w2: '#F9FBFB',
            blue: '#3D73FF',
            darkblue: '#0A0A31',
            orange: '#FA944B',
            red: '#FE2F2F',
            green: '#1DC9A0'
        },
        fontFamily: {
            inter: '"Inter", sans-serif',
            montserrat: '"Montserrat", sans-serif'
        },
        extend: {
            spacing: {
                50: '12.5rem'
            }
        }
    },
    plugins: [hocusPlugin]
}
