// @flow
import * as React from "react";

import {StyleSheet, View} from "react-native";
import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";


import SnackBar from "../components/Snackbar";

import LoginContainer from "./LoginContainer";

type SignUpPasswordProps = NavigationProps<>;

type SignUpPasswordState = {
    password: string,
    confirm: string
};

export default class SignUpPassword extends React.PureComponent<SignUpPasswordProps, SignUpPasswordState> {

    state = {
        password: "",
        confirm: "",
    };

    setPassword = (password: string) => this.setState({ password });
    setConfirm = (confirm: string) => this.setState({ confirm });
    // $FlowFixMe
    passwordField = React.createRef();

    signUp = () => {
        const {navigation} = this.props;
        const {password, confirm} = this.state;
        // eslint-disable-next-line no-console
        console.log({password});

        const _firstName = navigation.getParam('firstName','nome vazio');
        const _lastName = navigation.getParam('lastName','sobrenome vazio');
        const _email = navigation.getParam('email','email vazio');

        const _phone = navigation.getParam('phone','email vazio');
        const _country = navigation.getParam('country','email vazio');


        console.log(_firstName);
        console.log(_lastName);
        console.log(_email);
        console.log(_phone);
        console.log(_country);
        console.log(password);
        console.log(confirm);

        if(confirm == "" || password == ""){
            this.displaySnackBar("Both fields cannot be empty")
        }else if(confirm != password){
            this.displaySnackBar("Passwords do not match!");
        }else{
            /*
            var data = new FormData();
            data.append("nome", _firstName);
            data.append("sobrenome", _lastName);
            data.append("email", _email);
            data.append("password", password);
            data.append("pais", _country);
            data.append("idade", 20);
            
            fetch('http://apiapp.soulphia.com/api/users/method', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                
                body:data,
            })
            .then((response) => response.json())
            .then((responseJson) => {
                
                if(responseJson.message == "Created the resource"){
                    navigation.navigate("Question", {
                        name: _firstName
                    });
                }else{
                    this.displaySnackBar(responseJson.message);
                }
                
               console.log(responseJson.message);
            //return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
            */
            
            navigation.navigate("Question", {
                name: _firstName
            });
        }




    };

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    displaySnackBar (message: string) {
        this.refs.ReactNativeSnackBar.ShowSnackBarFunction(message);
    };

    render(): React.Node {
        return (
            <LoginContainer
                title="Be safe"
                subtitle="Password"
            >
                <TextField
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    onChangeText={this.setPassword}
                    onSubmitEditing={this.signUp}
                    secureTextEntry
                    ref={this.passwordField}
                    style={styles.text}
                />
                <TextField
                    placeholder="Confirm Password"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    onChangeText={this.setConfirm}
                    onSubmitEditing={this.signUp}
                    secureTextEntry
                    ref={this.passwordField}
                    style={styles.text}
                />
                <Button style={styles.btnLogin} label="Sign up" onPress={this.signUp} full primary />
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

