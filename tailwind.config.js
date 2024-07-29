/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'main-layout':'15% 85%',
      },
      height:{
        'dvh': '100dvh',
      },
      colors:{
        // dark bg colors
        'primary-black':'#0f0f0f', //bg dark
        'primary-gray':'#272727', //nav & hover
        'secondary-gray':'#898989' //channel name
      },
     
    },
  },
  plugins: [],
}

