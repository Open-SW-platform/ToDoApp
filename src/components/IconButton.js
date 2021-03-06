//아이콘 버튼 관련 componenet(교수님 파일 그대로 복붙)
import React from 'react';
import { Pressable, StyleSheet, View, Image } from 'react-native';
import {theme} from '../theme';
import PropTypes from 'prop-types';
import { images } from '../images';

const IconButton = ({type, onPressOut}) =>{
    return (
        <Pressable onPressOut = {onPressOut}>
            <Image source = {type} style = {iconStyle.icon}/>
        </Pressable>
    );
};

const iconStyle = StyleSheet.create({
    icon: {
        tintColor: 'black',
        width: 27,
        height: 27,
        margin: 5,
        backgroundColor: 'red',
    },
});

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
};

export default IconButton;