// @flow
import * as React from "react";

import { StyleSheet , View} from "react-native";
import {Button,  Content, List,StyleGuide} from "../components";
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

type LevelProps = NavigationProps<>;

type LevelState = {
    firstName: string,
    lastName: string
};

var levels = [
    {label: "Basic", value: 0},
    {label: "Intermediate", value: 1},
    {label: "Advanced", value: 2},
];

export default class Level extends React.PureComponent<LevelProps, LevelState> {

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

    next = () => {
        const {navigation} = this.props;
        navigation.navigate("Topics");
    }

    back = () => {
        const {navigation} = this.props;
        navigation.navigate("Reason");
    }

    render(): React.Node {
        const {onToggle} = this;
        const tracks = MusicAPI.tracks("brother");
        const playlist = MusicAPI.transformAlbumToPlaylist(MusicAPI.albums[0]);
        return (
            <QuestionContainer
                title="How do you evaluate your English skills?"
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
                        title='Basic'
                        checked={true}
                        textStyle={{
                            color: StyleGuide.palette.white
                        }}
                        containerStyle={{
                            backgroundColor: StyleGuide.palette.red
                        }}
                    />

                    <CheckBox
                        title='Intermediate'
                        checked={false}
                        textStyle={{
                            color: StyleGuide.palette.white
                        }}
                        containerStyle={{
                            backgroundColor: StyleGuide.palette.red
                        }}
                    />

                    <CheckBox
                        title='Advanced'
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
        marginTop:15,
        marginVertical: 50
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
