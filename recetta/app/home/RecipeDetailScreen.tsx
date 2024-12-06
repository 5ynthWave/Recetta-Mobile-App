import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useAtom } from "jotai";
import { activeRecipeAtom, Recipe } from "@/mockdb/atoms";

const iconArray = ["clock", "users", "sun", "layers"];

export default function RecipeDetailScreen() {
  // For knowing what the active recipe is
  const [activeRecipe, setActiveRecipe] = useAtom(activeRecipeAtom);

  const item: { strMeal: string; strMealThumb: string; idMeal: string } =
    useLocalSearchParams();
  console.log(typeof item.idMeal);

  const [meal, setMeal] = useState([]);

  useEffect(() => {
    getMealData(item.idMeal);
    // Cleanup activeRecipe when the component unmounts (gets destroyed),
    // note that it happens on unmount because the useEffect has an empty dependency array
    return () => {
      setActiveRecipe(null);
    };
  }, []);

  // Get the recipes from the API ID
  const getMealData = async (id: any) => {
    try {
      // Fetch the API
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log("Got meal-data: ", response.data);
      // Check that the response is valid
      if (response && response.data) {
        setMeal(response.data.meals[0]);
        setActiveRecipe({ ...response.data.meals[0] } as Recipe);
      }
    } catch (err: any) {
      console.error("An error has occurred: ", err.message);
    }
  };

  const ingredientsIndexes = (meal) => {
    if (!meal) return [];
    let indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        indexes.push(i);
      }
    }
    return indexes;
  };

  return (
    <ScrollView style={{}}>
      <StatusBar style={"light"} />
      <View style={styles.header}>
        <Image source={{ uri: item.strMealThumb }} style={styles.headerImage} />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "white",
            margin: 24,
          }}
        >
          <Feather name="tag" size={22} color="#F3C86A" /> &nbsp;
          {meal.strMeal}
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "lightgray",
            marginHorizontal: 24,
            marginBottom: 24,
          }}
        >
          <Feather name="map-pin" size={22} color="#AAD15F" /> &nbsp;
          {meal.strArea}
        </Text>
      </View>
      {/* Recipe Info Chips */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 36,
        }}
      >
        <RecipeInfoChip idx={0} info={"36"} description={"minutes"} />
        <RecipeInfoChip idx={1} info={"3"} description={"servings"} />
        <RecipeInfoChip idx={2} info={"696"} description={"calories"} />
        <RecipeInfoChip idx={3} info={"Easy"} description={"difficulty"} />
      </View>
      {/* Ingredients Section */}
      <View
        style={{
          backgroundColor: "#2B2B2B",
          borderRadius: 15,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.4,
          shadowRadius: 10,
        }}
      >
        <Text
          style={{ fontWeight: 500, fontSize: 24, color: "white", margin: 24 }}
        >
          <Feather name={"menu"} size={22} color={"white"} /> &nbsp; Ingredients
        </Text>
        <View>
          {/* List the ingredients and the amount thereof for the recipe */}
          {ingredientsIndexes(meal).map((i) => {
            return (
              <View key={i}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    backgroundColor: "#F3C86A",
                    flexDirection: "row",
                    marginVertical: 15,
                    marginHorizontal: 30,
                    position: "absolute",
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 50,
                    marginVertical: 5,
                  }}
                >
                  <Text
                    style={{ fontWeight: 400, fontSize: 20, color: "white" }}
                  >
                    {meal["strMeasure" + i]}&nbsp;
                  </Text>
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 20,
                      color: "#AAD15F",
                    }}
                  >
                    {meal["strIngredient" + i]}
                  </Text>
                </View>
              </View>
            );
          })}
          <Text style={{ marginBottom: 40 }}></Text>
        </View>
      </View>

      {/* Instructions Section */}
      <View style={{ margin: 30 }}></View>
      <View
        style={{
          backgroundColor: "#2B2B2B",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.4,
          shadowRadius: 10,
        }}
      >
        <Text
          style={{ fontWeight: 500, fontSize: 24, color: "white", margin: 24 }}
        >
          <Feather name={"menu"} size={22} color={"white"} /> &nbsp;
          Instructions
        </Text>
        <Text
          style={{
            marginHorizontal: 31.5,
            fontWeight: 400,
            fontSize: 20,
            color: "white",
          }}
        >
          {meal.strInstructions}
        </Text>
        <Text style={{ marginBottom: 160 }}></Text>
      </View>
    </ScrollView>
  );
}

const RecipeInfoChip = ({
  idx,
  info,
  description,
}: {
  idx: number;
  info: string;
  description: string;
}) => {
  return (
    <View style={styles.infoChipContainer}>
      <Feather
        name={iconArray[idx] as any}
        size={54}
        color="gray"
        style={{
          backgroundColor: "white",
          borderRadius: 1000,
          padding: 18,
          paddingVertical: 16,
        }}
      />
      <View style={styles.infoChipTextContainer}>
        <Text style={{ fontWeight: "700", fontSize: 24 }}> {info} </Text>
        <Text style={{ fontWeight: "600", fontSize: 16, marginTop: 2.5 }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    height: 600,
    backgroundColor: "#2B2B2B",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  headerImage: {
    alignSelf: "center",
    width: "100%",
    height: 500,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  infoChipContainer: {
    backgroundColor: "#F3C86A",
    width: 110,
    // minHeight: 200,
    // maxHeight: 180,
    borderRadius: 1000,
    // justifyContent: "space-around",
    alignItems: "center",
    // paddingHorizontal: 48,
    padding: 12,
    paddingBottom: 36,
    elevation: 5,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  infoChipTextContainer: {
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
