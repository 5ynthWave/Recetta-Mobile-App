import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useLocalSearchParams } from "expo-router";

export default function RecipeDetailScreen() {
  const item = useLocalSearchParams();
  console.log(item);

  return (
    <ScrollView style={{}}>
      <Text>Recipe Detail Screen</Text>
    </ScrollView>
  );
}
