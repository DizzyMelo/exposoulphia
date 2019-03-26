// @flow
import * as React from "react";

import { StyleSheet, View } from "react-native";
import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";
import FormData from 'FormData';

import LoginContainer from "./LoginContainer";
import SnackBar from "../components/Snackbar";
type LoginProps = NavigationProps<>;

type LoginState = {
    email: string,
    password: string
};

export default class Login extends React.PureComponent<LoginProps, LoginState> {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            email: "",
            password: ""
        }
    }

    // $FlowFixMe
    passwordField = React.createRef();

    state = {
        
    };

    setEmail = (email: string) => this.setState({ email });

    setPassword = (password: string) => this.setState({ password });

    goToPassword = () => this.passwordField.current.focus();

    login = () => {
        const {navigation} = this.props;
        const {email, password} = this.state;
        // eslint-disable-next-line no-console
       // this.validate();
        console.log({email, password});
        
        navigation.navigate("Music");
    };

    displaySnackBar (message: string) {
        this.refs.ReactNativeSnackBar.ShowSnackBarFunction(message);
      };

    

    async validate() {
        const {navigation} = this.props;
        const {email, password} = this.state;

        if(email == "" || password == "" ){
            this.displaySnackBar("Both fields are required!");
        }else{
            var data = new FormData();
            data.append("email", email);
            data.append("password", password);
            
            fetch('http://apiapp.soulphia.com/api/users/autentica', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                
                body:data,
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.message == "User founded"){
                    navigation.navigate("Music");
                }else{
                    this.displaySnackBar(responseJson.message);
                }
            
            
            //return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
        }

        
    }

    async validar() {
        //const {email, password} = this.state;
        //console.log({email, password});
       let response = await this.validate();
            //this.displaySnackBar(response.message);
            console.log('response do json do validar:', response);
    }

    signUp = () => {
        const {navigation} = this.props;
        navigation.navigate("SignUp");
    }

    

    

    render(): React.Node {
        return (
            <LoginContainer
                title=""
                subtitle="Logo"
            >
                <TextField
                    //color={"#fff"}
                    placeholder="E-mail"
                    placeholderTextColor={"#fff"}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setEmail}
                    onSubmitEditing={this.goToPassword}
                    style={styles.text}
                />
                <TextField
                    //color={"#fff"}
                    placeholder="Password"
                    placeholderTextColor={"#fff"}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    ref={this.passwordField}
                    onSubmitEditing={this.login}
                    onChangeText={this.setPassword}
                    secureTextEntry
                    style={styles.text}
                />
                <Button style={styles.btnLogin} label="Login" onPress={() => this.validate()} primary />

                <SnackBar ref="ReactNativeSnackBar" />

                <Button style={styles.btnFacebook} label="Facebook" onPress={this.validar} primary />
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
        backgroundColor: "#ff0059",
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