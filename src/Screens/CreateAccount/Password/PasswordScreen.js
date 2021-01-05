import React, {useState} from 'react';
import { Alert, Button, Dimensions, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class PasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passWord: null,
      dimensions: {
      window,
      screen
    },
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handlePassSubmit = this.handlePassSubmit.bind(this);
  }

  handlePassChange(text) {
    this.setState({passWord: text});
  }

  handlePassSubmit(text) {
    Alert.alert(this.state.passWord);
  }

  render() {
    const { dimensions } = this.state;
    return(
      <SafeAreaView style={styles.title}>
        <Text> Screen: Password</Text>
        <TextInput
          placeholder = "Password"
          placeholderTextColor = "grey"
          onChangeText = {(text) => this.handlePassChange(text)}
          returnKeyType = 'search'
          onSubmitEditing = {this.handlePassSubmit}
          style={{ borderRadius: 8, fontWeight:'400', paddingLeft: 6, width: dimensions.window.width/1.5, height: 40, backgroundColor:'white', alignItems: 'center'}}
          />
        <Button title="Next" onPress={() => this.props.navigation.navigate('Verify')} />
        <Button title="Back" onPress={() => this.props.navigation.navigate('Username')} />
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

export default PasswordScreen
