import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native'

const schedule = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Schedule</Text>
        </View>
    )
}

export default schedule;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#0C0C0E',
    },
    text: {
        color: 'white'
    }
})