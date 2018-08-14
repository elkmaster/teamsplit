import React from 'react';
import {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import Footer from "./../components/SplitFooter";
import styleConsts from "../styleConsts";

class SplitScreen extends Component {
    static navigationOptions = {
        title: 'TEAM/SPLIT',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: styleConsts.sectionBg,
            elevation: 0
        },
    };

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    render() {
        const {navigate} = this.props.navigation;
        let people = this.shuffle([...this.props.people]);
        return (
            <View style={styles.container}>

                <ScrollView>
                    {
                        people.map((person, index) => (
                            <View key={index} style={styles.person}>
                                <Text style={styles.item}>
                                    {person.name}
                                </Text>
                            </View>
                        ))
                    }
                </ScrollView>

                <Footer navigate={navigate}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
        backgroundColor: styleConsts.appBg,
    },
    person: {
        marginTop: 12,
    },
    item: {
        color: 'white',
        fontSize: styleConsts.appFontSize
    }
})

function mapStateToProps (state) {
    return {
        people: state.people.people
    }
}

export default connect(
    mapStateToProps,
    //mapDispatchToProps,
)(SplitScreen)
