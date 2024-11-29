import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import React from 'react';
import MasonryList from '@react-native-seoul/masonry-list';

export default function Recipes({meals, categories}) {
  return (
    <View>
      {
        categories.length == 0 && meals.length == 0 ? null : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={true}
            renderItem={({item, i}) => <RecipeCard item={item} index={i} />}
            onEndReachedThreshold={0.1}
          />
        )
      }
    </View>
  )
}

const RecipeCard = ({item, index}) => {
  return (
    <View>
      <Pressable style={{width: '100%', flex: 1, justifyContent: 'center'}}>
        <Image
          source={{uri: item.strMealThumb}}
          style={{width: '100%', height: 200, borderRadius: 15}}
        />
        <Text style={{fontSize: 17.5, fontWeight: '500', marginHorizontal: 15, marginTop: 10}}>
          {
            item.strMeal.length >= 20 ? item.strMeal.substring(0, 20) + '...' : item.strMeal
          }
        </Text>
      </Pressable>
    </View>
  )
}