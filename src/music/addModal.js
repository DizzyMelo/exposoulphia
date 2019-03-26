import React, {Component} from "react"

import {View,StyleSheet, TouchableHighlight, Dimensions, Platform, Alert} from "react-native";
import Modal from "react-native-modalbox";


var screen = Dimensions.get('window');

import {
    NavigationBar, Text, StyleGuide
    
} from "../components";


type AddModalProps = {
    dataEscolhida: string,
    
};

export default class AddModal extends Component<AddModalProps> {
    constructor(props){
        super(props);
    }

    showModal = () => {
        this.refs.myModal.open();
    }

    render(): React.Node {
        //const {onPress, onChange} = this;
        const {dataEscolhida} = this.props;
        

       
        return(
            //rightAction={{ icon: "sign-out", onPress }}


            <Modal
                ref={'myModal'}
                style={{
                    justifyContent: 'space-between',
                    borderRadius: Platform.OS === 'ios' ? 20 : 20,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                //onClosed={() => { alert('modal closed'); }}
            >

                <View style={styles.top}>
                    <Text style={styles.title}>{dataEscolhida}</Text>
                </View>
                <View style={styles.column}>
                    <View style={styles.columnContent}>
                        <Text style={styles.miniTitle}> Pathway</Text>
                        <Text style={styles.text}> American Idol</Text>
                        <Text style={styles.miniTitle}> Tutora</Text>
                        <Text style={styles.text}> Renee Brooks</Text>
                    </View>

                    <View style={styles.columnContent}>
                        <Text style={styles.miniTitle}> Aula 01</Text>
                        <Text style={styles.text}> Beyonce</Text>
                        <Text style={styles.miniTitle}> Horário</Text>
                        <Text style={styles.text}> 19h</Text>
                    </View>

                </View>

                <View style={styles.columnBottom}>
                    
                    <TouchableHighlight style={styles.btnUpgrade}>
                            <Text style={styles.subtext}>CANCELAR</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btnUpgradeConfirm}>
                            <Text style={styles.subtext}>CONFIRMAR</Text>
                    </TouchableHighlight>

                </View>

            </Modal>
            
        );
       
    }
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: StyleGuide.palette.red,
        height:60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 18,
        color: StyleGuide.palette.white,
        fontFamily: 'SFProText-Semibold'
    },
    column:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    columnBottom:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    miniTitle:{
        fontSize: 15,
        color: StyleGuide.palette.red,
        fontFamily: 'SFProText-Semibold',
        marginBottom: 5
    },
    text:{
        fontSize: 15,
        color: StyleGuide.palette.gray,
        marginBottom: 10
        
    },
    columnContent:{
        justifyContent: 'center',
        //alignItems: 'center'
    },
    btnUpgradeConfirm:{
        borderRadius:15,
        width: 120,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',        
        backgroundColor:'#07c126'
    },

    btnUpgrade:{
        borderRadius:15,
        width: 120,
        height: 35,        
        backgroundColor:'#ff4d4d',
        justifyContent: 'center',
        alignItems: 'center',
    },

    subtext: {
        color:StyleGuide.palette.white,
        textAlign: "center",
        fontSize: 13,
        marginBottom: StyleGuide.spacing.tiny
    }

});

//https://www.youtube.com/embed/7Z3_CsXA_-E