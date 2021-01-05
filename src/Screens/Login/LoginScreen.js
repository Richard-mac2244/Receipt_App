import React from 'react';
import { Button, StyleSheet, SafeAreaView, Text, TextInput, TouchableHighlight} from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

const LoginScreen = ({navigation}) => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  return(
  <SafeAreaView style={styles.container}>
    <Text>Screen: Login</Text>
    <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    <Button title='Sign in' onPress={() => navigation.navigate('CreateAccount')} />
    <Button title='Create Account' onPress={() => navigation.navigate('GetStarted')} />
  </SafeAreaView>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});

export default LoginScreen;
