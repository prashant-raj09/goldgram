/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // keyframes: {
      //   spinZ: {
      //     '0%': { transform: 'rotateZ(0deg)' },
      //     '100%': { transform: 'rotateZ(360deg)' },
      //   },
      // },
      // animation: {
      //   'spin-slow': 'spinZ 5s linear infinite', // 5 seconds for a slow, continuous spin
      // },
      keyframes: {
        spinZ: {
          "0%": { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateZ(360deg)" },
        },
        fadeInScale: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        "spin-slow": "spinZ 5s linear infinite", // Spin for image
        "fade-in-scale": "fadeInScale 1.5s ease-in-out", // Animation for h1 text
      },
    },
  },
  plugins: [require("daisyui")],
};

// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         spinZ: {
//           '0%': { transform: 'rotateZ(0deg)' },
//           '100%': { transform: 'rotateZ(360deg)' },
//         },
//         fadeInScale: {
//           '0%': { opacity: 0, transform: 'scale(0.8)' },
//           '100%': { opacity: 1, transform: 'scale(1)' },
//         },
//       },
//       animation: {
//         'spin-slow': 'spinZ 5s linear infinite', // Spin for image
//         'fade-in-scale': 'fadeInScale 1.5s ease-in-out', // Animation for h1 text
//       },
//     },
//   },
//   plugins: [],
// };
