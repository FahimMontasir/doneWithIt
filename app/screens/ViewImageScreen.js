import React from "react";
import { Image, Text } from "react-native";
import styled from "styled-components/native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = (props) => {
  return (
    <Container>
      <CloseIcon>
        <MaterialCommunityIcons name="close" size={40} />
      </CloseIcon>
      <OpenIcon>
        <MaterialCommunityIcons name="trash-can-outline" size={40} />
      </OpenIcon>
      <HeroImage source={require("../assets/chair.jpg")} resizeMode="contain" />
    </Container>
  );
};
export default ViewImageScreen;
const Container = styled.View`
  flex: 1;
`;
const CloseIcon = styled.View`
  position: absolute;
  left: 0;
  top: 0;
`;
const OpenIcon = styled.View`
  position: absolute;
  right: 0;
  top: 0;
`;
const HeroImage = styled.Image`
  width: 100%;
  height: 100%;
`;
