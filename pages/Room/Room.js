import React from "react";
import { StyleSheet, View, Text, Modal, Button } from "react-native";
import { Switch } from "react-native-switch";
import AddDevice from "./AddDevice";
import { connect } from "react-redux";
import axios from "axios";

const token = "ttfwk91YZqx91v91Cwj91XYKcg";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 40,
    color: "#fff",
    position: "relative",
    height: "100%"
  },
  device: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  containerButtom: {
    position: "absolute",
    bottom: 30,
    right: 0
  },
  addButtonText: {
    fontSize: 100,
    color: "green"
  }
});

class CustomSwitch extends React.Component {
  state = {
    value: false
  };

  render() {
    return (
      <Switch
        value={this.state.value}
        onValueChange={() => {
          this.setState({ value: !this.state.value });
          this.props.update();
        }}
      />
    );
  }
}

class Room extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null
  };

  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  toggleDevice = device => {
    axios
      .post(
        "https://mdash.net/api/v2/devices/device5/rpc/onOff?access_token=" +
          token,
      )
      .then(response => {
        console.log(response);
      })
      .catch(error=> console.log(error))
    console.log("toggle");
    console.log(device);
  };

  pressDevice = device => {
    axios
      .post(
        "https://mdash.net/api/v2/devices/device5/rpc/blink?access_token=" +
          token,
      )
      .then(response => {
        console.log(response);
      })
      .catch(error=> console.log(error))
  };

  render() {
    const currentRoom = this.props.room.list.find(
      item => item.id === this.props.navigation.state.params.id
    );

    return (
      <View style={styles.container}>
        <View>
          {currentRoom.devices.map(device => (
            <View style={styles.device} key={device.id}>
              <Text>{device.title}</Text>
              {device.fun == 1 ? (
                <CustomSwitch update={() => this.toggleDevice(device)} />
              ) : (
                <Button
                  title="click"
                  onPress={() => this.pressDevice(device)}
                />
              )}
            </View>
          ))}
          {/* {currentRoom.devices.map(device => {
            <Text> tes</Text> */}
          {/* // <View style={styles.device} key={device.id}> */}

          {/* <Text>{device.title}</Text>
              {device.fun == 1 ? (
                <Switch
                  // value={}
                  onValueChange={() => this.toggleDevice(device)}
                />
              ) : (
                <Button
                  title="click"
                  onPress={() => this.pressDevice(device)}
                />
              )} */}
          {/* // </View>
          })} */}
        </View>
        <View style={styles.containerButtom}>
          <Text
            style={styles.addButtonText}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            +
          </Text>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
          >
            <AddDevice
              closeModal={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              currentRoom={currentRoom}
            />
          </Modal>
        </View>
      </View>
    );
  }
}

export default connect(state => state)(Room);
