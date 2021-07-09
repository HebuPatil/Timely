import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import schedule from '../screens/schedule';
import focus from '../screens/focus';
import tasks from '../screens/tasks';
import statistics from '../screens/statistics';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Schedule" component={schedule}/>
            <Tab.Screen name="Focus" component={focus}/>
            <Tab.Screen name="Tasks" component={tasks}/>
            <Tab.Screen name="Statistics" component={statistics}/>
        </Tab.Navigator>
    )
}

export default Tabs;