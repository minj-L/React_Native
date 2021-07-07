import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation"
import TabBar from "./component/TabBar2"

const App = createMaterialTopTabNavigator({
  first: {
    screen: () => null,
  },
  second: {
    screen: () => null,
  },
  third: {
    screen: () => null,
  }
}, {
  tabBarComponent: TabBar2,
})

export default createAppContainer(App)