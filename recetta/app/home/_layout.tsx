import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="RecipeDetailScreen" />
    </Stack>
  );
};

export default HomeLayout;
