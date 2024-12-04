import {Tabs} from 'expo-router';
import React from 'react';
import CustomNavBar from '@/components/CustomNavBar';

export default function Layout() {
  return (
    <Tabs tabBar={(props) => <CustomNavBar {...props}/>}>
      <Tabs.Screen name="index" options={{headerShown: false}}/>
      <Tabs.Screen name="RecipeListScreen" options={{headerShown: false}}/>
      <Tabs.Screen name="SavedListScreen" options={{headerShown: false}}/>
      <Tabs.Screen name="SettingsScreen" options={{headerShown: false}}/>
    </Tabs>
  );
}