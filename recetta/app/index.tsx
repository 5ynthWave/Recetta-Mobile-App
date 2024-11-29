import { Image, Text, View, StyleSheet, Platform, useColorScheme } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';

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
        <Text style={{fontSize: 20.5, justifyContent: 'center'}}>
          Get Started &nbsp;
          <Feather name="arrow-up-right" size={20.5} color="black"/>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  welcomeImage: {
    width: '100%', 
    height: 500, 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
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
    shadowOpacity: 0.25,
    shadowRadius: 7.5
  }
});