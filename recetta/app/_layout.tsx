import {Tabs} from 'expo-router';
import React from 'react';
import CustomNavBar from '@/components/CustomNavBar';

export default function Layout() {
  return (
    <Tabs tabBar={(props) => <CustomNavBar {...props}/>}>
      <Tabs.Screen name="index" options={{href: null}}/>
      <Tabs.Screen name="RecipeListScreen" options={{title: 'Featured'}}/>
      <Tabs.Screen name="SavedListScreen" options={{title: 'Saved'}}/>
      <Tabs.Screen name="SearchListScreen" options={{title: 'Search'}}/>
      <Tabs.Screen name="SettingsScreen" options={{title: 'Settings'}}/>
    </Tabs>
  );
}