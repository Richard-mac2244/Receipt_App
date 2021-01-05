import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

class GetStartedScreen extends React.Component {
  render() {
    return(
      <SafeAreaView style={styles.title}>
        <Text> Screen: Getting Started </Text>
        <Button title="Get Started" onPress={() => this.props.navigation.navigate('Username')} />
        <Button title="Back" onPress={() => this.props.navigation.navigate('Login')} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 40,
  },
});

export default GetStartedScreen
