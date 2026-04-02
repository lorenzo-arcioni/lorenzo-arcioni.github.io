/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#304f66',
          light: '#426b87',
          dark: '#1f3342',
        },
        secondary: {
          DEFAULT: '#5c3e11',
          light: '#7a5318',
          dark: '#3d2a0b',
        },
        dark: {
          DEFAULT: '#383838',
          light: '#4a4a4a',
          dark: '#2a2a2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
