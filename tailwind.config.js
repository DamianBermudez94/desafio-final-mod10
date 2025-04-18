/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}', // si usás app router
    ],
    safelist: ['bg-nav-bg', 'text-card-title-color', 'font-Texto-titulo'],
    theme: {
        extend: {
            colors: {
                "header-bg": "#5a4646",
                "nav-bg": "#651616",
                "text-color": "#fff",
                "button-bg": "#5a4646",
                "footer-bg": "#2e2e2e",
                "featured-properties-bg": "#FFFFFF",
                "featured-title-color": "#555555",
                "card-bg": "#F5E8D0",
                "card-border-color": "#C9A227",
                "card-title-color": "#651616",
                "card-text-color": "#2E2E2E"


            },
            fontFamily: {
                "Texto-titulo": ["Montserrat", "sans-serif"],
                "Texto-parrafo": ["Merriweather", "serif"],
            },
        },
    },
    plugins: [],
}

