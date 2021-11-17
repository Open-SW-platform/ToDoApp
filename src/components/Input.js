import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {theme} from '../theme';

const Input = () => {
    return (
        <TextInput style = {inputStyle.textInput}> + Add a task </TextInput>
    );
};

const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 25,
        width: 300,
        height: 30,
        marginTop: 10,
        marginLeft: 3,
        paddingLeft: 15,
        paddingTop: 2,
        borderRadius: 10,
        backgroundColor: theme.itemBackground,
        color: theme.text,
    },
});

export default Input;