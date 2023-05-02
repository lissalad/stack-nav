import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DogList from "./components/DogList";
import DogDetails from "./components/DogDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTintColor: "#ccfffd",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={DogList} />
        <Stack.Screen name="Details" component={DogDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
