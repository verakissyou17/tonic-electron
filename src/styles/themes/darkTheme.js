import { lightTheme } from "./lightTheme";

export const darkTheme = {
  ...lightTheme,

  colors: {
    text: {
      primary: "rgb(235, 242, 250)",
      secondary: "rgb(160, 175, 195)",
      light: "rgb(255, 255, 255)",
      dark: "rgb(18, 28, 45)",
      error: "rgb(255, 90, 90)",
      success: "rgb(80, 200, 120)",
    },

    accent: {
      default: "rgb(0, 216, 255)",
      hover: "rgb(0, 235, 255)",
    },

    border: {
      default: "rgba(255,255,255,.10)",
      accent: "rgba(0,216,255,.90)",
      soft: "rgba(255,255,255,.05)",
    },

    checkbox: "rgb(120, 140, 170)",
  },

  backgrounds: {
    base: "rgb(10, 16, 28)",
    panel: "rgb(15, 22, 35)",
    overlay: "rgba(0, 0, 0, .6)",
    row: {
      even: "rgb(18, 28, 42)",
      odd: "rgb(24, 36, 52)",
    },
    colored: "rgb(255, 191, 0)",
  },

  gradients: {
    ...lightTheme.gradients,

    primary: "linear-gradient(135deg, rgb(11, 19, 32), rgb(28, 42, 58))",
    primaryInverse: "linear-gradient(135deg, rgb(28, 42, 58), rgb(11, 19, 32))",
  },

  shadows: {
    xs: "0 1px 3px rgba(0,0,0,.4)",

    md: "0 8px 20px rgba(0,0,0,.45)",

    container: "0 10px 30px rgba(0,0,0,.5)",

    glow: "0 0 18px rgba(0,216,255,.25)",

    text: "0 0 10px rgba(0,216,255,.25)",
  },
};
