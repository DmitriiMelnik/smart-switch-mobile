import React from "react";
import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import { addRoom, removeRoom } from "../../actions/roomActions";

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderColor: "grey",
    borderRadius: 4,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  container: {
    marginTop: 20
  },
  textInputContainer: {
    margin: 10,
    borderColor: "grey",
    borderRadius: 4,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    margin: 10,
    width: 235
  },
  button: {
    paddingHorizontal: 5,
    backgroundColor: "#2196F3",
    height: "100%",
    color: "white",
    textTransform: "uppercase",
    padding: 12
  },
  removeButton: {
    padding: 10,
    height: "100%",
    width: 30
  }
});

class Settings extends React.Component {
  static navigationOptions = {
    drawerLabel: "Settings"
  };

  state = {
    newRoom: ""
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.room.list.map(room => (
          <View style={styles.card} key={room.id}>
            <Text style={{ margin: 10 }}>{room.name}</Text>
            <Text
              style={styles.removeButton}
              onPress={() => {
                this.props.removeRoom(room.id);
                this.forceUpdate();
              }}
            >
              X
            </Text>
          </View>
        ))}
        <View style={styles.textInputContainer}>
          <TextInput
            value={this.state.newRoom}
            style={styles.textInput}
            placeholder="Room name"
            onChangeText={room => this.setState({ newRoom: room })}
          />
          <Text
            style={styles.button}
            onPress={() => {
              this.props.addRoom(this.state.newRoom);
              this.setState({ newRoom: "" });
            }}
          >
            Add Room
          </Text>
        </View>
      </View>
    );
  }
}

const mapStore = store => store;

export default connect(mapStore, { addRoom, removeRoom })(Settings);
