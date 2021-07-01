import { createStackNavigator, createAppContainer } from 'react-native'
import WalletsScreen from './components/WalletsScreen';

const AppStackNavigator = createStackNavigator({
    Wallets: { screen: WalletsScreen },
});

export default createAppContainer(AppStackNavigator);
