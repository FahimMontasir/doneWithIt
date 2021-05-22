import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import colors from "../config/colors";
const WelcomeScreen = (props) => {
  return (
    <ContainerImage source={require("../assets/background.jpg")}>
      <LogoContainer>
        <Logo source={require("../assets/logo-red.png")} />
        <Text>Sell what you Don't need anymore</Text>
      </LogoContainer>
      <LoginButton />
      <SingInButton />
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
const LoginButton = styled.View`
  background-color: ${colors.primary};
  width: 100%;
  height: 50px;
`;
const SingInButton = styled.View`
  background-color: ${colors.secondary};
  width: 100%;
  height: 50px;
`;
