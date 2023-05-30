import { convertCSSVariables } from "@utils";

import rootStyleCSS from "../rootStyle.scss?inline";

const theme = convertCSSVariables(rootStyleCSS);

export { theme };
