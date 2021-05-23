import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
const WelcomeScreen = (props) => {
  return (
    <ContainerImage
      blurRadius={10}
      source={require("../assets/background.jpg")}
    >
      <LogoContainer>
        <Logo source={require("../assets/logo-red.png")} />
        <Tagline>Sell what you Don't need anymore</Tagline>
      </LogoContainer>
      <ButtonContainer>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </ButtonContainer>
    </ContainerImage>
  );
};
export default WelcomeScreen;

const ContainerImage = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
const LogoContainer = styled.View`
  align-items: center;
  position: absolute;
  top: 70px;
`;
const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;
const ButtonContainer = styled.View`
  padding: 0 10px;
  width: 100%;
`;
const Tagline = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 700;
`;
