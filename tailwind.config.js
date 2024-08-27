/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        snap: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '0', transform: 'scale(0)' },
        },
        unsnap: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        snap: 'snap 1s ease-in-out forwards',
        unsnap: 'unsnap 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
