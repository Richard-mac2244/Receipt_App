import React, {useState} from 'react';
import { Alert, Button, Dimensions, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class PhoneNumberScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNunber: null,
      dimensions: {
      window,
      screen
    },
    };
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handlePhoneSubmit = this.handlePhoneSubmit.bind(this);
  }

  handlePhoneChange(text) {
    this.setState({phoneNumber: text});
  }

  handlePhoneSubmit(text) {
    Alert.alert(this.state.phoneNumber);
  }

  render() {
    const { dimensions } = this.state;
    return(
      <SafeAreaView style={styles.title}>
        <Text> Screen: Password</Text>
        <TextInput
          placeholder = "PhoneNumber"
          placeholderTextColor = "grey"
          onChangeText = {(text) => this.handlePhoneChange(text)}
          returnKeyType = 'search'
          onSubmitEditing = {this.handlePhoneSubmit}
          style={{ borderRadius: 8, fontWeight:'400', paddingLeft: 6, width: dimensions.window.width/1.5, height: 40, backgroundColor:'white', alignItems: 'center'}}
          />
        <Button title="Next" onPress={() => this.props.navigation.navigate('Home')} />
        <Button title="Back" onPress={() => this.props.navigation.navigate('Verify')} />
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

export default PhoneNumberScreen
