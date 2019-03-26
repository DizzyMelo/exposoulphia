// @flow
import * as React from "react";
import {StyleSheet, View, TouchableWithoutFeedback} from "react-native";

import {StyleGuide, Image, Text} from "../../components";

import type {NavigationProps} from "../../components";
import type {Album, Pathway, Video} from "./Model";

type AlbumProps = NavigationProps<> & {
    
    pathway: Pathway,
    video: Video,
    from: "profile" | "library",
    title: "American Icon"
};

export default class AlbumVideo extends React.Component<AlbumProps> {

    static defaultProps = {
        from: "library"
    }

    onPress = () => {
        const navigation = this.props.navigation;
        
        //navigation.navigate(key, { album, back });
        navigation.navigate("Pathway");
    }

    render(): React.Node {
        const {onPress} = this;
        const {album, pathway, video} = this.props;
        return (
            <TouchableWithoutFeedback {...{onPress}}>
                <View style={styles.container}>
                    <Image style={styles.image} uri={'http://apiapp.soulphia.com/_ups/videos/2019/02/20/9b5d4325475abaecedc760981c24b7a1.jpg'} />
                    
                    <View style={styles.metadata}>
                        
                    </View>
                    
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: StyleGuide.spacing.small,
        //marginBottom: 1,
        ...StyleGuide.styles.borderRadius,
        ...StyleGuide.styles.shadow
    },
    image: {
        overflow: "hidden",
        height: 163,
        width: 130,
        borderTopLeftRadius: StyleGuide.styles.borderRadius.borderRadius,
        borderTopRightRadius: StyleGuide.styles.borderRadius.borderRadius,
        borderBottomLeftRadius: StyleGuide.styles.borderRadius.borderRadius,
        borderBottomRightRadius: StyleGuide.styles.borderRadius.borderRadius
    },
    metadata: {
        padding: 0
    }
});
