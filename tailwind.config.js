/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
            clash: ["ClashDisplay-Regular"],
            clashbold: ["ClashDisplay-Semibold"]
        },
        colors: {
            white: "#ffffff",
            black: "#0f0a42",
            darkblue: "#0c0840",
            text: "#000000",
        },
        fontSize: {
            base: "1rem",
            xl: "3rem",
            lg: "1.875rem",
            md: '1.25rem',
            sm: '0.75rem',
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              },
              'animation': {
                'text':'text 5s ease',
            },
            'keyframes': {
                'text': {
                    '0%, 100%': {
                       'background-size':'200% 200%',
                        'background-position': 'right center'
                    },
                },
            }
        },
    },
    plugins: [],
};