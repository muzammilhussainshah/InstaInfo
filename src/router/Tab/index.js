import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SearchScreen from '../../pages/SearchScreen/SearchScreen';

import MyTabs from './SCBottomTabNavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='SearchScreen'
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} /> 
    </Stack.Navigator>
  );
}
