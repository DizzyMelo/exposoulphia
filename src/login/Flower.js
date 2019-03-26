// @flow
import * as React from "react";
import { View, StyleSheet, Dimensions} from "react-native";

import Petal from "./Petal";

const {width} = Dimensions.get("window");

type FlowerProps = {};

// eslint-disable-next-line react/prefer-stateless-function
export default class Flower extends React.PureComponent<FlowerProps> {

    render(): React.Node {
        return (
            <View style={styles.container}>
                <View style={StyleSheet.absoluteFill}>
                    <Petal width={width * 1.5} duration={120} />
                </View>
                <View style={{ ...StyleSheet.absoluteFill, transform: [{ rotate: "30deg" }] }}>
                    <Petal width={width} duration={80} reverse />
                </View>
                <View style={{ ...StyleSheet.absoluteFill, transform: [{ rotate: "45deg" }] }}>
                    <Petal width={width * 0.5} duration={60} />
                </View>
                <View style={{ ...StyleSheet.absoluteFill, transform: [{ rotate: "60deg" }] }}>
                    <Petal width={width * 0.2} duration={30} reverse />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        overflow: "hidden"
    }
});
