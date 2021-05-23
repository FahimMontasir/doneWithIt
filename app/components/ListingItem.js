import React from "react";
import styled from "styled-components/native";
import colors from "../config/colors";

const ListingItem = ({ image, title, subtitle, IconComponent }) => {
  return (
    <Container>
      {IconComponent}
      {image && <ListImage source={image} />}
      <ListHeading>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </ListHeading>
    </Container>
  );
};
export default ListingItem;

const Container = styled.View`
  flex-direction: row;
`;
const ListImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
const ListHeading = styled.View`
  margin-left: 10px;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 25px;
  font-weight: 500;
`;
const Subtitle = styled.Text`
  font-size: 20px;
  color: ${colors.secondary};
`;
