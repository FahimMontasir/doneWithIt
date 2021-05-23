import React from "react";
import styled from "styled-components/native";

const AppCard = () => {
  return (
    <Container>
      <CardImg source={require("../assets/jacket.jpg")} />
      <CardHead>
        <Title>A red jacket for sale</Title>
        <Subtitle>$100</Subtitle>
      </CardHead>
    </Container>
  );
};
export default AppCard;

const Container = styled.View`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;
const CardImg = styled.Image`
  width: 100%;
  height: 200px;
`;
const Title = styled.Text`
  font-size: 23px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: tomato;
  margin-top: 5px;
`;
const CardHead = styled.View`
  padding: 15px;
`;
