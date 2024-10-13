/** @type {import('tailwindcss').Config} */
import primeui from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {}
  },
  plugins: [primeui]
}
