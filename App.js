import React from 'react';
import HomeScreen from './src/Screens/Home/index.js';
import LoginScreen from './src/Screens/Login/index.js';
import Navigator from './src/Navigation/index.js';
import { StyleSheet, View, Text } from 'react-native';


const App = () => <Navigator />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});

export default App;
