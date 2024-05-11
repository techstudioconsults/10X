import withMT from "@material-tailwind/react/utils/withMT";

const withMaterialTailwind = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#032BF2",
        darkBlue: "#0027BA",
        grey: "#787878",
        fadedBlue: "#6476BA"
      },
    },
  },
  plugins: [],
})

export default withMaterialTailwind;