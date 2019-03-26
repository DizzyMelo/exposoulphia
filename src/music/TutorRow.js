// @flow
import * as React from "react";
import {StyleSheet, View, Text, TouchableHighlight, Image} from "react-native";

import {StyleGuide, Image as ImageComponent, Button} from "../components";

//import console = require("console");

type KitProps = {
    title: string,
    description: string,
    onPress: () => void,
    onPressCalendar: () => void,
    uri: string,
    preview: string
};

export default class Kit extends React.PureComponent<KitProps> {

    render(): React.Node {
        const {title, description, uri, preview, onPress, onPressCalendar} = this.props;
        return (
            
                <View style={styles.container}>
                    <ImageComponent style={styles.image} {...{uri, preview}} />
                        
                        <View style={styles.conteinerDesc}>
                            <Text style={styles.text}>{title}</Text>
                            <View style={styles.conteinerBottom}>

                                <View style={styles.conteinerBottomLine}>
                                    <Image source={require('./img/computer.png')} />
                                    <Text style={styles.subtextBottom}>25 aulas</Text>
                                </View>

                                <View style={styles.conteinerBottomLine}>
                                    <Image source={require('./img/star.png')} />
                                    <Text style={styles.subtextBottom}>8,9</Text>
                                </View>
                            </View>
                        </View>
                        
                        
                        <View>
                            <TouchableHighlight style={styles.btnPerfil} onPress={onPress}>
                                <Text color="black" style={styles.subtextPerfil}>Perfil</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.btnUpgrade} onPress={onPressCalendar}>
                                <Text color="white" style={styles.subtext}>Escolher</Text>
                            </TouchableHighlight>
                        </View>
                        
                        
                    {/* 
                        <Text style={styles.desc}>{description}</Text>
                    */}

                    
                </View>
            
        );
                    }
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //...StyleGuide.styles.borderRadius,
        //...StyleGuide.styles.shadow,
        marginTop: StyleGuide.spacing.small,
        marginHorizontal: StyleGuide.spacing.small,
        height: 110,
        //justifyContent: "flex-end"
    },
    image: {
        //...StyleSheet.absoluteFillObject,
        //position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        //overflow: "hidden"
    },
    imageButton:{
        width: 40,
        height: 40,
    },
    conteinerBottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: -10,
        top: -10
        
    },
    conteinerBottomLine:{
        flexDirection: 'row',
        //justifyContent: 'flex-start',
        alignItems: 'center',
    },
    conteinerDesc:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        //alignItems: 'flex-start',
    },

    btnPerfil:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        width: 160,        
        backgroundColor:'#fff',
        height:26,
        width: 100,
        marginBottom: 5
    },
    btnUpgrade:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        width: 160,        
        backgroundColor:'#ff4d4d',
        height:26,
        width: 100
    },

    subtextPerfil: {
        color:StyleGuide.palette.black,
        textAlign: "center",
        fontSize: 13,
        marginTop: 5,
        marginBottom: StyleGuide.spacing.tiny
    },

    subtextBottom: {
        color:StyleGuide.palette.white,
        textAlign: "center",
        fontSize: 13,
        marginTop: 7,
        marginLeft: 3,
        marginBottom: StyleGuide.spacing.tiny
    },
    subtext: {
        color:StyleGuide.palette.white,
        textAlign: "center",
        fontSize: 13,
        marginTop: 5,
        marginBottom: StyleGuide.spacing.tiny
    },
    btnAgendar:{
        marginRight: 10,
    },
    text: {
        margin: StyleGuide.spacing.small,
        color: StyleGuide.palette.red,
        ...StyleGuide.typography.title4,
        left: -30
    },
    desc: {
        margin: StyleGuide.spacing.small,
        color: StyleGuide.palette.white,
        ...StyleGuide.typography.title4
    },
    topLine:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }

});
