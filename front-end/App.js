import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./src/pages/Home";
import { Form } from "./src/pages/Form";
import { Section } from "./src/pages/Section";

import colors from "./src/styles/colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.gray_1 },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Formulários" component={Form} />
        <Stack.Screen name="Seção" component={Section} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
