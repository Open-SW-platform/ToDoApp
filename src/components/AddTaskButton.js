import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text,Modal } from 'react-native';

const AddTaskButton = (props)=> {
    
 
        return (
            <TouchableOpacity 
            style={styles.button}
            onPress={props.onPress}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        );
    
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2196f3',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        marginBottom: 30,
        borderRadius: 35,
        
        

        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOpacity: 1,
                shadowOffset: {height: 2, width: 2},
                shadowRadius: 2,
            },

            android: {
                elevation: 0,
                marginHorizontal: 30,
            },
        })
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    }
});

export default AddTaskButton;