import React from "react";
import {
  View,
  Button,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  SafeAreaView
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import Home from "./Home/Home";
import Settings from "./Settings/Settings";
import Room from './Room/Room'
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  logoutButton: {
    position: "absolute",
    width: "100%",
    bottom: 0
  }
});

class DrawerWithLogoutButton extends React.Component {
  render() {
    let list = this.props.room.list;
    let newList = list.map(item => ({
      id: item.id,
      label: item.name,
      key: item.id
    }));
    return (
      <View style={{ height: "100%" }}>
        <ScrollView>
          <SafeAreaView
            style={styles.container}
            forceInset={{ top: "always", horizontal: "never" }}
          >
            <DrawerItems
              items={newList}
              renderIcon={() => {}}
              getLabel={item => item.route.label}
              onItemPress={item => {
                this.props.navigation.navigate("Room", item.route);
                this.props.navigation.closeDrawer();
              }}
            />
            <DrawerItems {...this.props} />
          </SafeAreaView>
        </ScrollView>
        <View style={styles.logoutButton}>
          <Button title="Logout" onPress={this._signOutAsync} />
        </View>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}

const DrawerButton = connect(state => state)(DrawerWithLogoutButton);

const Drawer = createDrawerNavigator(
  {
    Settings: {
      screen: Settings
    },
    Room: {
      screen: Room
    }
  },
  {
    contentComponent: DrawerButton
  }
);

export default createAppContainer(Drawer);
