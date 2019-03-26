// @flow
import * as React from "react";

import { StyleSheet, View } from "react-native";
import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";

import LoginContainer from "./LoginContainer";

type LoginProps = NavigationProps<>;

type LoginState = {
    email: string,
    password: string
};

export default class Login extends React.PureComponent<LoginProps, LoginState> {

    // $FlowFixMe
    passwordField = React.createRef();

    state = {
        email: "",
        password: ""
    };

    setEmail = (email: string) => this.setState({ email });

    setPassword = (password: string) => this.setState({ password });

    goToPassword = () => this.passwordField.current.focus();

    login = () => {
        const {navigation} = this.props;
        const {email, password} = this.state;
        // eslint-disable-next-line no-console
        console.log({email, password});
        navigation.navigate("Welcome");
    };

    signUp = () => {
        const {navigation} = this.props;
        navigation.navigate("SignUp");
    }

    render(): React.Node {
        return (
            <LoginContainer
                title="Question"
                subtitle="Login"
            >
                <TextField
                    placeholder="E-mail"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setEmail}
                    onSubmitEditing={this.goToPassword}
                    style={styles.text}
                />
                <TextField
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    ref={this.passwordField}
                    onSubmitEditing={this.login}
                    onChangeText={this.setPassword}
                    secureTextEntry
                    style={styles.text}
                />
                <Button style={styles.btnLogin} label="Login" onPress={this.login} primary />
                <Button style={styles.btnFacebook} label="Facebook" onPress={this.login} primary />
                <View style={styles.bottomOption}>
                    <Button label="Forgot password" onPress={this.signUp} full primary transparent />
                    <Button label="Sign up" onPress={this.signUp} full primary transparent />
                </View>
                
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