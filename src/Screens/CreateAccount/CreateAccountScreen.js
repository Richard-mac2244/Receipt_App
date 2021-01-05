import React, {useState} from 'react';
import { Alert, Button, Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class CreateAccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      passWord: null,
      dimensions: {
      window,
      screen
    },
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handlePassSubmit = this.handlePassSubmit.bind(this);
  }

  handleUserChange(text) {
    this.setState({userName: text});
  }

  handleUserSubmit(text) {
    Alert.alert(this.state.userName);
  }

  handlePassChange(text) {
    this.setState({passWord: text});
  }

  handlePassSubmit(text) {
    Alert.alert(this.state.passWord);
  }

  render() {
    const { dimensions } = this.state;
    return (
      <SafeAreaView style={styles.title}>
        <Text>Screen: Create Account</Text>
        <TextInput
          placeholder = "Username"
          placeholderTextColor = "grey"
          onChangeText = {(text) => this.handleUserChange(text)}
          returnKeyType = 'search'
          onSubmitEditing = {this.handleUserSubmit}
          style={{ borderRadius: 8, fontWeight:'400', paddingLeft: 6, width: dimensions.window.width/1.5, height: 40, backgroundColor:'white', alignItems: 'center'}}
          />

          <TextInput
            placeholder = "Password"
            placeholderTextColor = "grey"
            onChangeText = {(text) => this.handlePassChange(text)}
            returnKeyType = 'search'
            onSubmitEditing = {this.handlePassSubmit}
            style={{ top: 4, borderRadius: 8, fontWeight:'400', paddingLeft: 6, width: dimensions.window.width/1.5, height: 40, backgroundColor:'white', alignItems: 'center'}}
            />
        <Button title='Sign In' onPress={() => this.props.navigation.navigate('Home')} />
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

export default CreateAccountScreen
