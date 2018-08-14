import React from 'react';
import {Component} from 'react';
import {Button, Picker, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import styleConsts from "./../styleConsts";
import MyButton from "./MyButton";

export default class Footer extends Component {
    render() {
        const {navigate} = this.props;

        return (
            <View style={styles.footer}>
                <MyButton style={styles.back} action={() => navigate('HomeScreen')} label={'BACK'}/>
                <MyButton style={styles.share} action={() => navigate('HomeScreen')} label={'SHARE'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        backgroundColor: styleConsts.sectionBg
    },
    back: {
        flex: 50
    },
    share: {
        flex: 50,
        marginLeft: 20
    }
});