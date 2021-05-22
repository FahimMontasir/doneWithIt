import React from "react";
import { Image, Text } from "react-native";
import styled from "styled-components/native";
import colors from "../config/colors";

const ViewImageScreen = (props) => {
  return (
    <Container>
      <CloseIcon />
      <OpenIcon />
      <HeroImage source={require("../assets/chair.jpg")} resizeMode="contain" />
    </Container>
  );
};
export default ViewImageScreen;
const Container = styled.View`
  flex: 1;
`;
const CloseIcon = styled.View`
  background-color: ${colors.primary};
  width: 50px;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50px;
`;
const OpenIcon = styled.View`
  background-color: ${colors.secondary};
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50px;
`;
const HeroImage = styled.Image`
  width: 100%;
  height: 100%;
`;
