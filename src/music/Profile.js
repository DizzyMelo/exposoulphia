// @flow
import * as _ from "lodash";

import * as React from "react";
import {StyleSheet, View, TouchableHighlight, Dimensions, FlatList, ActivityIndicator} from "react-native";

import {
    NavigationBar, Text, StyleGuide, Content, Avatar,
    type NavigationProps, TextField
} from "../components";

import Container from "../components/ContainerProfile";

import MusicAPI from "./api";
import {PlayerProvider, Playlist, Album, withPlayer, type PlayerProps} from "../components/music";

type ProfileState = {
  selectedIndex: number,
  isLoading: boolean,
  dataSource: object,
  data: object,
};

class Profile extends React.Component<PlayerProps & NavigationProps<>, ProfileState> {

    state = {
        selectedIndex: 0,
        isLoading: true,
        dataSource: null,
        url: 'http://apiapp.soulphia.com/api/schedules/byuser/2',
        data: null
    };


     
    componentDidMount () {
        
        console.log(this.state.url);

        return fetch(this.state.url)
            .then( (response) => response.json() )
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                    data: responseJson,
                });
                console.log(this.state.dataSource);
            })

            .catch( (error) => {
                console.log(error)
            });       
    }


    renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <View key={item.key}
            style={styles.item}
          >
            <Text style={styles.itemTitleText}>{item.tutor_id}</Text>
            <Text style={styles.itemText}>Data: 13/02/2019</Text>
            <Text style={styles.itemText}>Hora: 22h</Text>
            <Text style={styles.itemText}>Dia: Sábado</Text>
            {/* 
                <Text style={styles.itemText}>{item.key}</Text>
            */}
            

          </View>
        );
      };

      renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <View key={index}
            style={styles.item}
          >
            <Text style={styles.itemTitleText}>{item.tutor_id}</Text>
            <Text style={styles.itemText}>Data: 13/02/2019</Text>
            <Text style={styles.itemText}>Hora: 22h</Text>
            <Text style={styles.itemText}>Dia: Sábado</Text>
            {/* 
                <Text style={styles.itemText}>{item.key}</Text>
            */}
            

          </View>
        );
      };

    onChange = (selectedIndex: number) => this.setState({ selectedIndex });

    onPress = async (): Promise<void> => {
        const playerProvider = PlayerProvider.getInstance();
        const {navigation} = this.props;
        if (PlayerProvider.sound) {
            await playerProvider.sound.unloadAsync();
        }
        navigation.navigate("Welcome");
    }

    render(): React.Node {
        const {onPress, onChange} = this;
        const {navigation} = this.props;
        const {selectedIndex} = this.state;
        const {me, playlists, albums} = MusicAPI;
        const from = "profile";

        data = [
            { key: 'Buscando' }
            
          ];

        numColumns = 2;
       formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
      
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
          data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
          numberOfElementsLastRow++;
        }
      
        return data;
      };

      if(this.state.isLoading){
        return(
            // rightAction={{ icon: "sign-out", onPress }}
            <View style={styles.container}>
            <NavigationBar type="transparent" title={"Perfil"} {...{navigation}} />
            
            
            
                <Container>
                <Avatar uri={me.picture} size={90} style={styles.avatar} />
                <Text type="title3" style={styles.text}>{me.name}</Text>
                <Text style={styles.subtext}>25 lições feitas</Text>

                <TextField
                    //color={"#fff"}
                    placeholder="Nome"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setFirstName}
                    onSubmitEditing={this.goToLastName}
                    style={styles.textField}
                />
                <TextField
                    //color={"#fff"}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setFirstName}
                    onSubmitEditing={this.goToLastName}
                    style={styles.textField}
                />

                    <Text style={styles.titleRed}>Plano</Text>
                    <View style={styles.planContainer}>
                        <Text style={styles.subtextPlan}>Básico</Text>
                        <TouchableHighlight style={styles.btnUpgrade}>
                            <Text style={styles.subtext}>Upgrade plano</Text>
                        </TouchableHighlight>
                    </View>

                    <Text type="title3" style={styles.textT2}>Aulas</Text>
                    <Text style={styles.titleRed}>Pathway - American Icon</Text>

                    <ActivityIndicator/>

                    <Text  type="title3" style={styles.textT2}>Aulas restantes</Text>
                    <Text  style={styles.titleRed}>Pathway - American Icon</Text>

                    <ActivityIndicator/>  
                    </Container>    
            </View>
        );
        

      }else {
        return (
            //rightAction={{ icon: "sign-out", onPress }}
            <View style={styles.container}>

                
                    <NavigationBar type="transparent" title={"Perfil"}  {...{navigation}} />
                    
                    
                    
                        <Container>
                        <Avatar uri={me.picture} size={90} style={styles.avatar} />
                        <Text  type="title3" style={styles.text}>{me.name}</Text>
                        <Text  style={styles.subtext}>25 lições feitas</Text>

                        <TextField
                            placeholder="Nome"
                            placeholderTextColor="#fff"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            onChangeText={this.setFirstName}
                            onSubmitEditing={this.goToLastName}
                            style={styles.textField}
                        />
                        <TextField
                            placeholder="Email"
                            placeholderTextColor="#fff"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            onChangeText={this.setFirstName}
                            onSubmitEditing={this.goToLastName}
                            style={styles.textField}
                        />

                            <Text  style={styles.titleRed}>Plano</Text>
                            <View style={styles.planContainer}>
                                <Text  style={styles.subtextPlan}>Básico</Text>
                                <TouchableHighlight style={styles.btnUpgrade}>
                                    <Text  style={styles.subtext}>Upgrade plano</Text>
                                </TouchableHighlight>
                            </View>

                            <Text  type="title3" style={styles.textT2}>Aulas</Text>
                            <Text  style={styles.titleRed}>Pathway - American Icon</Text>

                            <FlatList
                                data={formatData(this.state.data, numColumns)}
                                style={styles.containerFlat}
                                renderItem={this.renderItem}
                                numColumns={numColumns}
                            />

                            <Text  type="title3" style={styles.textT2}>Aulas restantes</Text>
                            <Text  style={styles.titleRed}>Pathway - American Icon</Text>

                            <FlatList
                                data={formatData(this.state.data, numColumns)}
                                style={styles.containerFlat}
                                renderItem={this.renderItem}
                                numColumns={numColumns}
                            />    
                            </Container>    
                    </View>

            
        );
      }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: StyleGuide.palette.backgray,
    },
    avatar: {
        borderRadius: 45,
        borderWidth: 3,
        borderColor: StyleGuide.palette.white,
        marginVertical: StyleGuide.spacing.tiny
    },
    textField: {
        backgroundColor: "rgba(255,255,255, 0.0)",
        height: 45,
        marginBottom: 10,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#d6d7da',
        paddingLeft: 20
    },
    planContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btnUpgrade:{
        borderRadius:20,
        width: 160,        
        backgroundColor:'#ff4d4d'
    },
    textT2: {
        color:StyleGuide.palette.red,
        marginTop:25,
        fontSize:20,
        marginBottom: StyleGuide.spacing.tiny
    },
    text: {
        color:StyleGuide.palette.red,
        textAlign: "center",
        marginBottom: StyleGuide.spacing.tiny
    },
    textField: {
        backgroundColor: "rgba(255,255,255, 0.0)",
        height: 45,
        marginBottom: 10,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#d6d7da',
        paddingLeft: 20
    },
    subtext: {
        color:StyleGuide.palette.white,
        textAlign: "center",
        fontSize: 13,
        marginBottom: StyleGuide.spacing.tiny
    },
    subtextPlan: {
        color:StyleGuide.palette.white,
        //textAlign: "center",
        fontSize: 13,
        marginBottom: StyleGuide.spacing.tiny
    },

    titleRed: {
        color:StyleGuide.palette.red,
        //textAlign: "center",
        fontSize: 13,
        marginBottom: StyleGuide.spacing.tiny
    },
    content: {
        paddingBottom: StyleGuide.spacing.small + 64
    },
    row: {
        flexDirection: "row",
        marginTop: StyleGuide.spacing.small,
        marginRight: StyleGuide.spacing.small
    },
    item: {
        backgroundColor: 'white',
        //alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        flex: 1,
        margin: 5,
        height: Dimensions.get('window').width / 2 - 50, // approximate a square
      },
      itemInvisible: {
        backgroundColor: 'transparent',
      },
      itemTitleText: {
        fontWeight: 'bold',
        color: '#ff4d4d',
        marginLeft: 7,
        marginBottom: 5
      },
      itemText: {
        color: '#808080',
        fontSize:12,
        marginLeft: 7
      },
      containerFlat: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20,
      },
});

export default withPlayer(Profile);
