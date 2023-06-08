module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    colors: {
      'custom-black': '#282B2A',
      'custom-grey': '#313534',
      'custom-red': '#E53F49',
      'custom-green': '#00BB7E',
      'custom-white': '#FDFDFD',
      'custom-blue': '#5B98D2',
      'custom-background': '#F1F8FF',
    }
  }
}