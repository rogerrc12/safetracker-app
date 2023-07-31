import { extendTheme } from "native-base";
import colors from "./colors";
import fonts from "./fonts";

const customTheme = extendTheme({
  colors,
  ...fonts,
});

type CustomThemeType = typeof customTheme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}

export default customTheme;
