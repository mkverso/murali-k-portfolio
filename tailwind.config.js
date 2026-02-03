/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    900: '#222831', // Main Background
                    800: '#31363F', // Card Background
                },
                tealer: '#76ABAE', // Primary Accent
                light: '#EEEEEE', // Secondary Background / Text

                brand: {
                    bg: '#222831',
                    card: '#31363F',
                    primary: '#76ABAE',
                    text: '#EEEEEE',
                    highlight: '#76ABAE',
                }
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
