import tailwindAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    borderRadius: {
      none: '0px',
      sm: '0px',
      DEFAULT: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
      '3xl': '0px',
      full: '0px',
    },
    boxShadow: {
      none: 'none',
      sm: 'none',
      DEFAULT: 'none',
      md: 'none',
      lg: 'none',
      xl: 'none',
      '2xl': 'none',
      inner: 'none',
    },
    extend: {
      colors: {
        page: 'var(--surface-page)',
        card: 'var(--surface-card)',
        'card-hover': 'var(--surface-card-hover)',
        subtle: 'var(--surface-subtle)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'brand-blue': 'var(--brand-blue)',
        'brand-blue-hover': 'var(--brand-blue-hover)',
        'brand-red': 'var(--brand-red)',
        'brand-red-hover': 'var(--brand-red-hover)',
        'brand-white': 'var(--brand-white)',
        whatsapp: 'var(--whatsapp-green)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        border: 'var(--border)',
        strong: 'var(--border-strong)',
        blue: 'var(--brand-blue)',
        red: 'var(--brand-red)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindAnimate],
};
