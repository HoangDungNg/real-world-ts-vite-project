import { convertCSSVariables } from "@utils";

import rootStyleCSS from "../rootStyle.scss?inline";

export type CustomThemeType = {
  blue: string;
  blueRgba: string;
  dark: string;
  fontBig: string;
  fontL: string;
  fontR: string;
  fontlg: string;
  fontmd: string;
  fontsm: string;
  fontxl: string;
  fontxs: string;
  fontxxl: string;
  fontxxs: string;
  fontxxxl: string;
  grey: string;
  greyLight: string;
  offWhite: string;
  white: string;
  gradient: string;
  [key: string]: string;
};

const THEME = convertCSSVariables(rootStyleCSS) as CustomThemeType;

const THEME_VARS = Object.keys(THEME).reduce((obj, key) => {
  obj[key] = THEME[key];
  return obj;
}, {} as CustomThemeType);

export { THEME, THEME_VARS };
