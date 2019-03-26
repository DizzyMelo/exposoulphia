// @flow
import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Button, ButtonDone, Content, List, TextField, Switch, Text, StyleGuide} from "../components";
import type {NavigationProps} from "../components/Navigation";

import QuestionContainer from "./QuestionContainer";
import {CheckBox} from "react-native-elements";

import {Track, Question, PlaylistHeader, PlayerActionSheet} from "../components/music";
import MusicAPI from "../music/api";

import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from  "react-native-simple-radio-button";

type ReasonProps = NavigationProps<>;

type ReasonState = {
    email: string,
    newsletter: boolean
};

var reasons = [
    {label: "Work", value: 0},
    {label: "Travel", value: 1},
    {label: "Meet new friends", value: 2},
    {label: "Learn a new culture", value: 3},
];

export default class Reason extends React.PureComponent<ReasonProps, ReasonState> {

    state = {
        email: "",
        newsletter: false
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
        const {navigation} = this.props;
        navigation.navigate("Level");
    }

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    onToggle = (newsletter: boolean) => this.setState({ newsletter });

    render(): React.Node {
        const {onToggle} = this;
        const tracks = MusicAPI.tracks("brother");
        const playlist = MusicAPI.transformAlbumToPlaylist(MusicAPI.albums[0]);
        return (
            <QuestionContainer
            title="Why do you want to learn English?"   
            >
                <View style={styles.container}>
                    

                    {/* 
                        <RadioForm
                                  radio_props={levels}
                                  initial={1}
                                  onPress={(value) => {console.log(value.toString())}}
                                  buttonSize={18}
                                  buttonOuterSize={24}
                                  selectedButtonColor={'green'}
                                  selectedLabelColor={'green'}
                                  labelStyle={{
                                      fontSize: 15,
                                      color:StyleGuide.palette.white,
                                      alignSelf: 'center',
                                      flex: 1
                                      //marginVertical: 10
                                    }}
                                  disabled={false}
                                  formHorizontal={false}
                        />
                    */}

                    <CheckBox
                        title='Work'
                        checked={true}
                        textStyle={{
                            color: StyleGuide.palette.white
                        }}
                        containerStyle={{
                            backgroundColor: StyleGuide.palette.red
                        }}
                    />

                    <CheckBox
                        title='Travel'
                        checked={false}
                        textStyle={{
                            color: StyleGuide.palette.white
                        }}
                        containerStyle={{
                            backgroundColor: StyleGuide.palette.red
                        }}
                    />

                    <CheckBox
                        title='Make friends'
                        checked={false}
                        textStyle={{
                            color: StyleGuide.palette.white
                        }}
                        containerStyle={{
                            backgroundColor: StyleGuide.palette.red
                        }}
                    />

                    <CheckBox
                        title='Discover a new culture'
                        checked={false}
                        textStyle={{
                            color: StyleGuide.palette.white
                        }}
                        containerStyle={{
                            backgroundColor: StyleGuide.palette.red
                        }}
                    />
                </View>
                <Button style={styles.btnLogin} label="Next" onPress={this.next} full secondary />
                <Button label="Back" onPress={this.back} full primary transparent />
            </QuestionContainer>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: StyleGuide.palette.red,
        margin: 8,
        padding: StyleGuide.spacing.base,
        borderRadius: 10
    },
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
    btnLogin: {
        backgroundColor: StyleGuide.palette.white,
        //backgroundColor: "#ff4d4d",
        borderRadius: 25,
        color: "#000",
        marginTop:15
    },
    newsletter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: StyleGuide.spacing.small
    },
    gutter: {
        //padding: StyleGuide.spacing.small,
        //paddingBottom: StyleGuide.spacing.small + 64
    }
});
