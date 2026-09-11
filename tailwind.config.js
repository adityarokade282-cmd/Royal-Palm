/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f4ecd9',
          300: '#ecd9b8',
        },
        charcoal: {
          700: '#3a3a3a',
          800: '#2a2a2a',
          900: '#1a1a1a',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5edd5',
          200: '#e8d5a0',
          300: '#d4b66a',
          400: '#c4a04f',
          500: '#b08930',
          600: '#94701f',
          700: '#735517',
        },
        forest: {
          50: '#f0f6f1',
          100: '#dcebe0',
          200: '#b9d6c2',
          300: '#8fbb9b',
          400: '#5e9270',
          500: '#3f7353',
          600: '#2e5a3f',
          700: '#234831',
          800: '#1c3a28',
          900: '#142a1d',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
