// @flow
import * as React from "react";
import {StyleSheet, View} from "react-native";

import {StyleGuide} from "./theme";

import type {StyleProps} from "./theme";

type ContentProps = StyleProps & {
    children: React.Node
};

export default class Content extends React.PureComponent<ContentProps> {

    render(): React.Node {
        const {children, style} = this.props;
        return (
            <View style={styles.container} contentContainerStyle={style}>
                {children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.backgray
    }
});
