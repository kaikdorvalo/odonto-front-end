/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('./src/assets/login-bg.png')",
        'login-image-mobile': "url('./src/assets/financas-img.png')"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    }
  },
  daisyui: {
    themes: ["dark", "light"],
  },
  plugins: [require("daisyui")],
}

