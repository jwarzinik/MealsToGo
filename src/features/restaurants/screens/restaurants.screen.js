import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import {
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  View,
} from "react-native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight + 2}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

import { RestaurantInfo } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantContainer>
      <RestaurantInfo />
    </RestaurantContainer>
  </SafeArea>
);
