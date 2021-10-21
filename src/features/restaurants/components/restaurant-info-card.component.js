import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const ResaurantCard = styled(Card)`
  padding: 10px;
`;

const ResaurantCardCover = styled(Card.Cover)`
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Resaurant",
    icon,
    photos = [
      "https://bcfdmo.com/wp-content/uploads/2016/10/Headquarters-e1475684606177.jpg",
    ],
    address = "2201 I70 Dr NW",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <ResaurantCard elevation={5}>
      <ResaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
    </ResaurantCard>
  );
};
