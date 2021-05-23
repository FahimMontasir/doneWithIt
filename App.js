import React from "react";
import { StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import Icon from "./app/components/Icon";
import ListingItem from "./app/components/ListingItem";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = () => {
  return <ListingItem title="My title" IconComponent={<Icon name="email" />} />;
};
export default App;
