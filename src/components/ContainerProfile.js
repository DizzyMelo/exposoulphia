// @flow
import * as React from "react";
import {StyleSheet, ScrollView} from "react-native";
import {StyleGuide} from "./theme/StyleGuide";

type ContainerProps = {
    children: React.Node
};

export default class Container extends React.PureComponent<ContainerProps> {

    render(): React.Node {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>{this.props.children}</ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404040',
        marginHorizontal: 20,
    }
});
