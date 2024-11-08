import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const CustomNavBar: React.FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        if(['index', '_sitemap', '+not-found'].includes(route.name)) return null;
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
            type: 'tabPress',
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
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabItem, {backgroundColor: isFocused ? '#F2F2F2' : 'transparent'}]}
          >
            {getIconByRouteName(route.name, '#2B2B2B')}
            {isFocused && <Text style={styles.tabText}>{label as string}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );

  // Set individual icons for each tab
  function getIconByRouteName(routeName: string, color: string) {
    switch(routeName) {
      case 'RecipeListScreen':
        return <FontAwesome name='star' size={35} color={color}/>;
      case 'SearchListScreen':
        return <FontAwesome name='search-plus' size={35} color={color}/>;
      case 'SavedListScreen':
        return <FontAwesome name='bookmark' size={35} color={color}/>;
      case 'SettingsScreen':
        return <FontAwesome name='gear' size={35} color={color}/>;
    }
  }
}

export default CustomNavBar;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#D1D0D0',
    width: '85%',
    alignSelf: 'center',
    bottom: 40,
    borderRadius: 35,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
  },
  tabItem: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 25
  },
  tabText: {
    color: '#2B2B2B',
    fontWeight: 500,
    marginLeft: 10,
    fontSize: 25,
  }
})