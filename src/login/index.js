// @flow
import {createStackNavigator} from "react-navigation";

import { StackNavigatorOptions } from "../components/Navigation";

import SignUpName from "./SignUpName";
import SignUpEmail from "./SignUpEmail";
import SignUpPassword from "./SignUpPassword";

export {default as Login} from "./Login";

export const SignUpNavigator = createStackNavigator({
    SignUpName: { screen: SignUpName },
    SignUpEmail: { screen: SignUpEmail },
    SignUpPassword: { screen: SignUpPassword }
}, StackNavigatorOptions);
