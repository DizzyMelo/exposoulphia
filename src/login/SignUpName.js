// @flow
import * as React from "react";

import { StyleSheet } from "react-native";
import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";

import SnackBar from "../components/Snackbar";

import LoginContainer from "./LoginContainer";

type SignUpNameProps = NavigationProps<>;

type SignUpNameState = {
    firstName: string,
    lastName: string
};

export default class SignUpName extends React.PureComponent<SignUpNameProps, SignUpNameState> {

    // $FlowFixMe
    lastName = React.createRef();

    state = {
        firstName: "",
        lastName: ""
    };

    setFirstName = (firstName: string) => this.setState({ firstName });

    setLastName = (lastName: string) => this.setState({ lastName });


    goToLastName = () => this.lastName.current.focus();

    signUp = () => {
        const {navigation} = this.props;
        const {firstName, lastName} = this.state;
        // eslint-disable-next-line no-console
        console.log({firstName, lastName});
        navigation.navigate("Welcome");
    };

    displaySnackBar (message: string) {
        this.refs.ReactNativeSnackBar.ShowSnackBarFunction(message);
    };

    next = () => {
        const {navigation} = this.props;
        const {firstName, lastName} = this.state;

        if(firstName == "" || lastName == ""){
            this.displaySnackBar("None of the fields can be empty");
        }else{
            if(this.state.firstName == ""){
                console.log("vazio");
            }
            navigation.navigate("SignUpEmail", {
                firstName: firstName,
                lastName: lastName
            });
        }
    }

    back = () => {
        const {navigation} = this.props;
        navigation.navigate("Login");
    }

    render(): React.Node {
        return (
            <LoginContainer
                title="Hello, We would like to get to know you"
                subtitle="Your name"
            >
                <TextField
                    placeholder="Name"
                    placeholderTextColor="#fff"
                    autoCapitalize="words"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setFirstName}
                    onSubmitEditing={this.goToLastName}
                    style={styles.text}
                />
                <TextField
                    placeholder="Last name"
                    placeholderTextColor="#fff"
                    autoCapitalize="words"
                    autoCorrect={false}
                    returnKeyType="next"
                    ref={this.lastName}
                    onSubmitEditing={this.next}
                    onChangeText={this.setLastName}
                    style={styles.text}
                />
                
                <Button style={styles.btnLogin} label="Next" onPress={this.next} full primary />
                <Button label="Back" onPress={this.back} full primary transparent />

                <SnackBar ref="ReactNativeSnackBar" />
            </LoginContainer>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: "rgba(255,255,255, 0.0)",
        height: 45,
        marginBottom: 10,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#d6d7da',
        paddingLeft: 20
    },
    btnLogin: {
        backgroundColor: "#ff4d4d",
        borderRadius: 25,
    },
    btnFacebook: {
        fontSize: 9,
        backgroundColor: "#0066cc",
        borderRadius: 25,
    },
    bottomOption: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
});
