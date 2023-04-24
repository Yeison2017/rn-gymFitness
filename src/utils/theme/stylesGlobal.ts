import { IFont, IFontFamilyName, IFontSizes } from "../../interfaces";

export const colors = {
  background: "#1C1C1E",
  primary: "#D0FD3E",
};

export const fontFamily: Record<keyof IFontFamilyName, keyof IFont> = {
  textRegular: "textRegular",
  textSemiBold: "textSemiBold",
  textBold: "textBold",
};

export const fontSizes: IFontSizes = {
  "2xs": 11,
  xs: 13,
  sm: 15,
  md: 17,
  lg: 19,
  xl: 21,
  "2xl": 25,
  "3xl": 31,
  "4xl": 37,
  "5xl": 49,
  "6xl": 61,
  "7xl": 73,
  "8xl": 97,
  "9xl": 129,
};
