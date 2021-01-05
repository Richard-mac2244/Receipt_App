import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../Screens/Login/LoginScreen';
import GetStartedScreen from '../Screens/CreateAccount/GetStarted/GetStartedScreen';
import UsernameScreen from '../Screens/CreateAccount/Username/UsernameScreen';
import PasswordScreen from '../Screens/CreateAccount/Password/PasswordScreen';
import VerifyScreen from '../Screens/CreateAccount/VerifyPass/VerifyScreen';
import PhoneNumberScreen from '../Screens/CreateAccount/PhoneNumber/PhoneNumberScreen';
import CreateAccountScreen from '../Screens/CreateAccount/CreateAccountScreen';

const AuthNavigatorConfig =  {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
}

const RouteConfigs = {
  Login: LoginScreen,
  CreateAccount: CreateAccountScreen,
  GetStarted: GetStartedScreen,
  Username: UsernameScreen,
  Password: PasswordScreen,
  Verify: VerifyScreen,
  PhoneNumber: PhoneNumberScreen,
}

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
