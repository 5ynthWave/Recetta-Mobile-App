import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Recipes({
  meals,
  categories,
}: {
  meals: any;
  categories: any;
}) {
  return (
    <View>
      {categories.length == 0 && meals.length == 0 ? null : (
        <MasonryList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          numColumns={2}
          showsVerticalScrollIndicator={true}
          renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
          onEndReachedThreshold={0.1}
        />
      )}
    </View>
  );
}

const RecipeCard = ({ item, index }: { item: any; index: any }) => {
  return (
    <View>
      <Link
        href={{ pathname: "/home/RecipeDetailScreen", params: { ...item } }}
      >
        <Pressable style={styles.recipeCard}>
          <Image
            source={{ uri: item.strMealThumb }}
            style={styles.recipeImage}
          />
          <Text style={styles.recipeTitle}>
            {item.strMeal.length >= 20
              ? item.strMeal.slice(0, 17) + "..."
              : item.strMeal}
            &nbsp;
            <Feather name="arrow-up-right" size={20} color="black" />
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeCard: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#F3C86A",
    marginHorizontal: "10%",
    marginVertical: 15,
    borderRadius: 15,

    shadowColor: "#F3C86A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 7.5,
  },
  recipeImage: {
    width: "100%",
    height: 215,
    borderRadius: 15,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 20,
  },
});
