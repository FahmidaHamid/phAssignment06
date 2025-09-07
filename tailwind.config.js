// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.js", // Adjust based on your templating engine and file structure
    "./public/**/*.html", // If you have static HTML files
    "./*.html", // If you have static HTML files
    // Add more paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
