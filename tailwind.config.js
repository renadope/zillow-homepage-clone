/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
