// @flow
import * as React from "react";
import { StyleSheet, Animated } from "react-native";
import {LinearGradient} from "expo";

type PetalProps = {
  width: number,
  duration: number,
  reverse: boolean
};

type PetalState = {
    animation: Animated.Value
};

const colors = ["#289DCC", "#815EFF"];
const start = [0, 0];
const end = [1, 1];

export default class Petal extends React.PureComponent<PetalProps, PetalState> {

    static defaultProps = {
        reverse: false
    };

    state = {
        animation: new Animated.Value(0)
    };

    componentDidMount() {
        const {duration} = this.props;
        const {animation} = this.state;
        Animated.loop(Animated.timing(animation, {
            toValue: 1,
            duration: duration * 1000,
            useNativeDriver: true
        })).start();
    }

    render(): React.Node {
        const {width, reverse} = this.props;
        const {animation} = this.state;
        const style = {
            width,
            height: width,
            opacity: 0.35,
            borderRadius: width / 4
        };
        const rotate = animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", `${reverse ? "-" : ""}360deg`]
        });
        return (
            <React.Fragment>
                <Animated.View style={[styles.container, { transform: [{ rotate }]}]}>
                    <LinearGradient {...{style, colors, start, end}} />
                </Animated.View>
                <Animated.View style={[styles.container, { transform: [{ rotate }]}]}>
                    <LinearGradient
                        style={{ ...style, transform: [{ rotate: "45deg" }] }}
                        {...{colors, start, end}}
                    />
                </Animated.View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center"
    }
});
