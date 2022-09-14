import { createStitches, ScaleValue } from "@stitches/react";
import { grass, gray, grassDark, grayDark } from "@radix-ui/colors";
export const convertToRem = (value: number) => `${value / 16}rem`;

const space = {
  2: convertToRem(2),
  4: convertToRem(4),
  8: convertToRem(8),
  12: convertToRem(12),
  16: convertToRem(16),
  20: convertToRem(20),
  24: convertToRem(24),
  28: convertToRem(28),
  32: convertToRem(32),
  36: convertToRem(36),
  40: convertToRem(40),
  48: convertToRem(48), 
  72: convertToRem(72),  
  80: convertToRem(80),
  1120: convertToRem(1120),

  "fluid": "100%"
};
const fontSize = {
  4: convertToRem(4),
  8: convertToRem(8),
  12: convertToRem(12),
  14: convertToRem(14),
  16: convertToRem(16),
  20: convertToRem(20),
  24: convertToRem(24),
  28: convertToRem(28),
  32: convertToRem(32),
  36: convertToRem(36),
  40: convertToRem(40),
};

export const {
  styled: feedStyled,
  createTheme,
  getCssText,
  globalCss,
} = createStitches({
  prefix: "feed",
  theme: {
    fonts: {
      normal:
        "Roboto, -apple-system, BlinkMacSystemFont, helvetica, arial, sans-serif",
    },

    colors: {
      ...grassDark,
      ...grayDark,
      red500: '#F75A68'
    },
    radii: {
      default: "0px",
      "rounded-light": '8px',
      "rounded-medium": "16px",
      pill: "999999px",
    },

    space,
    sizes: space,
    fontSizes: fontSize,
    zIndices: {
      default: 0,
      menubar: 1,
      modal: 10,
      overlay: 20,
      sticky: 30,
    },
  },

  utils: {   
    px: (value: ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    ...grass,
    ...gray,
  },
});
