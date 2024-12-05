import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Feather } from "@expo/vector-icons";

const CustomNavBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  console.log(state.routeNames);
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        if (
          ["index", "RecipeDetailScreen", "_sitemap", "+not-found"].includes(
            route.name
          )
        )
          return null;
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          // Create a tab item for each route,
          // and add an icon for each tab, and
          // if the tab is focused (pressed), show its label
          // {isFocused && <Text style={styles.tabText}>{label as string}</Text>}
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[
              styles.tabItem,
              { backgroundColor: isFocused ? "#F2F2F2" : "transparent" },
            ]}
          >
            {getIconByRouteName(route.name, "#2B2B2B")}
          </TouchableOpacity>
        );
      })}
    </View>
  );

  // Set individual icons for each tab
  function getIconByRouteName(routeName: string, color: string) {
    switch (routeName) {
      case "home":
        return <Feather name="star" size={25} color={color} />;
      case "SavedListScreen":
        return <Feather name="bookmark" size={25} color={color} />;
      case "SettingsScreen":
        return <Feather name="settings" size={25} color={color} />;
    }
  }
};

export default CustomNavBar;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#D1D0D0",
    width: "80%",
    alignSelf: "center",
    bottom: 40,
    borderRadius: 22.5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",

    shadowColor: "lightgray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 7.5,
    elevation: 2,
  },
  tabItem: {
    flexDirection: "row",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "12.75%",
    paddingVertical: 25,
    borderRadius: 20,
  },
  tabText: {
    color: "#2B2B2B",
    fontWeight: 500,
    marginLeft: 5,
    fontSize: 20,
  },
});
