module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        headline: "#1E1E1E",
        asset: "#75A56F",
        footer: "#000000",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        gotosans: [
          '"GOTO Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backdrop-blur-none': {
          'backdrop-filter': 'blur(0)',
          '-webkit-backdrop-filter': 'blur(0)'
        },
        '.backdrop-blur-sm': {
          'backdrop-filter': 'blur(4px)',
          '-webkit-backdrop-filter': 'blur(4px)'
        },
        '.backdrop-blur-md': {
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)'
        },
        '.backdrop-blur-lg': {
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)'
        }
      })
    }
  ],
};