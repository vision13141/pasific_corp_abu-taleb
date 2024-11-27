/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        //  color part
          
        colors: {
          'ButtonBg': '#89D32A',
          'HeaddingColor': '#313131',
          'ParagraphColor': '#676767',
        },
        //  color part end
        // custom width start
        width: {
          'container': '1180px',
        },
        // custom width end
        // font family start
        fontFamily: {
          'open_sans': ['"Open Sans", sans-serif'],
          
        }
        // font family end
    },
  },
  plugins: [],
}

