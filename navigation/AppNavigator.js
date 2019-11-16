import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Todolist from '../screens/Todolist';
import WeclomeScreen from '../screens/welcome_screen';


const AppNavigator = createStackNavigator(
  {
    _Todolist: Todolist,
    _Welcome: WeclomeScreen,
  },
  {
    initialRouteName: "_Welcome",
  }
);


export default createAppContainer(AppNavigator);