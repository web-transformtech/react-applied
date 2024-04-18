/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" },
      // => @media (min-width: 640px) { ... }
      mdsm: "641px",
      // => @media (min-width: 768px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lge: "1023px",
      // => @media (min-width: 1024px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      tiny: "12px",
      sm: "14px",
      base: "16px",
      h6: "18px",
      h5: "20px",
      h4: "22px",
      h3: "24px",
      h2: "26px",
      h1: "28px",
      xl: "30px",
      "2xl": "32px",
      "3xl": "34px",
      "4xl": "36px",
      "5xl": "38px",
      "6xl": "40px",
    },
    fontFamily: {
      ClearlyRomanHeavy: ["ClearlyRomanHeavy"],
      ClearlyRomanHeavyKursiv: ["ClearlyRomanHeavyKursiv"],
      // ClearlyRomanlite: ["ClearlyRomanlite"],
      // JosefinThin: ["JosefinThin"],
      JosefinRegular: ["JosefinRegular"],
      JosefinSemibold: ["JosefinSemibold"],
      JosefinBold: ["JosefinBold"],
      JosefinMedium: ["JosefinMedium"],
      PoppinsLight: ["PoppinsLight"],
      PoppinsRegular: ["PoppinsRegular"],
      PoppinsMedium: ["PoppinsMedium"],
      PoppinsSemiBold: ["PoppinsSemiBold"],
      PoppinsBold: ["PoppinsBold"],
      // LatoBold: ["LatoBold"],
      Prociono: ["Prociono"],
    },
    colors: {
      primary: "#7C0201",
      secondary: "#2C2A2A",
      textback: "#F6DD9F",
      backgroundcolor: "#F4F1F1",
      black: "#000",
      orange: "#D03B0B",
      toolsbg: "#F3DDDD",
      bordercolor: "#3f3f3f4d",
      whotext: "#3f3f3f",
      white: "#fff",
      modal: "#00000094",
      red: "#ff4141",
      backgroundbox: "#FFC128",
    },
    borderRadius: {
      md: "4px",
      lg: "0.5rem",
      xl: "12px",
      full: "9999px",
    },
    extend: {
      animation: {
        border: "border ease infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
