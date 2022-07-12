module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  // important: ".",
  theme: {
    fontFamily: {
      PWC: ["PWC", "sans-serif"],
      Minecraft: ["Minecraft", "sans-serif"],
    },
    extend: {
      colors: {
        'pwc-red': '#FF003D',
        'pwc-black': '#000000',
        'pwc-white': '#FFFFFF',
        'pwc-black-disable': '#cdcdcd',
        'pwc-blue': '#0037FF',
        'pwc-green': '#19FF00',
        'pwc-purple': '#8da5ff',
        'pwc-mint': '#00FFB2',
        'pwc-gray': '#585858',
        'pwc-gradient1': '#00FFB2',
        'pwc-gradient2': '#d3f2e9',
        'pwc-red2': '#FF1F00'
      },
      width: {
        'w-fit': 'fit-content',
      }
    },
    screens: {
      xxl: { max: "1540px" },
      // => @media (max-width: 1540px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      sm: { max: "935px" },
      // => @media (max-width: 767px) { ... }

      // sm: { max: "639px" },
      // // => @media (max-width: 639px) { ... }
      // xs:{
      //
      // }
    },
    content: {
      'dashboard-active-link': 'url("assets/img/dashboard-active-link.png")',
      'landing-mob-active-link': 'url("assets/img/landing-mob-active-link.png")',
      'landing-desk-active-link': 'url("assets/img/landing-desk-active-link.png")',
      'introduction-tm': 'url("assets/img/TM.png")'
    }
  },
  plugins: [

  ],
}
