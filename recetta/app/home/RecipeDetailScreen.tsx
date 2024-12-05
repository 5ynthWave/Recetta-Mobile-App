import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RecipeDetailScreen() {
  const item = useLocalSearchParams();
  console.log(item);

  return (
    <ScrollView style={{}}>
      <StatusBar style="auto" />
      <Text>blah blah</Text>
    </ScrollView>
  );
}
