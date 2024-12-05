import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

const HomeLayout = () => {
  return (
    <Stack initialRouteName="home" screenOptions={{}}>
      <Stack.Screen name="home" options={{ header: () => null }} />
      <Stack.Screen
        name="RecipeDetailScreen"
        options={{ header: DetailHeader }}
      />
    </Stack>
  );
};

const DetailHeader = () => {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <View
      style={{
        width: "100%",
        position: "absolute",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* Back button */}
      <Pressable
        style={{
          width: 72,
          height: 72,
          backgroundColor: "#F3C86A",
          borderRadius: 100,
          margin: 15,
          padding: 15,
          elevation: 5,

          shadowColor: "#F3C86A",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
        onPress={() => {
          router.replace("/home/home");
        }}
      >
        <Feather name="arrow-left" size={40} color="black" />
      </Pressable>
      {/* Save button */}
      <Pressable
        style={{
          width: 72,
          height: 72,
          backgroundColor: "white",
          borderRadius: 100,
          margin: 15,
          padding: 15,
          elevation: 5,

          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        }}
        onPress={() => setIsSaved(!isSaved)}
      >
        <Ionicons
          name="bookmark"
          size={40}
          color={isSaved ? "#FE7240" : "#2B2B2B"}
        />
      </Pressable>
    </View>
  );
};

export default HomeLayout;
