module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'
  ],

  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
      },

    },
    screens: {
      sm: "350px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};



