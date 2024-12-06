import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SavedListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        <Feather name="bookmark" size={30} color={"#F3C86A"} /> &nbsp;
        <Text style={{ color: "white" }}>Saved Recipes</Text>
      </Text>
    </ScrollView>
  );
};

export default SavedListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 30,
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 50,
    backgroundColor: "#2B2B2B",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
  },
});
