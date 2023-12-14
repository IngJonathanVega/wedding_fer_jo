import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: 'url("/img/bg_1.jpg")',
        bg2: 'url("/img/bg_2.jpg")',
      },
      colors: {
        'blue': '#063970',
        'rose': '#E7B2A4'
      },
    },
    fontFamily: {
      courgette: ['Courgette, cursive'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['Forum, sans-serif']
    },
  },
  plugins: [],
}
export default config
