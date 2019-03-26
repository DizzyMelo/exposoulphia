// @flow
import * as _ from "lodash";

import * as React from "react";
import {StyleSheet, View, TouchableHighlight, Dimensions, FlatList, ActivityIndicator} from "react-native";

import {
    NavigationBar, Text, StyleGuide, Content, Avatar,
    type NavigationProps, TextField, Button, ThemeProvider
} from "../components";

//import Container from "../components/ContainerProfile";
import type {ThemeName} from "../components/theme";
import TutorRow from "./TutorRow";

const images = require("./images");

import MusicAPI from "./api";
import {PlayerProvider, Playlist, Album, withPlayer, type PlayerProps} from "../components/music";

type ScheduleByTutorState = {
  
};

class ScheduleByTutor extends React.Component<PlayerProps & NavigationProps<>, ScheduleByTutorState> {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    componentDidMount () {

        return fetch('http://apiapp.soulphia.com/api/tutors/method')
            .then( (response) => response.json() )
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });
                console.log(responseJson);
            })

            .catch( (error) => {
                console.log(error)
            });     
    }

    navigate(themeName: ThemeName) {
        const { navigation } = this.props;
        const themeProvider = ThemeProvider.getInstance();
        //themeProvider.switchColors(Colors[themeName]);
        navigation.navigate(themeName);
    }

    profile (name: string, birth: string, quote: string, hobby: string) {
        
        //this.navigate("TutorProfile");

        const { navigation } = this.props;
        navigation.navigate("TutorProfile",{
            name: name,
            birth:birth,
            quote:quote,
            hobby:hobby
        });

    } 

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


        if(this.state.isLoading){
            return (
                <View style={styles.container}>
                    <NavigationBar type="transparent" title={"Disponibilidade"} back={"Schedule"} {...{navigation}} />
                    
                    <View style={styles.containerBtn}>
                        <ActivityIndicator />
                    </View>
                            
                </View>
            );
        } else {

            let tutors = this.state.dataSource.map( (val, key) => {
                return <TutorRow key={key}
                            uri={images.food.uri}
                            preview={images.food.preview}
                            title={val.name}
                            description={val.birth}
                            onPress={() => this.profile (val.name, val.birth, val.quote, val.hobby)}  
                        />
            });
            
        return(
            
            
            <View style={styles.container}>
                    <NavigationBar type="transparent" title={"Disponibilidade"} back={"Schedule"} {...{navigation}} />
                    
                    <Text color="white" style={styles.subtext}>Escolha a tutora que melhor se adequa a você</Text>
                    <Button style={styles.btnLogin} label="VER DISPONIBILIDADE" onPress={this.next} full primary />
                    
                    <View style={styles.containerBtn}>
                        {tutors}
                    </View>           
            </View>
                
                
            
        );

        }
       
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
        justifyContent: "flex-start"
    },
    btnLogin: {
        backgroundColor: StyleGuide.palette.red,
        //backgroundColor: "#ff4d4d",
        borderRadius: 25,
        color: "#000",
        marginTop:5,
        marginHorizontal: 30,
        
    },

    subtext: {
        color:StyleGuide.palette.white,
        textAlign: "center",
        fontSize: 13,
        marginTop: 5,
        marginBottom: StyleGuide.spacing.tiny
    },

});

export default withPlayer(ScheduleByTutor);
