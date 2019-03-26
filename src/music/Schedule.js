// @flow
import * as _ from "lodash";

import * as React from "react";
import {StyleSheet, View, TouchableHighlight, Dimensions, FlatList, ActivityIndicator} from "react-native";

import {
    NavigationBar, Text, StyleGuide, Content, Avatar,
    type NavigationProps, TextField, Button, ThemeProvider
} from "../components";

import type {ThemeName} from "../components/theme";
import Container from "../components/ContainerProfile";

import MusicAPI from "./api";
import {PlayerProvider, Playlist, Album, withPlayer, type PlayerProps} from "../components/music";

type ProfileState = {
  
};

class Profile extends React.Component<PlayerProps & NavigationProps<>, ProfileState> {

    state = {
        
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
                    <NavigationBar type="transparent" title={"Agendar"} back={"Schedule"}  {...{navigation}} />
                    
                    <View style={styles.containerBtn}>
                            <Button style={styles.btnLogin} label="Schedule by tutor" onPress={this.schedule} primary />
                            <Button style={styles.btnLogin} label="Schedule by availability" onPress={this.scheduleAvailable} primary />
                    </View>
                            
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
