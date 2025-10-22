/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./src/components/ui/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
    },
  },
  plugins: [],
}
}
