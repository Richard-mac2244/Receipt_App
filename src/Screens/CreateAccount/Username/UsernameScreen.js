import React, {useState} from 'react';
import { Alert, Button, Dimensions, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class UsernameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      dimensions: {
      window,
      screen
    },
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleUserChange(text) {
    this.setState({userName: text});
  }

  handleUserSubmit(text) {
    Alert.alert(this.state.userName);
  }

  render() {
    const { dimensions } = this.state;
    return(
      <SafeAreaView style={styles.title}>
        <Text> Screen: Username </Text>
        <TextInput
          placeholder = "Username"
          placeholderTextColor = "grey"
          onChangeText = {(text) => this.handleUserChange(text)}
          returnKeyType = 'search'
          onSubmitEditing = {this.handleUserSubmit}
          style={{ borderRadius: 8, fontWeight:'400', paddingLeft: 6, width: dimensions.window.width/1.5, height: 40, backgroundColor:'white', alignItems: 'center'}}
          />
        <Button title="Next" onPress={() => this.props.navigation.navigate('Password')} />
        <Button title="Back" onPress={() => this.props.navigation.navigate('GetStarted')} />
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

export default UsernameScreen
