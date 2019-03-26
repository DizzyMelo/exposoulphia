// @flow
import * as React from "react";

import {StyleSheet, View, TouchableWithoutFeedback} from "react-native";
import {Button, TextField, StyleGuide} from "../components";
import type {NavigationProps} from "../components/Navigation";
import Component1 from './Component1';
import WelcomeContainer from "./WelcomeContainer";


type WelcomeProps = NavigationProps<>;

type WelcomeState = {
    password: string
};

export default class Welcome extends React.PureComponent<WelcomeProps, WelcomeState> {

    state = {
        password: ""
    };

    setPassword = (password: string) => this.setState({ password });

    signUp = () => {
        const {navigation} = this.props;
        const {password} = this.state;
        // eslint-disable-next-line no-console
        console.log({password});
        navigation.navigate("Welcome");
    };

    next = () => {
        const {navigation} = this.props;
        navigation.navigate("Reason");
    }

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    constructor(props) {

        super(props);

        this.state = {
            Component1Visible: true,
        }

    }

    toggleComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';
        let val  = this.state[prop];
        if (typeof val === 'undefined') {
            return false;
        }

        this.setState({
            [prop]: val === true ? false : true
        })

        return true;

    }

    hideComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: false
        })

        return true;

    }

    showComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: true
        })

        return true;

    }

    render(): React.Node {
        const {navigation} = this.props;

        const _firstName = navigation.getParam('name','nome vazio');

        return (
            
            <WelcomeContainer
                title= {"Welcome to"}
                subtitle= {"Soulphia"}
                
            >  
                <Component1 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component1Visible }
                        />
                
                <Button style={styles.btnLogin} label="Done" onPress={this.next} full secondary />
                
            </WelcomeContainer>
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
        backgroundColor: StyleGuide.palette.white,
        //backgroundColor: "#ff4d4d",
        borderRadius: 25,
        color: "#000"
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

