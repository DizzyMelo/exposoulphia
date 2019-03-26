// @flow
import * as React from "react";

import {StyleSheet, ScrollView, View, TouchableWithoutFeedback, Text} from "react-native";
import {Button, TextField, StyleGuide, NavigationBar} from "../components";
import type {NavigationProps} from "../components/Navigation";
import Component1 from './Component1';


type TutorProfileProps = NavigationProps<>;

type TutorProfileState = {
    password: string
};

export default class TutorProfile extends React.PureComponent<TutorProfileProps, TutorProfileState> {

    state = {
        password: ""
    };

    setPassword = (password: string) => this.setState({ password });

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
        const name = navigation.getParam('name','Name');
        const birth = navigation.getParam('birth','Birth');
        const quote = navigation.getParam('quote','Quote');
        const hobby = navigation.getParam('hobby','Hobby');
        return (
            <View style={styles.containerOutter}>
                <NavigationBar type="transparent" title={"Perfil " + name} back={"Schedule"} {...{navigation}} />
                <View style={styles.container}>
                
                <ScrollView showsVerticalScrollIndicator={false}> 
                
                    <Component1 
                                navigation={this.props.navigation}
                                toggleComponent={ (component) => this.toggleComponent(component) }
                                hideComponent={ (component) => this.hideComponent(component) }
                                showComponent={ (component) => this.showComponent(component) }
                                visible={ this.state.Component1Visible }
                            />

                    <Text style={styles.tutorName}>{name}</Text>
                    
                    <Text style={styles.label}>Place of birth</Text>

                    <Text style={styles.content}>{birth}, New York, USA</Text>

                    <Text style={styles.label}>Favorite Quote</Text>

                    <Text style={styles.content}>{quote}</Text>

                    <Text style={styles.label}>Hobby or interest</Text>

                    <Text style={styles.content}>{hobby}</Text>

                    <Text style={styles.label}>Tell more about you</Text>

                    <Text style={styles.content}>I am a woman of many gifts with a big heart to share them. I enjoy spreading the love of Jesus with everyone I meet. Caring comes naturally to me. I enjoy the word of God, passionately and I love helping others whenever I can.</Text>
                    
                    <Button style={styles.btnLogin} label="ESCOLHER" onPress={this.next} full primary />

                    <Text style={styles.content}></Text>

                </ScrollView>
            </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    containerOutter:{
        flex:1,
        backgroundColor: StyleGuide.palette.backgray,
    },
    container:{
        flex:1,
        backgroundColor: StyleGuide.palette.backgray,
        paddingRight: StyleGuide.spacing.large,
        paddingLeft: StyleGuide.spacing.large,
    },
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
        //backgroundColor: StyleGuide.palette.white,
        backgroundColor: "#ff4d4d",
        borderRadius: 25,
        color: "#000",
        
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
    tutorName:{
        alignSelf: 'center',
        fontSize: 18,
        color: StyleGuide.palette.red,
        fontFamily: "SFProText-Semibold",
        marginBottom: 10
    },
    label:{
        fontSize: 13,
        color: StyleGuide.palette.red,
        fontFamily: "SFProText-Bold"
    },
    content:{
        fontSize: 12,
        color: StyleGuide.palette.white,
        fontFamily: "SFProText-Semibold",
        marginBottom: 15

    }

});

