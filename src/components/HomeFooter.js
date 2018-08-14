import React from 'react';
import {Component} from 'react';
import {Picker, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import styleConsts from "./../styleConsts";
import MyButton from "./MyButton";

export default class Footer extends Component {
    state = {
        teams: 2
    }

    render() {
        const {navigate} = this.props;

        return (
            <View style={styles.footer}>

                <View style={styles.pickerWrap}>


                    <Picker
                        selectedValue={this.state.teams}
                        mode={'dropdown'}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => this.setState({teams: itemValue})}>
                        <Picker.Item label="IN TWO TEAMS" value="2"/>
                        <Picker.Item label="IN TREE TEAMS" value="3"/>
                        <Picker.Item label="IN FOUR TEAMS" value="4"/>
                    </Picker>
                </View>


                <MyButton style={styles.button} action={() => navigate('SplitScreen')} label={'SPLIT!'}/>
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
    pickerWrap:{
        borderRadius: 3,
        height: 60,
        flex: 70,
        backgroundColor: styleConsts.formBg,
        padding: 10,
    },
    picker: {
        height: 40,
        backgroundColor: styleConsts.formBg,
        color: 'white',
        justifyContent: 'center',

    },
    button: {
        flex: 30,
        marginLeft: 20,
    },
});