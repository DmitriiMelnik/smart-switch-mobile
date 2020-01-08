import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./pages/Login/Login";
import Drawer from "./pages/Drawer";
import AuthLoading from "./pages/Login/AuthLoading";
import {Provider} from 'react-redux';

// Imports: Redux Persist Persister
import store from "./store/store";

const AppStack = createStackNavigator({
  App: {
    screen: Drawer,
    navigationOptions: {
      header: null
    }
  }
});
const AuthStack = createStackNavigator({ SignIn: Login });

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Navigation />
      </Provider>
    );
  }
}

export default App;
