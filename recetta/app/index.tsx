import { Image, Text, View, StyleSheet, Platform, useColorScheme } from 'react-native';
import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const index = ({navigation}: {navigation: NavigationProp<any>}) => {
  return(
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={require('@/assets/images/welcome.jpeg')}
        style={styles.welcomeImage}/>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: 20}}>
        recetta
      </Text>
      <Text style={{fontSize: 20, marginBottom: 20}}>
        The recipe encyclopedia.
      </Text>
      <TouchableOpacity onPress={() => router.push("/RecipeListScreen")}
        style={styles.welcomeButton}>
        <Text style={{fontSize: 20}}>
          Get Started &nbsp;
          <FontAwesome name="arrow-right" size={20} color="black"/>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  welcomeImage: {
    width: 500, 
    height: 500, 
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeButton: {
    backgroundColor: 'lightgray', 
    borderRadius: 12.5,
    paddingVertical: 20, 
    margin: 20, 
    alignItems: 'center', 
    width: 215,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4
  }
});