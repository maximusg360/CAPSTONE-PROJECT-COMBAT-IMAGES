import withMT from "@material-tailwind/html/utils/withMT";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [ "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
