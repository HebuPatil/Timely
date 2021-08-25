import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';

export default function TimerActivity({ submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.formstyle}>
            <TextInput
                style={{
                    color: 'white',
                    borderWidth: 0,
                    borderColor: 'white',
                    borderRadius: 4,
                    paddingTop: 20,
                    paddingBottom: 8,
                    paddingLeft: 4,
                    paddingRight: 0,
                    marginBottom: 10,
                    width: 40
                }}
                maxLength={2}
                placeholder='00'
                onChangeText={changeHandler}
            />
            <Text style={{color: 'white', paddingTop: 20}}>hr :</Text>
            <TextInput
                style={{
                    color: 'white',
                    borderWidth: 0,
                    borderColor: 'white',
                    borderRadius: 4,
                    paddingTop: 20,
                    paddingBottom: 8,
                    paddingLeft: 20,
                    paddingRight: 0,
                    marginBottom: 10,
                    width: 50
                }}
                maxLength={2}
                placeholder='00'
                onChangeText={changeHandler}
            />
            <Text style={{color: 'white', paddingTop: 20}}> min</Text>
            <Button style={{width: 1,
            marginTop: -60,
            paddingLeft: 20,
            paddingTop: 20,
            textDecorationColor: '#FFFFFF'}} title='Start' color='black'/>
        </View>
    )
}

const styles = StyleSheet.create({
    formstyle: {
        color: 'white',
        borderBottomColor: '#ddd',
        flexDirection:"row"
    },
    button2: {
        width: 1,
        marginTop: -39,
        alignSelf: 'flex-end',
        textDecorationColor: '#FFFFFF'
    },
    input: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 4,
        paddingRight: 4,
        marginBottom: 10
    }   
})