import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


function ExerciseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Exercise!</Text>
    </View>
  );
}

function SleepScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sleep!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SchoolScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>School!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}




const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Exercise') {
              //iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              //set icon here
            } else if (route.name === 'Sleep') {
              //iconName = focused ? 'ios-list-box' : 'ios-list';
              //set icon here
            } else if (route.name === 'Home') {
              //iconName = focused ? 'ios-list-box' : 'ios-list';
              //set icon here
            } else if (route.name === 'School') {
              //iconName = focused ? 'ios-list-box' : 'ios-list';
              //set icon here
            } else if (route.name === 'Settings') {
              //iconName = focused ? 'ios-list-box' : 'ios-list';
              //set icon here
            }
            

            // You can return any component that you like here!
            //return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Exercise" component={ExerciseScreen} />
        <Tab.Screen name="Sleep" component={SleepScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="School" component={SchoolScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
