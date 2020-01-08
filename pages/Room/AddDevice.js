import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {addDevice} from "../../actions/roomActions";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 40,
    color: "#fff",
    position: "relative",
    height: "100%"
  },
  textInput: {
    borderColor: "grey",
    borderRadius: 4,
    borderWidth: 1,
    margin: 10,
    padding: 10
  },
  addButton: {
    position: "absolute",
    bottom: 60,
    width: "100%"
  }
});

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const placeholderDevice = {
  label: "Select device",
  value: null,
  color: "#9EA0A4"
};

const placeholderFunction = {
  label: "Select function",
  value: null,
  color: "#9EA0A4"
};

class AddDevice extends React.Component {

  state = {
    title: "",
    device: "",
    fun: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Title</Text>
          <TextInput
            value={this.state.title}
            placeholder="Title"
            style={styles.textInput}
            onChangeText={newTitle => this.setState({ title: newTitle })}
          />
        </View>
        <View>
          <Text>Device</Text>
          <RNPickerSelect
            placeholder={placeholderDevice}
            onValueChange={value => this.setState({ device: value })}
            items={[{ label: "MongooseOS-67149", value: 1 }]}
          />
        </View>
        <View>
          <Text>Function</Text>
          <RNPickerSelect
            placeholder={placeholderFunction}
            onValueChange={value => this.setState({ fun: value })}
            items={[
              { label: "on/off", value: 1 },
              { label: "blink", value: 2 }
            ]}
          />
        </View>
        <View style={styles.addButton}>
          <Button
            title="Add Device"
            onPress={() => {
              this.props.addDevice(
                this.props.currentRoom.id,
                this.state.title,
                this.state.device,
                this.state.fun
                )
              this.props.closeModal();
            }}
          />
        </View>
      </View>
    );
  }
}

export default connect(state => state, { addDevice })(AddDevice);
