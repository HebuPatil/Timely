import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

const tasks = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Tasks</Text>
        </View>
    )
}

export default tasks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'blue'
    }
})