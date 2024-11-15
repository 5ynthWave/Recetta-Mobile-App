import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { categories, colors } from '@/app/Constant';

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View style={{
              backgroundColor: index === 0 ?colors.COLOR_LIGHT: colors.COLOR_PRIMARY,
              height: 75,
              width: 125, 
              marginHorizontal: 20,
              marginTop: 5,
              marginBottom: 30,
              borderRadius: 5,
              paddingHorizontal: 20,
              paddingVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
          
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.2,
              shadowRadius: 10
            }}>
              <Text style={{
                fontSize: 17.5,
                fontWeight: '500',
                color: index === 0 ? colors.COLOR_DARK_ALT : undefined
              }}>
                  {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
export default CategoriesFilter;