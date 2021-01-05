import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.title}>
        <Text> This is the homescreen </Text>
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

export default HomeScreen;
