// @flow
import * as React from "react";

import {StyleSheet, Text} from "react-native";
import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";

import LoginContainer from "./LoginContainer";

type ProfileProps = NavigationProps<>;

type ProfileState = {
    password: string
};

export default class Profile extends React.PureComponent<ProfileProps, ProfileState> {

    state = {
        password: ""
    };

    setPassword = (password: string) => this.setState({ password });

    signUp = () => {
        const {navigation} = this.props;
        const {password} = this.state;
        // eslint-disable-next-line no-console
        console.log({password});
        navigation.navigate("Music");
    };

    next = () => {
        const {navigation} = this.props;
        navigation.navigate("Reason");
    }

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    render(): React.Node {
        return (
            <LoginContainer
                title="Olá, XXXX"  
            >
            <Text style={styles.msg}>
                Suas escolhas foram analisadas e, com base nisso, criamos um perfil para você. Lembre-se:
            </Text>

            <Text style={styles.msg}>
                Seu objetivo escolhido foi, ingles para trabalho, eu nível é básico e suas preferências são cultura, esportes e carreira. Se quiser modificar algo no seu perfil, clique no botão abaixo.
            </Text>
                
                
                <Button label="Modificar" onPress={this.back} full primary transparent />      
                <Button style={styles.btnLogin} label="Avançar" onPress={this.signUp} full primary />
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
    msg: {
        color: 'white',
        fontSize: 13,
        marginBottom:10
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

