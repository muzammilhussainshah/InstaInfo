import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Profile from '../../Screen/Profile/Profile'; 
import Search from '../../Screen/Search/Search'; 

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
      initialRouteName='Search'
    > 
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />

      {/* <Stack.Screen name="VideoScreen" component={VideoScreen} />
      <Stack.Screen name="TrendingNews" component={TrendingNews} />
      <Stack.Screen name="MatchNews" component={MatchNews} /> */}
    </Stack.Navigator>
  );
}
