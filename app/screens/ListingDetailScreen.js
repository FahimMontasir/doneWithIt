import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import ListingItem from "../components/ListingItem";

const ListingDetailScreen = () => {
  return (
    <>
      <StatusBar translucent />
      <Img source={require("../assets/jacket.jpg")} />
      <Head>
        <Title>A red jacket for sale</Title>
        <Subtitle>$100</Subtitle>
        <ListingItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subtitle="top rated seller"
        />
      </Head>
    </>
  );
};
export default ListingDetailScreen;

const Img = styled.Image`
  width: 100%;
  height: 300px;
`;
const Title = styled.Text`
  font-size: 25px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: tomato;
  margin-top: 5px;
  font-size: 20px;
  margin-bottom: 50px;
`;
const Head = styled.View`
  padding: 15px;
`;
