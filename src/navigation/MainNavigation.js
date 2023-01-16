import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screen/MainScreen';
import AddScreen from '../screen/AddScreen';

const Stack = createNativeStackNavigator();

export default class MainNavigation extends Component {
  render() {
    return (
        <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
      </Stack.Navigator>
    )
  }
}