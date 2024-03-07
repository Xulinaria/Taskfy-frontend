import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#3360FF',
        secondaryBlue: '#36597D',
      },
      boxShadow: {
        mainShadow: '-8px -8px 16px 0px #FFF, 8px 8px 16px 0px #C9D9E8',
      },
    },
  },
  plugins: [],
}
export default config
