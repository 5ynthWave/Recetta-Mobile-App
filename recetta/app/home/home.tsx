import { StyleSheet, TextInput, View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import Categories from "@/components/Categories";
import Recipes from "@/components/Recipes";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

// const baseUrl = "https://pokeapi.co/api/v2/";

const RecipeList = () => {
  // useState -> the primary way of storing variables in a React ecosystem
  // do not use conventional TypeScript, use React ecosystem when working with
  // variables or functions

  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  // Call the getCategories and getRecipes functions when the component mounts
  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const handleChangeCategory = (category: string) => {
    console.log("Category: ", category);
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  // Get the categories from the API
  const getCategories = async () => {
    try {
      // Fetch the API
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      console.log("Got categories: ", response.data);
      // Check that the response is valid
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err: any) {
      console.error("An error has occurred: ", err.message);
    }
  };

  // Get the recipes from the API
  const getRecipes = async (category = "Beef") => {
    try {
      // Fetch the API
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      console.log("Got recipes: ", response.data);
      // Check that the response is valid
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err: any) {
      console.error("An error has occurred: ", err.message);
    }
  };

  /*
  async function foo () {
    try {
      // Fetch the API
      const res = await fetch(baseUrl + "ability/tablets-of-ruin", {method: "GET"});
      // Check that the response is valid
      if(!res.ok)
        throw new Error(`Response status: ${res.status}`);
      // If so, then grab the JSON text:
      // The JSON object is based on the API's documentation for this specific API endpoint
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }
  */

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#2B2B2B",
          borderRadius: 15,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <Image
          source={require("@/assets/images/recipelistheader.jpeg")}
          style={styles.headerImage}
        />
        <Text
          style={{
            marginHorizontal: 35,
            marginTop: 25,
            marginBottom: 15,
            fontSize: 20,
            fontWeight: "400",
            color: "white",
          }}
        >
          <Feather name="user" size={25} color="#F3C86A" />
          &nbsp; Hello, User
        </Text>
        <Text style={styles.header}>
          Explore featured recipes below. &nbsp;
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Feather
          name="search"
          size={25}
          color="#2B2B2B"
          styles={{ marginRight: 15 }}
        />&nbsp;&nbsp;&nbsp;
        <TextInput
          style={{ fontSize: 17.5, fontWeight: "500" }}
          placeholder="Search for recipes"
          placeholderTextColor={"gray"}
        />
      </View>

      {/* Categories Filters */}
      <Text
        style={{
          fontSize: 23.5,
          fontWeight: "700",
          marginHorizontal: 35,
          marginVertical: 25,
        }}
      >
        <Feather name="menu" size={25} color="black" />
        &nbsp; Categories
      </Text>
      {
        // Check if the categories are not empty
        categories && (
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        )
      }

      {/* Recipe List */}
      <View
        style={{
          height: "100%",
          marginTop: 15,
          backgroundColor: "#2B2B2B",
          borderRadius: 15,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <Text style={styles.subHeader}>
          <Feather name="menu" size={25} color="white" />
          &nbsp; Recipes
        </Text>
        {/* Output individual from that category of recipes */}
        {
          // Check if the categories and meals are not empty
          categories && meals && (
            <Recipes meals={meals} categories={categories} />
          )
        }
      </View>
    </ScrollView>
  );
};

export default RecipeList;
const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header: {
    fontSize: 23.5,
    fontWeight: "700",
    marginHorizontal: 35,
    marginBottom: 25,
    color: "white",
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#D1D0D0",
    marginTop: 25,
    marginLeft: "12.5%",
    padding: 20,
    width: "75%",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  subHeader: {
    fontSize: 23.5,
    fontWeight: "700",
    marginHorizontal: 35,
    marginBottom: 25,
    marginTop: 25,
    color: "white",
  },
  horizontalLine: {
    height: 2,
    backgroundColor: "black",
    marginHorizontal: 75,
    marginTop: 0,
    marginBottom: 10,
  },
});
