export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-ima": "url('./public/assets/bg.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
};
