import React from "react";
import { StatusBar, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = (props) => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ViewImageScreen />
    </>
  );
};
export default App;
