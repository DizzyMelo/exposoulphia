// @flow
import {createStackNavigator} from "react-navigation";

import { StackNavigatorOptions } from "../components/Navigation";

import Level from "./Level";
import Reason from "./Reason";
import Topics from "./Topics";
import WelcomeVideo from "./welcome";
import Profile from "./profile";

export {default as Question} from "./welcome";

export const QuestionNavigator = createStackNavigator({
    Reason: { screen: Reason },
    Level: { screen: Level },
    Topics: { screen: Topics },
    WelcomeVideo: { screen: WelcomeVideo },
    Profile: { screen: Profile },
}, StackNavigatorOptions);
