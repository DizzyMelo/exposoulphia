// @flow
import * as React from "react";
import { View, StyleSheet, ScrollView, StatusBar, Dimensions } from "react-native";

import {Text, KeyboardSpacer, StyleGuide} from "../components";
import type {NavigationProps} from "../components/Navigation";


const {height} = Dimensions.get("window");

type LoginProps = NavigationProps<> & {
  title: string,
  subtitle: string,
  children: React.Node
};

export default class Login extends React.PureComponent<LoginProps> {

    render(): React.Node {
        const {children, title, subtitle} = this.props;
        return (
            <View style={styles.container}>
                {/*
                <Flower />
                */}
                <ScrollView
                    showsVerticalScrollIndicator
                    bounces={false}
                >
                    <StatusBar barStyle="dark-content" />
                    <View style={styles.content}>
                        <Text type="headline" style={styles.title}>{title}</Text>
                        <Text type="title1" style={styles.subtitle}>{subtitle}</Text>
                        {children}
                    </View>
                    <KeyboardSpacer />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#404040"
    },
    content: {
        height,
        justifyContent: "center",
        padding: StyleGuide.spacing.small
    },
    title: {
        color: StyleGuide.palette.white
    },
    subtitle: {
        marginBottom: StyleGuide.spacing.small,
        color: StyleGuide.palette.white
    }
});
