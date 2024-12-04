import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

// List the categories given by the 'TheMealDB' API
export default function Categories({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: any;
  activeCategory: any;
  setActiveCategory: any;
}) {
  // console.log("-+- Categories: ", categories);
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((cat: any, index: any) => {
          let isActive = cat.strCategory == activeCategory;

          // Output the cards/containers for the individual categories as touchable opacities
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(cat.name)}
              style={styles.categoryContainer}
            >
              <View>
                {/* Display the category image and title */}
                <Image
                  source={{ uri: cat.strCategoryThumb }}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryTitle}>{cat.strCategory}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: "#D1D0D0",
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 15,
  },
  categoryTitle: {
    fontSize: 17.5,
    fontWeight: "500",
    color: "#2B2B2B",
    textAlign: "center",
  },
});
