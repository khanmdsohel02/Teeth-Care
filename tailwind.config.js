export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('https://i.ibb.co/8bxx9Qf/bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
