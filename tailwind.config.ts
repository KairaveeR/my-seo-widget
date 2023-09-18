import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'blue-dark':'#163F68',
      },
      gradientColorStops: (theme) => ({
        'blue-500': '#2196F3', // Define your color here
        'blue-300': '#4FD1C5'// Define your color here
      }),
    },
  },
  plugins: [],
}
export default config
