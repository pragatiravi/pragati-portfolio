/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FEFFD3',
        primary: '#6D9E51',
        secondary: '#BCD9A2',
        accent: '#A82323',
        card: '#FFFFFF',
        ink: '#1F2937',
        line: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1120px' },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,40,0.04), 0 4px 16px rgba(16,24,40,0.06)',
        lift: '0 8px 30px rgba(16,24,40,0.10)',
      },
      borderRadius: { xl2: '1.25rem' },
    },
  },
  plugins: [],
};
