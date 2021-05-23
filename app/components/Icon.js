import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Icon = ({
  name,
  color = "white",
  size = 30,
  backgroundColor = "black",
}) => {
  return (
    <Container backgroundColor={backgroundColor} size={size}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </Container>
  );
};
export default Icon;

const Container = styled.View`
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.size * 2}px;
  width: ${(props) => props.size * 2}px;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.size}px;
`;
