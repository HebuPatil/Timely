import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

const statistics = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Statistics</Text>
        </View>
    )
}

export default statistics;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'blue'
    }
})