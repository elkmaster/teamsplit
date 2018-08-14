import React from 'react';
import {Component} from 'react';
import {Button, Picker, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import styleConsts from "./../styleConsts";

export default class MyButton extends Component {
    render() {
        const {label, action} = this.props;

        return (
                <TouchableHighlight
                    underlayColor="#ffa012"
                    style={[styles.button, this.props.style]}
                    onPress={action}
                >
                    <Text style={styles.buttonText}>{label}</Text>
                </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: styleConsts.formBg,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
});