/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--darkBlueColor)",
        secondary: "var(--lightBlueColor)",
        success: "var(--green)",
        textDark: "var(--black)",
        grayText: "var(--gray)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
