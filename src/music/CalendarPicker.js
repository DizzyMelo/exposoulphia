// @flow
import * as _ from "lodash";

import * as React from "react";
import {StyleSheet, View, TouchableHighlight, Dimensions, FlatList, ActivityIndicator} from "react-native";

import {
    NavigationBar, Text, StyleGuide, Content, Avatar,
    type NavigationProps, TextField, Button, ThemeProvider
} from "../components";

import type {ThemeName} from "../components/theme";
import {Calendar} from "react-native-calendars";
import AddModal from "./addModal";


import MusicAPI from "./api";
import {PlayerProvider, Playlist, Album, withPlayer, type PlayerProps} from "../components/music";

type ProfileState = {
  
};

class Profile extends React.Component<PlayerProps & NavigationProps<>, ProfileState> {

    state = {
        dataAtutal:"aqui e a data"
    };

    navigate(themeName: ThemeName) {
        const { navigation } = this.props;
        const themeProvider = ThemeProvider.getInstance();
        //themeProvider.switchColors(Colors[themeName]);
        navigation.navigate(themeName);
    }

    schedule = () => this.navigate("ScheduleByTutor");
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
        const from = "profile";

       
        return(
            //rightAction={{ icon: "sign-out", onPress }}


            <View style={styles.container}>
                    <NavigationBar type="transparent" title={"Agenda"} back={"ScheduleByTutor"} {...{navigation}} />
                    
                    <Calendar
                        style={{
                            borderWidth:1,
                            borderColor: '#505050',
                            height: 350
                        }}

                        onDayPress={(day)=>{
                            console.log(Object.keys(day))
                            this.setState({
                                dataAtutal: day.day+"/"+day.month+"/"+day.year
                                //dataAtutal: day.timestamp
                            });

                            this.refs.addModal.showModal(day.month);
                        }}

                        theme={{
                            backgroundColor: StyleGuide.palette.red,
                            calendarBackground: StyleGuide.palette.red,
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: StyleGuide.palette.white,
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#09adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: StyleGuide.palette.white,
                            monthTextColor: StyleGuide.palette.white,
                            //textDayFontFamily: 'monospace',
                            //textDayHeaderFontFamily: 'monospace',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 14
                        }}
                    />     
                    <AddModal ref={"addModal"} dataEscolhida={this.state.dataAtutal}>

                    </AddModal>
                </View>    
            
        );
       
    }
}


const styles = StyleSheet.create({
    container: {
        //marginHorizontal: StyleGuide.spacing.small,
        flex: 1,
        backgroundColor: '#404040',
        
    },
    containerBtn: {
        //marginHorizontal: StyleGuide.spacing.small,
        flex: 1,
        backgroundColor: '#404040',
        justifyContent: "center"
    },
    btnLogin: {
        backgroundColor: StyleGuide.palette.red,
        //backgroundColor: "#ff4d4d",
        borderRadius: 25,
        color: "#000",
        marginTop:5,
        marginHorizontal: 30,
        
    },

});

export default withPlayer(Profile);
