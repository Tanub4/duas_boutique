import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f9f7f5', // Ivory / Off-white
                    100: '#f0ece8',
                    200: '#e3d6ce',
                    300: '#d1bdae', // Darker beige
                    400: '#ab9284',
                    500: '#8c7365', // Brownish
                    600: '#70594d',
                    700: '#5c483f',
                    800: '#4a3b35',
                    900: '#3d312d',
                },
                secondary: {
                    50: '#fdf2f8', // Blush pink light
                    100: '#fce7f3',
                    200: '#fbcfe8', // Blush pink
                    300: '#f9a8d4',
                    400: '#f472b6',
                    500: '#ec4899',
                    600: '#db2777',
                    700: '#be185d',
                    800: '#9d174d',
                    900: '#831843',
                },
                gold: {
                    DEFAULT: '#C5A059',
                    light: '#E5C585',
                    dark: '#9F7D3D'
                }
            },
            fontFamily: {
                serif: ['var(--font-playfair-display)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
