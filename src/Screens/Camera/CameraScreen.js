import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

class CameraScreen extends React.Component {
  render() {
    return (
      <View style={styles.title}>
        <Text> This is the camera screen </Text>
      </View>
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

export default CameraScreen;
