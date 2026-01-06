import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial']
      },
      colors: {
        brand: {
          DEFAULT: '#FFD800',
          muted: '#FFF7CC'
        },
        surface: '#FFFFFF',
        mutedText: '#777777',
        border: '#E6E6E6'
      }
    }
  },
  plugins: []
};

export default config;
