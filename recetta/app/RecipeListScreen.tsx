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
      <View style={{backgroundColor: '#2B2B2B', borderRadius:15, shadowColor: 'black',
        shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.4, shadowRadius: 10
      }}>
        <Image source={require('@/assets/images/recipelistheader.jpeg')}
          style={styles.headerImage}/>
        <Text style={{marginHorizontal: 35, marginTop: 25, marginBottom: 15, fontSize: 20,
          fontWeight: '400', color: 'white'}}>
          <Feather name='user' size={25} color='#F3C86A'/>&nbsp; Hello, User
        </Text>
        <Text style={styles.header}>
          Explore featured recipes below.
          &nbsp;
        </Text>
      </View>
      <Text style={{fontSize: 23.5, fontWeight: '700', marginHorizontal: 35,
        marginVertical: 25}}>
        <Feather name='menu' size={25} color='black'/>&nbsp; Categories
      </Text>
      <CategoriesFilter/>
      <Text style={styles.subHeader}>
      <Feather name='menu' size={25} color='black'/>&nbsp; Recipes
      </Text>
    </SafeAreaView>
  );
}

export default RecipeList;
const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header: {
    fontSize: 23.5,
    fontWeight: '700',
    marginHorizontal: 35,
    marginBottom: 25,
    color: 'white'
  },
  subHeader: {
    fontSize: 23.5,
    fontWeight: '700',
    marginHorizontal: 35,
    marginBottom: 25,
    marginTop: 10
  },
  horizontalLine: {
    height: 2,
    backgroundColor: 'black',
    marginHorizontal: 75,
    marginTop: 0,
    marginBottom: 10
  }
});