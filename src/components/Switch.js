// @flow
import * as React from "react";
import {Switch as RNSwitch, Platform} from "react-native";
import { withTheme, type ThemeProps } from "./theme";

type SwitchProps = ThemeProps & {
    defaultValue?: boolean,
    onToggle?: boolean => void,
    onTintColor?: string
};

type SwitchState = {
    value: boolean
};

class Switch extends React.Component<SwitchProps, SwitchState> {

    constructor(props: SwitchProps) {
        super(props);
        this.state = {
            value: !!props.defaultValue
        };
    }

    toggle = () => {
        const {onToggle} = this.props;
        const {value} = this.state;
        this.setState({ value: !value });
        if (onToggle) {
            onToggle(!value);
        }
    }

    render(): React.Node {
        const {theme} = this.props;
        const {value} = this.state;
        const onTintColor = theme.palette.primary;
        return (
            <RNSwitch
                thumbColor={Platform.OS === "android" ? theme.palette.white : undefined}
                trackColor={{ false: theme.palette.white, true: onTintColor }}
                onValueChange={this.toggle}
                {...{value}}
            />
        );
    }
}

export default withTheme(Switch);
