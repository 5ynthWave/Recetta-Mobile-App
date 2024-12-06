import { activeRecipeAtom, savedRecipesAtom } from "@/mockdb/atoms";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
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
  const [activeRecipe] = useAtom(activeRecipeAtom);
  const [savedRecipes, setSavedRecipes] = useAtom(savedRecipesAtom);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // If there is no active recipe, return nothing (safeguard)
    if (activeRecipe === null) return;
    // then check if the active recipe is saved
    const isSaved = savedRecipes.some((recipe) => {
      return recipe.idMeal === activeRecipe.idMeal;
    });
    setIsSaved(isSaved);
    console.log(isSaved);
    console.log(savedRecipes);
  }, [activeRecipe, savedRecipes]);

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
        onPress={() => {
          console.log(savedRecipes);
          // If there is no active recipe, return nothing (safeguard)
          if (activeRecipe === null) return;
          // If it's saved, then try and find (filter) inside the savedRecipes
          // array and delete it
          if (isSaved) {
            const filteredRecipes = savedRecipes.filter((recipe) => {
              return recipe.idMeal !== activeRecipe.idMeal;
            });
            setSavedRecipes(filteredRecipes);
          }
          // Otherwise, create a shallow copy and set it as the new
          // active recipes
          else {
            /*
            console.log(
              "Saved recipes: ",
              savedRecipes,
              "\nActive recipe: ",
              activeRecipe
            );
            console.log([...savedRecipes, activeRecipe]); */
            setSavedRecipes([...savedRecipes, activeRecipe]);
          }
        }}
      >
        {isSaved ? (
          <Ionicons name="bookmark" size={40} color={"#F3C86A"} />
        ) : (
          <Feather name="bookmark" size={40} color={"#2B2B2B"} />
        )}
      </Pressable>
    </View>
  );
};

export default HomeLayout;
