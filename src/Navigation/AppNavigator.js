import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../../src/Screens/Home/HomeScreen';
import CameraScreen from '../../src/Screens/Camera/CameraScreen';
import SettingScreen from '../../src/Screens/Setting/SettingScreen';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
}

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Camera: {
    screen: CameraScreen,
  },
  Setting: {
    screen: SettingScreen,
  }
}

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
