import config from "../config";
import baseTheme from "./baseTheme";
import blackTheme from "./blackTheme";
export default config.blackTheme ? StyleSheet.create({
    ...baseTheme,
    ...blackTheme
}) : StyleSheet.create({
    ...baseTheme
});