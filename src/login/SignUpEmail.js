// @flow
import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Button, TextField, Switch, Text, StyleGuide} from "../components";
import type {NavigationProps} from "../components/Navigation";


import SnackBar from "../components/Snackbar";

import PhoneInput from 'react-native-phone-input'

import { InputAutoSuggest } from 'react-native-autocomplete-search';

import LoginContainer from "./LoginContainer";

type SignUpEmailProps = NavigationProps<>;

type SignUpEmailState = {
    phone: string,
    country: string,
    email: string
};

export default class SignUpEmail extends React.PureComponent<SignUpEmailProps, SignUpEmailState> {

    state = {
        
    };

    constructor() {
        super();
    
        this.state = {
          valid: "",
          type: "",
          value: "",
          phone: "",
          country: "",
          email:""

        };
    
      }
      
      displaySnackBar (message: string) {
        this.refs.ReactNativeSnackBar.ShowSnackBarFunction(message);
      };

    setEmail = (email: string) => this.setState({ email });

    signUp = () => {
        const {navigation} = this.props;
        const {email, newsletter} = this.state;
        // eslint-disable-next-line no-console
        console.log({email, newsletter});
        navigation.navigate("SingUpPassword");
    };

    next = () => {
        let c = this.phone.getCountryCode();
        let cc = "";
        switch (c) {
            case "55":
            console.log("entrou no setstate do country");
                
                    cc = "Brazil";
                
                break;
            case "1":
            console.log("entrou no setstate do country");
                
                    cc = "United States/Canada";
                
                break;
            case "44":
            console.log("entrou no setstate do country");
                
                    cc = "United Kingdom";
                
                break;
            case "52":
            console.log("entrou no setstate do country");
                
                    cc ="Mexico";
                
                break;
            case "34":
            console.log("entrou no setstate do country");
                
                    cc = "Spain";
                
                break;
            case "81":
            console.log("entrou no setstate do country");
            
                    cc = "Japan";
            
                break;
        
            default:
            console.log("entrou no default");
                    cc = ""
                break;
        }

        const {navigation} = this.props;
        const {email} = this.state;
        const _firstName = navigation.getParam('firstName','nome vazio');
        const _lastName = navigation.getParam('lastName','sobrenome vazio');
        let phone = this.phone.getValue();

        if(email == "" || phone == ""){
            this.displaySnackBar("None of the fields can be empty")
        }else if(cc == ""){
            this.displaySnackBar("Select a valid country")
        }else{
            navigation.navigate("SignUpPassword", {
                firstName: _firstName,
                lastName: _lastName,
                email: email,
                phone: phone,
                country:cc
            });
        }
        
        
    }

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    onToggle = (newsletter: string) => this.setState({ newsletter });

    render(): React.Node {
        const {onToggle} = this;
        return (
            <LoginContainer
                title="Let's get connected"
                subtitle="Some information"
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
                    style={styles.textField}
                />

                <PhoneInput style={{
                    ...StyleGuide.styles.borderRadius,
                    height: 45,
                    borderWidth: 1,
                    color: "#fff",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    padding: StyleGuide.spacing.tiny,
                    marginBottom: StyleGuide.spacing.small,
                    ...StyleGuide.typography.body,
                    ...StyleGuide.styles.shadow,
                    backgroundColor: "rgba(255,255,255, 0.0)",
                    height: 45,
                    marginBottom: 10,
                    borderRadius: 25,
                    borderWidth: 1.5,
                    borderColor: '#d6d7da',
                    paddingLeft: 20

                }} ref={ref => {
                    this.phone = ref;
                  }}/>
                
                <Button style={styles.btnLogin} label="Next" onPress={this.next} full primary />
                <Button label="Back" onPress={this.back} full primary transparent />
                
                <SnackBar ref="ReactNativeSnackBar" />
            </LoginContainer>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: StyleGuide.palette.white
    },
    textField: {
        backgroundColor: "rgba(255,255,255, 0.0)",
        height: 45,
        marginBottom: 10,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#d6d7da',
        paddingLeft: 20
    },

    textCountry:{
        flex:1,
        ...StyleGuide.styles.borderRadius,
        height: 45,
        borderWidth: 1,
        color: "#fff",
        borderColor: "rgba(255, 255, 255, 0.5)",
        padding: StyleGuide.spacing.tiny,
        marginBottom: StyleGuide.spacing.small,
        ...StyleGuide.typography.body,
        ...StyleGuide.styles.shadow,
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
    newsletter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: StyleGuide.spacing.small
    }
});
