module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: "'Ubuntu'",
        OpenSans: "'Open Sans'",
      },
      backgroundImage: {
        'hero-pattern': "url('/bg.gif')",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
