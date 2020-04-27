import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppBottomNavigators from './AppBottomNavigators';
import Reports from '../screens/Reports';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={AppBottomNavigators} />
      <Stack.Screen name="Search" component={Reports} />
    </Stack.Navigator>
  );
};
