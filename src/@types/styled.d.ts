// import original module declarations
import { CustomThemeType } from "@theme";
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends CustomThemeType {
    [key: string]: string;
  }
}
