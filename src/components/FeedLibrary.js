// @flow
import * as React from "react";
import { FlatList, StyleSheet, Text, View, Animated, Dimensions, ScrollView,ActivityIndicator } from "react-native";

import NavigationBar from "./NavigationBar";
//import Text from "./Text";
import { withTheme, StyleGuide, type StyleProps, type ThemeProps } from "./theme";
import type { NavigationProps } from "./Navigation";
import type { Action } from "./Model";
import type {Album as AlbumModel} from "./components/music/Model";


const { height } = Dimensions.get("window");
const keyExtractor = <T: Item>(item: T): string => item.id;

type Item = {
        id: string
};

type FeedLibraryProps<T> = ThemeProps & StyleProps & NavigationProps<*> & {
        data: T[],
        renderItem: T => React.Node,
        title: string,
        header?: React.Node,
        back?: string,
        rightAction?: Action,
        numColumns?: number,
        inverted?: boolean
    };
    
    
type FeedLibraryState = {
        scrollAnimation: Animated.Value,
        selectedIndex: number,
        isLoading: boolean,
        dataSource: object,
        mudar: boolean
    };
    
    
class FeedLibrary<T: Item> extends React.Component<FeedLibraryProps<T>, FeedLibraryState> {

    state = {
        selectedIndex: 1,
        scrollAnimation: new Animated.Value(0),
        isLoading: false,
        dataSource: null,
        background: "#fff",
        mudar: false
    };
    
    renderItem = (item: {item: T }): React.Node => {
        const {renderItem} = this.props;
        console.log("adicionando item a lista");
        return renderItem(item.item);

    }

    render(): React.Node {
        const renderItem = this.renderItem;
        const {data, title, navigation, theme, back, rightAction, header, numColumns, style, inverted} = this.props;
        const {scrollAnimation} = this.state;
        const translateY = scrollAnimation.interpolate({
            inputRange: [55, 56, 57],
            outputRange: [55, 0, 0]
        });

        const backgroundScroll = scrollAnimation.interpolate({
            inputRange: [0, height],
            outputRange: [0, -height],
            extrapolate: "clamp"
        });

        const onScroll = Animated.event(
                [{
                    nativeEvent: {
                    contentOffset: {
                    y: scrollAnimation
                }
            }
        }],
                {useNativeDriver: true }
        );

        const titleStyle = back ? {} : {};
        const top = theme.palette.primary;
        const bottom = theme.palette.lightGray;
        const selectedIndex = this.state.selectedIndex;

        
        
                
                return (
                    <View style={styles.flex}>
                        <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={styles.scrollFlex}>
        
                        <Text style={styles.text}>Recomendado Pathway</Text>
                        
                        <AnimatedFlatList
                            horizontal={true}
                            contentContainerStyle={[styles.container, style]}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={1}
                            {...{ data, keyExtractor, renderItem, onScroll, numColumns, inverted }}
                        />
        
        
                        <Text style={styles.text}>Minnha Lista</Text>
        
                        <AnimatedFlatList
                            horizontal={true}
                            contentContainerStyle={[styles.container, style]}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={1}
                            {...{ data, keyExtractor, renderItem, onScroll, numColumns, inverted }}
                        />
        
        
        
                        <Text style={styles.text}>Próxima Sessão</Text>
        
                        <AnimatedFlatList
                            horizontal={true}
                            contentContainerStyle={[styles.container, style]}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={1}
                            {...{ data, keyExtractor, renderItem, onScroll, numColumns, inverted }}
                        />
        
                    </ScrollView>
                    </View>
                    
                
                );
            

            
        
    }
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: StyleGuide.palette.white 
    },
    scrollFlex:{
            flex: 1,
    },
    text:{
            fontWeight: "bold",
        marginTop:10,
        marginLeft:10,
    },
    container: {
            flexGrow: 1,
        //</T>paddingBottom: StyleGuide.spacing.small,
    backgroundColor: StyleGuide.palette.white
},
    header: {
        padding: StyleGuide.spacing.small
},
    headerText: {
        color: StyleGuide.palette.red
},
    extraHeader: {
        backgroundColor: StyleGuide.palette.red,
    ...StyleGuide.styles.shadow
},
    columnWrapperStyle: {
        marginRight: StyleGuide.spacing.small,
    marginTop: StyleGuide.spacing.small
}
});

export default withTheme(FeedLibrary);
