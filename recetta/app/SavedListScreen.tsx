import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAtom } from "jotai";
import { savedRecipesAtom } from "@/mockdb/atoms";
import { Link } from "expo-router";

const SavedListScreen = () => {
  const [savedRecipes, setSavedRecipes] = useAtom(savedRecipesAtom);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        <Feather name="bookmark" size={30} color={"#F3C86A"} /> &nbsp;
        <Text style={{ color: "white" }}>Saved Recipes</Text>
      </Text>
      <View>
        {savedRecipes.length == 0 ? (
          <View style={{ marginTop: "50%" }}>
            <Text style={{ color: "gray", fontSize: 30, textAlign: "center" }}>
              No saved recipes
            </Text>
            <Text style={{ color: "gray", fontSize: 20, textAlign: "center" }}>
              Start searching for your favorite recipes!
            </Text>
          </View>
        ) : (
          savedRecipes.map((recipe, idx) => {
            return (
              <View style={styles.listContainer}>
                <Link
                  href={{
                    pathname: "/home/RecipeDetailScreen",
                    params: { ...recipe },
                  }}
                >
                  <Pressable style={{ flexDirection: "row" }}>
                    <Image
                      source={{ uri: recipe.strMealThumb }}
                      style={{ width: 150, height: 150, borderRadius: 15 }}
                    />
                    <Text
                      style={{
                        marginLeft: 15,
                        fontSize: 25,
                        fontWeight: 400,
                        color: "white",
                        alignSelf: "center",
                      }}
                    >
                      {recipe.strMeal}
                      &nbsp;
                      <Feather
                        name="arrow-up-right"
                        size={30}
                        color="#F3C86A"
                      />
                    </Text>
                  </Pressable>
                </Link>
              </View>
            );
          })
        )}
      </View>
      <Text style={{ marginBottom: 130 }}></Text>
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
  listContainer: {
    borderRadius: 15,
    backgroundColor: "#2B2B2B",
    marginBottom: 30,
    marginHorizontal: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
