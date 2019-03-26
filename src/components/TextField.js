// @flow
import * as React from "react";
import {TextInput, StyleSheet} from "react-native";

import { StyleGuide } from "./theme";

type TextFieldProps = {
    secureTextEntry?: boolean
};

export default class TextField extends React.Component<TextFieldProps> {

    static defaultProps = {
        secureTextEntry: false
    };

    // $FlowFixMe
    input = React.createRef();

    focus = () => this.input.current.focus();

    render(): React.Node {
        return (
            <TextInput
                ref={this.input}
                autoCapitalize = 'words'
                style={styles.textInput}
                underlineColorAndroid="transparent"
                {...this.props}
            />
        );
    }
}

const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-color-literals
    textInput: {
        ...StyleGuide.styles.borderRadius,
        height: 45,
        borderWidth: 1,
        color: "#fff",
        borderColor: "rgba(255, 255, 255, 0.5)",
        padding: StyleGuide.spacing.tiny,
        marginBottom: StyleGuide.spacing.small,
        ...StyleGuide.typography.body,
        ...StyleGuide.styles.shadow
    }
});
