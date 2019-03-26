// @flow
import * as React from "react";
import {StyleSheet, View, Text, ActivityIndicator} from "react-native";

import {StyleGuide, type NavigationProps} from "../components";

import MusicAPI from "./api";
import type {Album as AlbumModel} from "../components/music/Model";
import type {Pathway as PathwayModel} from "../components/music/Model";
import {PlayerProvider, Album, withPlayer, type PlayerProps} from "../components/music";
import AlbumVideo from "../components/music/AlbumVideo";
import FeedLibrary from "../components/FeedLibrary";

import NavigationBar from "../components/NavigationBar";
import SegmentedControl from "../components/SegmentedControl";

type LibraryState = {
    isLoading: boolean,
    dataSource: object,
    selectedIndex: number,
    url: string
};

class Library extends React.Component<PlayerProps & NavigationProps<>, LibraryState> {

    state = {
        isLoading: true,
        dataSource: null,
        url: 'http://apiapp.soulphia.com/api/categories/method',
        selectedIndex: 1,
    };

    componentDidMount () {
        
        console.log(this.state.url);

        return fetch(this.state.url)
            .then( (response) => response.json() )
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });
                console.log(this.state.dataSource);
            })

            .catch( (error) => {
                console.log(error)
            });       
    }

    videos() {
        this.setState({
            isLoading: true
        });
        if(this.state.selectedIndex != 1){
            return fetch('http://apiapp.soulphia.com/api/categories/method')
            .then( (response) => response.json() )
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });
                console.log(this.state.dataSource);
            })

            .catch( (error) => {
                console.log(error)
            });
        }else{
            return fetch("http://apiapp.soulphia.com/api/videos/method")
            .then( (response) => response.json() )
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });
                console.log(this.state.dataSource);
            })

            .catch( (error) => {
                console.log(error)
            });
        }       
    }

    onChange = (selectedIndex: number) => this.setState({
        //isLoading:true,
        selectedIndex,
        dataSource: this.videos(),
    });

    renderItem = (album: AlbumModel): React.Node => {
        const {navigation} = this.props;
        return <Album {...{navigation}} />;
    }

    renderItemVideo = (album: AlbumModel): React.Node => {
        const {navigation} = this.props;
        return <AlbumVideo {...{navigation}} />;
    }

    onPress = async (): Promise<void> => {
        const playerProvider = PlayerProvider.getInstance();
        const {navigation} = this.props;
        if (playerProvider.sound) {
            await playerProvider.sound.unloadAsync();
        }
        navigation.navigate("Welcome");
    }

    render(): React.Node {
        const {onPress} = this;
        const renderItem = this.state.selectedIndex == 1 ? this.renderItem : this.renderItemVideo;
        const renderItemVideo = this.renderItemVideo;
        const {navigation} = this.props;
        //const data = MusicAPI.albums;
        const data = this.state.dataSource
        const title = "Home";
        const rightAction = {
            icon: "search",
            onPress
        };

        const selectedIndex = this.state.selectedIndex;
        const {onChange} = this;

        if(this.state.isLoading){
            return (
                <View style={styles.container}>
                    <NavigationBar
                        {...{ navigation, title, rightAction }}
                    />
        
                    <SegmentedControl
                        transparent
                        values={["Videos", "Pathway"]}
                        {...{ selectedIndex, onChange }}
                    />
                    <ActivityIndicator/>
                </View>
            );
        } else {
            return (

                <View style={styles.container}>

                    <NavigationBar
                        {...{ navigation, title, rightAction }}
                    />
        
                    <SegmentedControl
                        transparent
                        values={["Videos", "Pathway"]}
                        {...{ selectedIndex, onChange }}
                    />
                    <FeedLibrary {...{data, renderItem, title, navigation, rightAction}} style={styles.content} numColumns={1} />
                </View>
                /*
                    <FeedLibrary {...{data, renderItem, renderItemVideo, title, navigation, rightAction}} style={styles.content} numColumns={1} />
                */
                    
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    content: {
        marginTop:10,
        paddingBottom: StyleGuide.spacing.small 
    }
});

export default (Library);
