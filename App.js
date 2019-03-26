// @flow
import * as React from "react";
import {StatusBar, Platform} from "react-native";
import {createSwitchNavigator, createAppContainer} from "react-navigation";
import {Font, AppLoading} from "expo";

import {Images, loadIcons, ThemeProvider} from "./src/components";

import {Login, SignUpNavigator} from "./src/login";
import {Question, QuestionNavigator} from "./src/question";
import {Welcome} from "./src/welcome";
import {FoodNavigator} from "./src/food";
import {SocialNavigator} from "./src/social";
import {MusicNavigator} from "./src/music";
import {PhotographyNavigator} from "./src/photography";
import {TravelNavigator} from "./src/travel";
import {PlayerProvider} from "./src/components/music";

// $FlowFixMe
const SFProTextBold = require("./fonts/SF-Pro-Text-Bold.otf");
// $FlowFixMe
const SFProTextSemibold = require("./fonts/SF-Pro-Text-Semibold.otf");
// $FlowFixMe
const SFProTextRegular = require("./fonts/SF-Pro-Text-Regular.otf");
// $FlowFixMe
const OpenSansTextRegular = require("./fonts/OpenSans-Regular.ttf");
// $FlowFixMe
const OpenSansTextBold = require("./fonts/OpenSans-Bold.ttf");
// $FlowFixMe
const OpenSansTextSemiBold = require("./fonts/OpenSans-SemiBold.ttf");



const onNavigationStateChange = () => undefined;

type AppProps = {};
type AppState = {
    isReady: boolean
};

export default class App extends React.Component<AppProps, AppState> {

    state = {
        isReady: false
    };

    ready() { this.setState({ isReady: true }); }

    async componentDidMount(): Promise<void> {
        StatusBar.setBarStyle("dark-content");
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("white");
        }
        const fonts = Font.loadAsync({
            "SFProText-Bold": OpenSansTextBold,
            "SFProText-Semibold": OpenSansTextSemiBold,
            "SFProText-Regular": OpenSansTextRegular
        });
        const images = Images.downloadAsync();
        const icons = loadIcons();
        try {
            await Promise.all([fonts, ...images, icons]);
        } catch (e) {
            // Do nothing
        }
        this.ready();
    }

    render(): React.Node {
        const {isReady} = this.state;
        if (!isReady) {
            return (
                <React.Fragment>
                    <StatusBar
                        translucent
                        backgroundColor="transparent"
                        barStyle="dark-content"
                    />
                    <AppLoading />
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle="light-content"
                />
                <ThemeProvider>
                    <PlayerProvider>
                        <AppNavigator {...{onNavigationStateChange}} />
                    </PlayerProvider>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

const MainNavigator = createSwitchNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUpNavigator },
    Question: { screen: Question },
    QuestionNavigator: { screen: QuestionNavigator },
    Welcome: { screen: Welcome },
    Food: { screen: FoodNavigator },
    Social: { screen: SocialNavigator },
    Music: { screen: MusicNavigator },
    Photography: { screen: PhotographyNavigator },
    Travel: { screen: TravelNavigator }
});

const AppNavigator = createAppContainer(MainNavigator);
