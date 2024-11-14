import {StyleSheet, View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-screens';
import CategoriesFilter from '@/components/CategoriesFilter';

const RecipeList = () => {
  {/*Fetching APIS*/}
  {/*Fetching APIS*/}

  return (
    <SafeAreaView>
      <Text style={{marginHorizontal: 35, marginTop: 25, marginBottom: 15, fontSize: 20, fontWeight: '500'}}>
        Hello, User
      </Text>
      <Text style={styles.screenHeader}>
        Explore below to see featured recipes.
      </Text>
      <View style={styles.horizontalLine}/>
      <SearchBar placeholder="Search for recipes"/>
      <Text style={{fontSize: 23.5, fontWeight: '700', marginHorizontal: 35,
        marginVertical: 20}}>
        Categories
      </Text>
      <CategoriesFilter/>
    </SafeAreaView>
  );
}

export default RecipeList;
const styles = StyleSheet.create({
  screenHeader: {
    fontSize: 23.5,
    fontWeight: '700',
    marginHorizontal: 35,
    marginBottom: 25
  },
  horizontalLine: {
    height: 2,
    backgroundColor: 'black',
    marginHorizontal: 100,
  }
});