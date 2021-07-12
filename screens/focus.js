import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

const focus = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Focus</Text>
        </View>
    )
}

export default focus;

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