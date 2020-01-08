import React from "react";
import { StyleSheet, Button, Image } from "react-native";
import {connect} from 'react-redux';


class Home extends React.Component {

  static navigationOptions = {
    drawerLabel: () => null
  };

  render() {
    return (
      <Button
        onPress={() => {
          return this.props.navigation.navigate("Settings");
        }}
        title="Go to notifications"
      />
    );
  }
}

const mapStore = (store) => store
export default connect(mapStore)(Home);
