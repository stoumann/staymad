const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class', // or 'media' or 'class'
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'logo': ['\'M PLUS Rounded 1c\'', 'sans-serif'],
            },
            colors: {
                'primary': '#64C6F2',
                'secondary': '#32254C',
                'body': '#8280A3',
                'light': '#E9E8F2',
                gray: colors.blueGray,
            },
            width: {
                '2xl': '2774px',
                'xl': '1536px',
                'lg': '1280px',
                'md': '1024px',
                'sm': '768px',
            },
            height: {
                '500': '500px',
                '800': '800px',
            },
            screens: {
                '3xl': '1920px',
            }
          },
    },
    variants: {
        extend: {
            borderRadius: ['hover', 'focus'],
            opacity: ['group-focus', 'hover', 'focus'],
        },
    },
    plugins: [],
}
