import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';

export default function AddActivity({ submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.formstyle}>
            <TextInput
                style={{
                    color: 'white',
                    borderWidth: 1,
                    borderColor: 'white',
                    borderRadius: 4,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 4,
                    paddingRight: 4,
                    marginBottom: 10
                }}
                placeholder='Add activity'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add activity' color='black'/>
        </View>
    )
}

const styles = StyleSheet.create({
    formstyle: {
        color: 'white',
        borderBottomColor: '#ddd'
    }
})