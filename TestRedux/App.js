import React from "react";
import { AppState, View } from "react-native";
import { Provider } from "react-redux";
import configureStore from './configureStore.js';
import Home from "./screens/home";

const store = configureStore();

export default function App(props) {
  return(
    <View style={{
      flex:1,
    }}>
      <Provider store={store}>
        <Home/>
      </Provider>
    </View>
  )
}