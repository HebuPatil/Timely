import * as React from 'react';
import {View, Text, Image} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';  

import schedule from '../screens/schedule';
import focus from '../screens/focus';
import tasks from '../screens/tasks';
import statistics from '../screens/statistics';

const Tab = createMaterialBottomTabNavigator();


const Tabs = () => {
    return (
            <Tab.Navigator barStyle={{backgroundColor: '#1E1F22',}}>
                <Tab.Screen name="Schedule" component={schedule} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                    source={require('../assets/icons/schedule_icon.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: focused ? 'white' : '#3B3D45',
                                    }}
                                />
                                
                            </View>
                        ),
                    }}/>
                <Tab.Screen name="Focus" component={focus}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{ justifyContent: 'center'}}>
                                <Image
                                    source={require('../assets/icons/focus_icon.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: focused ? 'white' : '#3B3D45',
                                    }}
                                />
                                
                            </View>
                        ),
                    }}/>
                <Tab.Screen name="Tasks" component={tasks}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                    source={require('../assets/icons/tasks_icon.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: focused ? 'white' : '#3B3D45',
                                    }}
                                />
                                
                            </View>
                        ),
                    }}/>
                <Tab.Screen name="Statistics" component={statistics}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                    source={require('../assets/icons/statistics_icon.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: focused ? 'white' : '#3B3D45',
                                    }}
                                />
                                
                            </View>
                        ),
                    }}/>
            </Tab.Navigator>
    )
}



export default Tabs;