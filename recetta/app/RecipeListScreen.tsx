import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-screens';

const RecipeList = () => {
  return (
    <SafeAreaView>
      <Text style={styles.screenHeader}>
        Hi, Viewer
      </Text>
      <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '500'}}>
        Explore below to see featured recipes.
      </Text>
      <SearchBar placeholder="Search for recipes"/>
    </SafeAreaView>
  );
}

export default RecipeList;
const styles = StyleSheet.create({
  screenHeader: {
    fontSize: 25,
    fontWeight: '700',
    margin: 10,
  }
});