import React, {useState} from 'react';
import { Alert, View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { withNavigation } from '@react-navigation/stack';
//import ActivityItem from './focusComponents/activityItem';
import AddActivity from './focusComponents/addActivity';
import TimerActivity from './focusComponents/timerActivity';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


function timerScreen({navigation}) {
    const [timer, setTimer] = useState([
        {name: 'Hour', key: '1'},
        {name: 'Minute', key: '2'}
    ]);   
    const submitHandlerTimer = (text) => {
        setActivities((prevActivities) => {
            return [
                {
                    name: text,
                    key: Math.random().toString()
                },
                ...prevActivities
            ]
        });
    }
    return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Set Recording Timer</Text>
      <TimerActivity submitHandler={submitHandlerTimer}/>
    </View>
  );
}

function focusScreen({navigation}) {
    const [activities, setActivities] = useState([
        {name: 'Sleep', key: '1'},
        {name: 'Study', key: '2'}
    ]);   
    const deleteHandler = (key) => {
        setActivities((prevActivities) => {
            return prevActivities.filter(todo => todo.key != key);
        })
    }
    const submitHandler = (text) => {
        if(text.length >= 1) {
            setActivities((prevActivities) => {
                return [
                    {
                        name: text,
                        key: Math.random().toString()
                    },
                    ...prevActivities
                ]
            });
        } else {
            Alert.alert('Enter an activity name.', 'Activities must be at least 1 character long', [
                {text: 'Ok', OnPress: () => console.log('Alert closed')}
            ]);
        }
    }
  return (
    <View style={styles.container}>
      <Text style={{color:'white', marginBottom: 50, fontSize: 30, marginTop: 10}}>Start a Focus Timer</Text>
      <AddActivity submitHandler={submitHandler}/>
      <FlatList
        data={activities}
        renderItem={({item}) => (
            <ActivityItem navigation={navigation} item={item} deleteHandler={deleteHandler}/>
        )}/>
    </View>
  );
}
function ActivityItem({navigation, item, deleteHandler}) {
    return (
        
        <TouchableOpacity>
            <Card
                onPress={() => navigation.navigate('Focus Timer')}
                style={{
                    width: 200,
                    marginTop: 20,
                    borderRadius: 10,
                    backgroundColor: '#FFFFFF'
                }}
            >
                <Card.Title title={item.name} style={styles.title} />
                <Button onPress={() => deleteHandler(item.key)} style={styles.deleteButton}>X</Button>
                <Button onPress={() => deleteHandler(item.key)} style={styles.editButton}>...</Button>
            </Card>
        </TouchableOpacity>
    )
}

const Stack = createStackNavigator();

const focus = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Focus" component={focusScreen} />
            <Stack.Screen name="Focus Timer" component={timerScreen}/>
        </Stack.Navigator>
  
    )
}

export default focus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C0C0E',
    },
    title: {
        alignSelf: 'center'
    },
    deleteButton: {
        width: 100,
        alignSelf: 'flex-start'
    },
    editButton: {
        width: 100,
        marginTop: -39,
        alignSelf: 'flex-end',
        textDecorationColor: '#FFFFFF',
    }   
})