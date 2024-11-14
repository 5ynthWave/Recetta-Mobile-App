import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { categories, colors } from '@/app/Constant';

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal>
        {categories.map((category, index) => {
          return (
            <View style={{
              backgroundColor: index === 0 ?colors.COLOR_LIGHT: colors.COLOR_DARK, 
              marginHorizontal: 20,
              borderRadius: 5,
              paddingHorizontal: 20,
              paddingVertical: 20,
          
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.1,
              shadowRadius: 7.5
            }}>
              <Text style={{
                fontSize: 15,
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