// @flow
import * as React from "react";
import {ScrollView, StyleSheet, View, Image, StatusBar, ActivityIndicator} from "react-native";

import {ThemeProvider, Colors, StyleGuide, Images, Text, SafeAreaView, NavigationBar} from "../components";

import Kit from "./Kit";
import LessonRow from "./LessonRow";

import type {ThemeName} from "../components/theme";
import type {NavigationProps} from "../components/Navigation";

const images = require("./images");

export default class Welcome extends React.Component<NavigationProps<>> {

    navigate(themeName: ThemeName) {
        const { navigation } = this.props;
        const themeProvider = ThemeProvider.getInstance();
        //themeProvider.switchColors(Colors[themeName]);
        navigation.navigate(themeName);
    }

    next = () => {
        const {navigation} = this.props;
        navigation.navigate("Schedule");
    }

    food = () => this.navigate("Food");
    schedule = () => this.navigate("Schedule");
    social = () => this.navigate("Social");
    music = () => this.navigate("Music");
    photography = () => this.navigate("Photography");
    travel = () => this.navigate("Travel");

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    componentDidMount () {

        /*
        fetch('https://facebook.github.io/react-native/movies.json', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'value1',
                secondParam: 'value2',
            })
        });

        */

        return fetch('http://apiapp.soulphia.com/api/classes/method')
            .then( (response) => response.json() )
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });

            })

            .catch( (error) => {
                console.log(error)
            });

            
    }

    onPress = () => {
        console.log("navigation");
    }

    render(): React.Node {

        const {onPress} = this;
        const {navigation} = this.props;

        if(this.state.isLoading){
            return (
                <View style={styles.container}>
                    <NavigationBar type="transparent" title={"Aulas"}  {...{navigation}} />    
                    <View style={styles.containerLoading}>
                        <ActivityIndicator/>
                    </View>
                </View>
            );
        } else {

            let lessons = this.state.dataSource.map( (val, key) => {
                return <LessonRow key={key}
                            uri={images.food.uri}
                            preview={images.food.preview}
                            title={val.titulo}
                            description={val.descricao}
                            onPress={this.schedule}
                            
                        />
            });

            return (

                
                //rightAction={{ icon: "sign-out", onPress }}
                <React.Fragment>
                    
                    <View style={styles.container}>
                    <NavigationBar type="transparent" title={"Aulas"}  {...{navigation}} />    
                        <ScrollView contentContainerStyle={styles.content}>
                            <SafeAreaView>
                                    {lessons}
                            </SafeAreaView>
                        </ScrollView>
                    </View>
                </React.Fragment>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleGuide.palette.backgray,
    },
    containerLoading: {
        flex: 1,
        backgroundColor: StyleGuide.palette.backgray,
        justifyContent: 'center'
    },
    safeHeader: {
        backgroundColor: StyleGuide.palette.backgray,
        ...StyleGuide.styles.shadow
    },
    text:{
        color: StyleGuide.palette.red,
    },
    header: {
        height:100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: StyleGuide.spacing.small,
        backgroundColor: StyleGuide.palette.backgray,
    },
    logo: {
        width: 50,
        height: 50
    },
    content: {
        paddingVertical: StyleGuide.spacing.small,
        backgroundColor: StyleGuide.palette.backgray,
    }
});
