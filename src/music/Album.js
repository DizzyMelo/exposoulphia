// @flow

import * as React from "react";
import {StyleSheet, ScrollView} from "react-native";

import {Container, NavigationBar, Content, StyleGuide} from "../components";
import List from "../components/ListLesson"

import {type Album, type Playlist as PlaylistModel, type Track as TrackModel} from "../components/music/Model";
import {Track,PlaylistEntry, PlaylistHeader, PlayerActionSheet} from "../components/music";
import type {NavigationProps} from "../components";
import Component1 from '../question/Component1';
import MusicAPI from "./api";

export default class AlbumScreen extends React.PureComponent<NavigationProps<{ back: string }>> {

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
        }

    }


    render(): React.Node {
        const {navigation} = this.props;
        const {back} = navigation.state.params
        return (
            <Container style={styles.container}>
                <NavigationBar {...{navigation, back}} />
                
                {/*
                    <PlaylistHeader {...{playlist}} />
                */}
                

                <Component1 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component1Visible }
                            style={styles.container}
                        />

                <Content style={styles.gutter}>
                <ScrollView>
                
                </ScrollView>
                
                
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: StyleGuide.palette.backgray
    },  
    gutter: {
        padding: StyleGuide.spacing.small,
        paddingBottom: StyleGuide.spacing.small + 64
    }
});
