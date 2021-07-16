import { StyleSheet } from 'react-native';
import theme from './theme';
import tsTheme from './tstheme';

export default StyleSheet.create({
    ...tsTheme,
    ...theme
})