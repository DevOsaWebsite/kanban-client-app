import {type Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--palette-primary) / <alpha-value>)',
          light: 'rgb(var(--palette-primary-light) / <alpha-value>)',
          on: 'rgb(var(--palette-primary-on) / <alpha-value>)',
        },
        background: {
          DEFAULT: 'rgb(var(--palette-background) / <alpha-value>)',
          paper: 'rgb(var(--palette-background-paper) / <alpha-value>)',
          on: 'rgb(var(--palette-background-on) / <alpha-value>)',
          'on-paper': 'rgb(var(--palette-background-on-paper) / <alpha-value>)',
        },
        outline: {
          DEFAULT: 'rgb(var(--palette-outline) / <alpha-value>)',
        },
        error: {
          DEFAULT: 'rgb(var(--palette-error) / <alpha-value>)',
          light: 'rgb(var(--palette-error-light) / <alpha-value>)',
          on: 'rgb(var(--palette-error-on) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '375px',
      },
      width: {
        sidebar: '260px',
      },
    },
  },
  plugins: [],
};

// eslint-disable-next-line import/no-default-export
export default config;
