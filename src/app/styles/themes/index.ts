import dark from "./dark";
import light from "./light";

export type ITheme = typeof dark;


const theme = {
  dark,
  light,
};

export default theme;
