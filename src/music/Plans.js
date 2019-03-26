// @flow
import * as _ from "lodash";

import * as React from "react";
import {StyleSheet, View, TouchableHighlight, Dimensions, FlatList, ActivityIndicator} from "react-native";

import {
    NavigationBar, Text, StyleGuide, Content, Avatar,
    type NavigationProps, TextField, Button, ThemeProvider
} from "../components";

import type {ThemeName} from "../components/theme";

import MusicAPI from "./api";
import {PlayerProvider, Playlist, Album, withPlayer, type PlayerProps} from "../components/music";

var screen = Dimensions.get('window');
var heightTop = screen.height / 3;
var heightBottom = screen.height - heightTop;
type PlanState = {
  
};

class Plan extends React.Component<PlayerProps & NavigationProps<>, PlanState> {

    state = {
        
    };

    paypal() {
        const { navigation } = this.props;
        //const themeProvider = ThemeProvider.getInstance();
        //themeProvider.switchColors(Colors[themeName]);
        navigation.navigate("Paypal");
    }

    //paypal = () => this.navigate("Paypal");
    scheduleAvailable = () => this.navigate("ScheduleByAvailability");
    onPress = async (): Promise<void> => {
        const playerProvider = PlayerProvider.getInstance();
        const {navigation} = this.props;
        if (PlayerProvider.sound) {
            await playerProvider.sound.unloadAsync();
        }
        navigation.navigate("Welcome");
    }

    render(): React.Node {
        const {onPress, onChange} = this;
        const {navigation} = this.props;
        const {selectedIndex} = this.state;
        const {me, playlists, albums} = MusicAPI;
        const from = "Plan";

       
        return(
            //rightAction={{ icon: "sign-out", onPress }}
            <View style={styles.container}>
                    <NavigationBar type="transparent" title={"Plans"}  {...{navigation}} />
                    
                    <View style={styles.containerBtn}>
                        <Text style={styles.title}>Let's get started ?</Text>
                    <View style={styles.column}>
                        <View style={styles.columnContent}>
                            <Text style={styles.miniTitle}> Native tutors</Text>
                            <Text style={styles.text}> Message</Text>
                            <Text style={styles.miniTitle}> + than 1000 exercises</Text>
                            <Text style={styles.text}> Message</Text>
                        </View>

                        <View style={styles.columnContent}>
                            <Text style={styles.miniTitle}> Native tutors</Text>
                            <Text style={styles.text}> Message</Text>
                            <Text style={styles.miniTitle}> + than 1000 exercises</Text>
                            <Text style={styles.text}> Message</Text>
                        </View>
                    </View>
                    </View>

                    <View style={styles.containerBottom}>
                        
                        <View style={styles.column}>


                            <View style={styles.contentBottomColumn}>
                                <Text style={styles.titlePlan}>Plan type</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.lastTextPlan}>Individual</Text>
                                <Text style={styles.textUnderscore}>_________</Text>
                                <View style={styles.priceContainer}>
                                <Text style={styles.dollarPlan}>$</Text>
                                    <Text style={styles.pricePlan}>12</Text>
                                </View>
                                <Text style={styles.period}>monthly</Text>

                                <TouchableHighlight style={styles.btnUpgrade} onPress={() => this.paypal()}>
                                    <Text style={styles.subtextBtn}>SIGN UP</Text>
                                </TouchableHighlight>
                            </View>

                            <View style={styles.contentBottomColumn}>
                                <Text style={styles.titlePlan}>Plan type</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.lastTextPlan}>Individual</Text>
                                <Text style={styles.textUnderscore}>_________</Text>
                                <View style={styles.priceContainer}>
                                <Text style={styles.dollarPlan}>$</Text>
                                    <Text style={styles.pricePlan}>399</Text>
                                </View>
                                <Text style={styles.period}>monthly</Text>

                                <TouchableHighlight style={styles.btnUpgrade} onPress={() => this.paypal()}>
                                    <Text style={styles.subtextBtn}>SIGN UP</Text>
                                </TouchableHighlight>
                            </View>

                            <View style={styles.contentBottomColumn}>
                                <Text style={styles.titlePlan}>Plan type</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.textPlan}>Individual</Text>
                                <Text style={styles.lastTextPlan}>Individual</Text>
                                <Text style={styles.textUnderscore}>_________</Text>
                                <View style={styles.priceContainer}>
                                <Text style={styles.dollarPlan}>$</Text>
                                    <Text style={styles.pricePlan}>699</Text>
                                </View>
                                <Text style={styles.period}>monthly</Text>

                                <TouchableHighlight style={styles.btnUpgrade} onPress={() => this.paypal()}>
                                    <Text style={styles.subtextBtn}>SIGN UP</Text>
                                </TouchableHighlight>
                            </View>

                        </View>
                    
                    </View>

            </View>
                
                
            
        );
       
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404040',
        
    },
    subtextBtn:{
        fontSize: 12,
        color: StyleGuide.palette.white,
    },  
    priceContainer: {
        paddingTop: 5,
        flexDirection: 'row'
    },
    containerBtn: {
        paddingTop: 20,
        height:heightTop,
        backgroundColor: StyleGuide.palette.backgray,
        justifyContent: "center",
    },
    containerBottom:{
        height:heightBottom,
        backgroundColor: StyleGuide.palette.white,
    },
    contentBottomColumn:{
        alignItems: "center",
    },
    title:{
        paddingTop: 20,
        fontSize: 25,
        color: StyleGuide.palette.white,
        fontFamily: 'SFProText-Semibold',
        alignSelf: 'center'
    },
    column:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnUpgrade:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        backgroundColor:StyleGuide.palette.red,
        height:30,
        width: 90
    },
    miniTitle:{
        fontSize: 15,
        color: StyleGuide.palette.white,
        fontFamily: 'SFProText-Semibold',
        marginBottom: 5
    },
    
    titlePlan:{
        fontSize: 15,
        color: StyleGuide.palette.red,
        fontFamily: 'SFProText-Semibold',
        marginBottom: 5
    },
    dollarPlan:{
        fontSize: 10,
        color: StyleGuide.palette.red,
    },
    pricePlan:{
        fontSize: 20,
        color: StyleGuide.palette.red,
        fontFamily: 'SFProText-Semibold',
        paddingTop: 5
    },
    period:{
        fontSize: 10,
        color: StyleGuide.palette.red,
        marginBottom: 5
    },
    textUnderscore:{
        fontSize: 12,
        color: StyleGuide.palette.gray
    },
    
    textPlan:{
        fontSize: 12,
        color: StyleGuide.palette.gray,
        marginBottom: 5
    },
    lastTextPlan:{
        fontSize: 12,
        color: StyleGuide.palette.gray,
    },
    text:{
        fontSize: 15,
        color: StyleGuide.palette.red,
        marginBottom: 10
    },
    columnContent:{
        justifyContent: 'center',
    }

});

export default withPlayer(Plan);
