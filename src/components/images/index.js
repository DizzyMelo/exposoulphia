// @flow
import {Asset} from "expo";
import logo from "../../../assets/app.png";

export default class Images {

    static logo = logo;

    static downloadAsync(): Promise<*>[] {
        return [
            Asset.loadAsync(Images.logo)
        ];
    }
}
