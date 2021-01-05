import React from 'react';
import { AsyncStorage } from 'react-native';
import { Button, SafeAreaView, StyleSheet, View, Text } from 'react-native';

class SettingScreen extends React.Component {
  signOutAsync = async() => {
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <SafeAreaView style = {styles.title}>
        <Text> This is the setting screen </Text>
        <Button title = "Sign Out" onPress={this.signOutAsync} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
});

export default SettingScreen;
