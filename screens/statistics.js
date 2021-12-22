import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native'

const statistics = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Statistics</Text>
        </View>
    )
}

// stopwatch widget
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0C0E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    timer: {
        fontSize: 60,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default statistics;