export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('https://i.ibb.co/8bxx9Qf/bg.png')",
        "bg-img2": "url('https://i.ibb.co/1bvwh4H/bg2.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
