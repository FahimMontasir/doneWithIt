import React from "react";
import styled from "styled-components/native";
import colors from "../config/colors";

const AppButton = ({ title, onPress, color }) => {
  return (
    <ButtonContainer onPress={onPress} color={color}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};
export default AppButton;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.color === "secondary" ? colors.secondary : colors.primary};
  padding: 10px;
  width: 100%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
const Title = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  font-weight: 500;
  text-transform: uppercase;
`;
