import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import index from '../../app/index';
import RecipeListScreen from '../../app/RecipeListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="index" component={index}/>
        <Stack.Screen name="RecipeList" component={RecipeListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;