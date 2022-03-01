module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        SoftCyan: "hsl(174, 77%, 80%)", //(Full Slider Bar)
        LightGrayishBlue: "hsl(224, 65%, 95%)", //(Empty Slider Bar)
        StrongCyan: "hsl(174, 86%, 45%)", //(Slider Backround)
        LightGrayishRed: "hsl(14, 92%, 95%)", //(Discount Background)
        LightRed: "hsl(15, 100%, 70%)", //(Discount Text)
        PaleBlue: "hsl(226, 100%, 87%)", //(CTA Text)
        DarkDesaturatedBlue: "hsl(227, 35%, 25%)", //(Text & CTA Background)
        White: "hsl (0, 0%, 100%)", //(Pricing Component Background)
        VeryPaleBlue: "hsl(230, 100%, 99%)", //(Main Background)
        LightGrayishBlue: "hsl(223, 50%, 87%)", //(Toggle Background)
        GrayishBlue: "hsl(225, 20%, 60%)", //(Text)
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
