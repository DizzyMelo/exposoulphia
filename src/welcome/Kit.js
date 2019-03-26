// @flow
import * as React from "react";
import {StyleSheet, View, Text, TouchableWithoutFeedback} from "react-native";

import {StyleGuide, Image} from "../components";

type KitProps = {
    title: string,
    onPress: () => void,
    uri: string,
    preview: string
};

export default class Kit extends React.PureComponent<KitProps> {

    render(): React.Node {
        const {title, uri, preview, onPress} = this.props;
        return (
            <TouchableWithoutFeedback {...{onPress}}>
                <View style={styles.container}>
                    <Image style={styles.image} {...{uri, preview}} />
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleGuide.styles.borderRadius,
        ...StyleGuide.styles.shadow,
        marginTop: StyleGuide.spacing.small,
        marginHorizontal: StyleGuide.spacing.small,
        height: 160,
        justifyContent: "flex-end"
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderRadius: 8,
        overflow: "hidden"
    },
    text: {
        margin: StyleGuide.spacing.small,
        color: StyleGuide.palette.white,
        ...StyleGuide.typography.title1
    }
});
