// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         neonGreen: "#39FF14",
//         blackBg: "#000000",
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "var(--neon-green)",
        deepPurple: "var(--deep-purple)",
        hotPink: "var(--hot-pink)",
        electricBlue: "var(--electric-blue)",
        gold: "var(--gold)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

