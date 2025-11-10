import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Work Sans, sans-serif",
  headings: {
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(36), lineHeight: "1.25" },
      h2: { fontSize: rem(32), lineHeight: "1.3" },
      h3: { fontSize: rem(28), lineHeight: "1.35" },
      h4: { fontSize: rem(24), lineHeight: "1.4" },
      h5: { fontSize: rem(20), lineHeight: "1.45" },
      h6: { fontSize: rem(16), lineHeight: "1.5" },
    },
  },

  fontSizes: {
    xs: rem(12),
    sm: rem(13),
    md: rem(15),
    lg: rem(16),
    xl: rem(18),
  },

  colors: {
    // 💙 Bleu santé – confiance et calme
    clinicBlue: [
      "#E6F1FB",
      "#C8E0F8",
      "#A5CDF5",
      "#7CB5F0",
      "#529BEA",
      "#2C7BE5",
      "#1C63C5",
      "#144B97",
      "#0C346A",
      "#071F41",
    ],

    // 💚 Vert bien-être – équilibre et nature
    clinicGreen: [
      "#E6FAF1",
      "#C0F0D8",
      "#96E5BC",
      "#6BDAA0",
      "#3FCF84",
      "#25B96E",
      "#1D975A",
      "#157546",
      "#0D5332",
      "#06331E",
    ],

    // 🌤️ Neutre doux – pour fonds et textes
    neutral: [
      "#FFFFFF",
      "#F8FAFA",
      "#F1F4F4",
      "#E5E9E9",
      "#D7DDDD",
      "#C2CACA",
      "#AAB4B4",
      "#8C9898",
      "#6B7676",
      "#4A5252",
    ],

    // 🌟 Doré doux – pour les accents
    gold: [
      "#FFF8E1",
      "#FFECB3",
      "#FFE082",
      "#FFD54F",
      "#FFCA28",
      "#FFC107",
      "#FFB300",
      "#FFA000",
      "#FF8F00",
      "#FF6F00",
    ],
  },

  primaryColor: "clinicBlue",

  components: {
    Paper: {
      defaultProps: {
        withBorder: true,
        shadow: "sm",
        radius: "lg",
      },
    },
    Button: {
      defaultProps: {
        variant: "filled",
        radius: "lg",
        color: "clinicBlue",
      },
      styles: {
        root: {
          fontWeight: 600,
        },
      },
    },
    ThemeIcon: {
      defaultProps: {
        variant: "light",
        color: "clinicGreen",
        radius: "xl",
      },
    },
    ActionIcon: {
      defaultProps: {
        variant: "light",
        color: "clinicGreen",
        radius: "xl",
      },
    },
  },

  // 💫 Dégradé modern clinic
  defaultGradient: {
    from: "clinicBlue.5",
    to: "clinicGreen.5",
    deg: 120,
  },

  defaultRadius: "md",
});
