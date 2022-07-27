/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'rounded': '0 0 16px rgb(99, 102, 241, 0.7)'
            }
        },
    },
    plugins: [],
}