import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

const focus = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Focus</Text>
        </View>
    )
}

export default focus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'blue'
    }
})