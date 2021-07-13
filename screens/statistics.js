import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native'

const statistics = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Statistics</Text>
        </View>
    )
}

export default statistics;

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