export const lightTheme = {
  colors: {
    text: {
      primary: "rgb(18, 28, 45)",
      secondary: "rgb(90, 105, 125)",
      light: "rgb(255, 255, 255)",
      dark: "rgb(18, 28, 45)",
      error: "rgb(198, 40, 40)",
      success: "rgb(46, 125, 50)",
    },

    accent: {
      default: "rgb(0, 216, 255)",
      hover: "rgb(0, 190, 230)",
      soft: "rgb(0, 140, 185)",
    },

    border: {
      default: "rgba(60, 80, 100, .25)",
      accent: "rgba(0,216,255,.35)",
      soft: "rgba(60, 80, 100, .12)",
    },

    checkbox: "rgb(60, 80, 110)",
  },

  backgrounds: {
    base: "rgb(240, 244, 250)",
    panel: "rgb(232, 238, 246)",
    overlay: "rgba(0,0,0,.45)",
    row: {
      even: "rgb(232, 238, 246)",
      odd: "rgb(224, 232, 242)",
    },
    colored: "rgb(255, 183, 0)",
  },

  gradients: {
    primary:
      "linear-gradient(135deg,rgb(211, 246, 255) 0%,rgb(255, 255, 255) 100%)",
    primaryInverse:
      "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(211, 246, 255) 100%)",
    glow: "linear-gradient(135deg,rgb(230,250,255) 0%,rgb(112,232,250) 100%)",
    glowHover:
      "linear-gradient(135deg, rgb(0,216,255,.25) 0%, rgb(0,180,220,.45) 100%)",
  },

  shadows: {
    reversed: "-2px -2px 2px rgba(0, 0, 0, 0.1)",
    xs: "2px 2px 2px rgba(0, 0, 0, 0.1)",
    md: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    lg: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    container:
      "2px 2px 2px rgba(0, 0, 0, 0.1), -2px -2px 2px rgba(0, 0, 0, 0.1)",
    glow: "-2px -2px 6px rgba(112, 232, 250, 0.4)",
    text: "0 0 8px rgba(0,216,255,.35)",
  },

  radius: {
    sm: ".25rem",
    md: ".5rem",
    lg: ".75rem",
    xl: "3rem",
    round: "50%",
  },

  spacing: {
    xs: ".25rem",
    sm: ".5rem",
    ms: ".75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "2.5rem",
    xxxl: "3rem",
    heroSmall: "3.5rem",
    heroMedium: "4rem",
    heroBig: "5rem",
  },

  tipography: {
    xs: ".85rem",
    sm: "1rem",
    ms: "1.25rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
    xxl: "3rem",
    hero: "4rem",
    bgHero: "8rem",
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  zIndex: {
    overlay: 1,
    navbar: 2,
    floating: 3,
    dropdown: 2,
  },

  container: {
    width: "64rem",
    card: "12rem",
  },
};
