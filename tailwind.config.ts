import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // screens: {
      //   xsm: '500px',
      //   sm: '600px',
      //   md: '690px',
      //   lg: '988px',
      //   xl: '1078px',
      //   xxl: '1265px',
      // },
      colors: {
        choco: {
          DEFAULT: '#241E17',
          50: '#FBF2E9',
          100: '#E8DED4',
          200: '#D4C8BB',
          300: '#BDB2A5',
          400: '#8C837A',
          500: '#655D55',
          600: '#463F37',
          700: '#241E17',
          800: '#14110D',
          900: '#070605',
        },
        cool: {
          DEFAULT: '#F7F7F7',
          50: '#FCFCFC',
          100: '#F7F7F7',
          200: '#F2F2F2',
          300: '#E9E9E9',
          400: '#C7C7C7',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
