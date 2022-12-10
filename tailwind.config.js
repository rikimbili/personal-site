module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#C7BCF6",
          dark: "#6c68a9",
        },
        error: {
          light: "#FF5B52",
          dark: "#D73A49",
        },
        warning: {
          light: "#F1C64D",
          dark: "#B7953D",
        },
        info: {
          light: "#95EEF1",
          dark: "#5AC8C8",
        },
        success: {
          light: "#8CEA94",
          dark: "#4CCA4C",
        },
      },
      screens: {
        sm: "600px",
        md: "720px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
};
