import React from 'react';
import {connect} from 'react-redux';
import {addPerson, deletePerson} from '../actions/people';

import {FontAwesome} from '@expo/vector-icons';
import styleConsts from './../styleConsts'
import MyButton from './../components/MyButton';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Keyboard,
    ScrollView,
} from 'react-native';

import Footer from "./../components/HomeFooter";

class HomeScreen extends React.Component {

    state = {
        inputValue: '',
    }
    static navigationOptions = {
        title: 'TEAM/SPLIT',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: styleConsts.sectionBg,
            elevation: 0
        },
    };


    addPerson = () => {
        if (this.state.inputValue === '') return;
        this.props.dispatchAddPerson({
            name: this.state.inputValue,
        });
        this.setState({inputValue: ''});
        Keyboard.dismiss();
    }
    deletePerson = (person) => {
        this.props.dispatchdeletePerson(person)
    }
    updateInput = (inputValue) => {
        this.setState({inputValue})
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={text => this.updateInput(text)}
                    style={styles.input}
                    value={this.state.inputValue}
                    placeholder="Name"
                />

                <MyButton label={'Add Person'} action={this.addPerson} style={styles.button}/>

                <ScrollView>
                    {
                        this.props.people.map((person, index) => (
                            <View key={index} style={styles.person}>
                                <Text style={styles.item}>{person.name} <FontAwesome
                                    name="remove" size={styleConsts.appFontSize} color="grey"
                                    onPress={() => this.deletePerson(person)}/>
                                </Text>
                            </View>
                        ))
                    }
                </ScrollView>
                <Footer navigate={navigate}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
        backgroundColor: styleConsts.appBg,
    },
    input: {
        backgroundColor: '#e4e4e4',
        height: 55,
        borderRadius: 3,
        padding: 20,
    },
    button: {
        marginTop: 20
    },

    person: {
        marginTop: 12,
    },
    item: {
        color: 'white',
        fontSize: styleConsts.appFontSize
    }
});

function mapStateToProps(state) {
    return {
        people: state.people.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddPerson: (person) => dispatch(addPerson(person)),
        dispatchdeletePerson: (person) => dispatch(deletePerson(person))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen)

