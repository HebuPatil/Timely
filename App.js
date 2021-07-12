import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { Appearance } from 'react-native';

const App = () => {

  return (
      <Tabs/>

  );
}

export default App;