
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         neonGreen: "var(--neon-green)",
//         deepPurple: "var(--deep-purple)",
//         hotPink: "var(--hot-pink)",
//         electricBlue: "var(--electric-blue)",
//         gold: "var(--gold)",
//       },
//       animation: {
//         glow: "glow 2s ease-in-out infinite alternate",
//       },
//     },
//   },
//   plugins: [],
// };

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         neonGreen: "#4dff4d",
//         deepPurple: "#2a0a29",
//         hotPink: "#ff79c6",
//         electricBlue: "#7DF9FF",
//         gold: "#ffd700",
//         blackBg: "#0a0a0a",
//       },
//       fontFamily: {
//         heading: ['Orbitron', 'sans-serif'],
//         body: ['Poppins', 'sans-serif'],
//       },
//       animation: {
//         glow: "glow 2s ease-in-out infinite alternate",
//         tilt: "tilt 10s infinite linear",
//       },
//       keyframes: {
//         glow: {
//           "0%": { textShadow: "0 0 10px #4dff4d" },
//           "100%": { textShadow: "0 0 20px #4dff4d, 0 0 30px #4dff4d" },
//         },
//         tilt: {
//           "0%, 50%, 100%": { transform: "rotate(0deg)" },
//           "25%": { transform: "rotate(1deg)" },
//           "75%": { transform: "rotate(-1deg)" },
//         },
//       },
//       backdropFilter: {
//         'none': 'none',
//         'blur': 'blur(20px)',
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/aspect-ratio'),
//     // Remove the following line if you're not using @tailwindcss/forms
//     // require('@tailwindcss/forms'),
//   ],
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
        silver: "var(--silver)",
        darkGray: "var(--dark-gray)",
        lightGray: "var(--light-gray)",
      },
      boxShadow: {
        neonGreen: "0 0 15px var(--neon-green)",
        hotPink: "0 0 20px var(--hot-pink)",
      },
    },
  },
  plugins: [],
};