// @flow
import * as React from "react";
import {StyleSheet, View, Text, TouchableWithoutFeedback} from "react-native";

import {StyleGuide, Image, Button} from "../components";
//import console = require("console");

type KitProps = {
    title: string,
    description: string,
    onPress: () => void,
    uri: string,
    preview: string
};

export default class Kit extends React.PureComponent<KitProps> {

    render(): React.Node {
        const {title, description, uri, preview, onPress} = this.props;

       

        
        return (
            
                <View style={styles.container}>
                    <Image style={styles.image} {...{uri, preview}} />
                    <View style={styles.topLine}>
                        <Text style={styles.text}>{title}</Text>

                        <Button style={styles.btnAgendar} label="Agendar" onPress={onPress} primary />
                        {/*
                        <TouchableWithoutFeedback {...{onPress}}>
                            <Image style={styles.imageButton} source={require('./img/calendar.png')} />
                        </TouchableWithoutFeedback>
                        */}
                        
                    </View>
                    <Text style={styles.desc}>{description}</Text>
                </View>
            
        );
                    }
    
}

const styles = StyleSheet.create({
    container: {
        ...StyleGuide.styles.borderRadius,
        ...StyleGuide.styles.shadow,
        marginTop: StyleGuide.spacing.small,
        marginHorizontal: StyleGuide.spacing.small,
        height: 160,
        justifyContent: "flex-end"
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderRadius: 8,
        overflow: "hidden"
    },
    imageButton:{
        width: 40,
        height: 40,
    },
    btnAgendar:{
        marginRight: 10,
    },
    text: {
        margin: StyleGuide.spacing.small,
        color: StyleGuide.palette.red,
        ...StyleGuide.typography.title3
    },
    desc: {
        margin: StyleGuide.spacing.small,
        color: StyleGuide.palette.white,
        //...StyleGuide.typography.title3
    },
    topLine:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }

});
