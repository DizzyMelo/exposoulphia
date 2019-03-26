# Packages Used

```json
{
    "name": "react-native-elements",
    "version": "2.0.7",
    "private": true,
    "license": "https://wcandillon.github.io/react-native-elements/License.html",
    "devDependencies": {
        "babel-eslint": "^8.2.1",
        "babel-preset-expo": "^5.0.0",
        "eslint": "^4.9.0",
        "eslint-config-airbnb": "^16.1.0",
        "eslint-plugin-flowtype": "^2.41.0",
        "eslint-plugin-import": "^2.7.0",
        "eslint-plugin-jsx-a11y": "^6.0.2",
        "eslint-plugin-react": "^7.4.0",
        "eslint-plugin-react-native": "^3.2.1",
        "expo-cli": "^2.6.14",
        "flow-bin": "0.63.1",
        "flow-result-checker": "^0.3.0",
        "jest-expo": "^32.0.0",
        "react-test-renderer": "16.0.0-alpha.12"
    },
    "main": "node_modules/expo/AppEntry.js",
    "scripts": {
        "start": "expo start",
        "android": "expo start --android",
        "ios": "expo start --ios",
        "eject": "expo eject",
        "test": "jest",
        "test:watch": "jest --watch",
        "flow": "flow check --show-all-errors | flow-result-checker",
        "lint": "eslint App.js src/",
        "deploy:expo": "expo-cli publish",
        "deploy": "yarn deploy:expo",
        "build:ios": "expo-cli build:ios",
        "build:android": "expo-cli build:android",
        "build": "yarn build:ios && yarn build:android"
    },
    "jest": {
        "preset": "jest-expo",
        "transformIgnorePatterns": [
            "node_modules/(?!react-native|react-navigation|expo|native-base-shoutem-theme|@shoutem|react-clone-referenced-element|native-base|@expo|mobx-react)"
        ],
        "testResultsProcessor": "./node_modules/jest-junit-reporter"
    },
    "dependencies": {
        "@expo/vector-icons": "6.3.1",
        "crypto-js": "^3.1.9-1",
        "expo": "^32.0.0",
        "gl-react": "^3.15.0",
        "gl-react-expo": "https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/npm%2Fgl-react-expo-3.16.4.tgz?alt=media&token=57526b5b-96a3-493c-a9d2-288bb5409648",
        "jest-junit-reporter": "^1.1.0",
        "lodash": "^4.17.4",
        "moment": "^2.18.1",
        "react": "16.5.0",
        "react-native": "https://github.com/expo/react-native/archive/sdk-32.0.0.tar.gz",
        "react-native-datepicker": "1.6.0",
        "react-native-keyboard-spacer": "^0.4.1",
        "react-native-maps-super-cluster": "^1.3.1",
        "react-navigation": "^3.0.9"
    }
}
```
