// @flow

import * as React from "react";
import {StyleSheet, ScrollView, ActivityIndicator} from "react-native";

import {Container, NavigationBar, Content, StyleGuide, Button} from "../components";
import List from "../components/ListLesson"

import PathwayRow from "./PathwayRow";
import {type Album, type Playlist as PlaylistModel, type Track as TrackModel} from "../components/music/Model";
import {Track,PlaylistEntry, PlaylistHeader, PlayerActionSheet} from "../components/music";
import type {NavigationProps} from "../components";
import Component1 from '../question/Component1';
import MusicAPI from "./api";

const images = require("./images");

export default class PathwayScreen extends React.PureComponent<NavigationProps<>> {

    // TODO: createRef()
    playerActionSheet: PlayerActionSheet;

    setPlayerActionSheet = (playerActionSheet: ?PlayerActionSheet) => {
        if (playerActionSheet) {
            this.playerActionSheet = playerActionSheet;
        }
    }

    toggle = (playlist: PlaylistModel, track: TrackModel) => {
        this.playerActionSheet.toggle(playlist, track);
    }

    constructor(props) {

        super(props);

        this.state = {
            Component1Visible: true,
            isLoading: true,
            dataSource: null
        }

    }

    navigate() {
        const { navigation } = this.props;
        //const themeProvider = ThemeProvider.getInstance();
        //themeProvider.switchColors(Colors[themeName]);
        navigation.navigate("Plan");
    }

    

    componentDidMount () {

        return fetch('http://apiapp.soulphia.com/api/pathways/bycategorie/1')
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


    render(): React.Node {
        const {navigation} = this.props;


        if(this.state.isLoading){
            return (
                <Container style={styles.container}> 
                <NavigationBar {...{navigation}} back="Library" title={"Pathway"} />

                <Content style={styles.gutter}>
                <ScrollView>
                    <ActivityIndicator/>
                </ScrollView>
                
                
                </Content>
            </Container>
            );
        } else {

            let lessons = this.state.dataSource.map( (val, key) => {
                return <PathwayRow key={key}
                            uri={images.food.uri}
                            preview={images.food.preview}
                            title={val.titulo_eng}
                            description={val.descricao_eng}
                            onPress={this.schedule}
                            
                        />
            });

            return (
                <Container style={styles.container}> 
                    <NavigationBar {...{navigation}} back="Library" title={"Pathway"} />
                    
                    <Component1 
                                navigation={this.props.navigation}
                                toggleComponent={ (component) => this.toggleComponent(component) }
                                hideComponent={ (component) => this.hideComponent(component) }
                                showComponent={ (component) => this.showComponent(component) }
                                visible={ this.state.Component1Visible }
                                style={styles.container}
                            />
    
                    <Content style={styles.gutter}>
                    <Button style={styles.btnLogin} label="SIGN UP" onPress={() => this.navigate()} primary />
                    <ScrollView
                        horizontal={true}
                    >
                        {lessons}
                    </ScrollView>
                    
                    
                    </Content>
                </Container>
            );
        }
        
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: StyleGuide.palette.backgray
    },  
    gutter: {
        padding: StyleGuide.spacing.small,
        paddingBottom: StyleGuide.spacing.small + 64
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
