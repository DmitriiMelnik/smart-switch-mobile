import React from "react";
import { StyleSheet, Button, View, TextInput, AsyncStorage } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 110
  },
  textInput: {
    borderColor: "grey",
    borderRadius: 4,
    borderWidth: 1,
    margin: 10,
    padding: 10
  },
  button: {
    borderColor: "grey",
    borderRadius: 4,
    borderWidth: 1,
    margin: 10
  }
});

class Login extends React.Component {
  static navigationOptions = {
    drawerLabel: "Login",
    title: "Please sign in"
  };

  _signInAsync = async () => {
    setTimeout(()=> {
      AsyncStorage.setItem("userToken", "abc");
      this.props.navigation.navigate("App");  
    }, 500)
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Password" style={styles.textInput} secureTextEntry />
        <View style={styles.button}>
          <Button title="Login" onPress={this._signInAsync} />
        </View>
      </View>
    );
  }
}

export default Login;
