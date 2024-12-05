import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";

const App = () => {
  return (
    <NavigationContainer>
      <Stack initialRouteName="Welcome">
        <Stack.Screen name="index" />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="SavedListScreen" />
        <Stack.Screen name="SettingsListScreen" />
      </Stack>
    </NavigationContainer>
  );
};

export default App;
