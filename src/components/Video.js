// @flow
import * as React from "react";
import { FlatList, StyleSheet, Text, View, Animated, Dimensions, ScrollView } from "react-native";

import NavigationBar from "./NavigationBar";
//import Text from "./Text";
import { withTheme, StyleGuide, type StyleProps, type ThemeProps } from "./theme";
import type { NavigationProps } from "./Navigation";
import type { Action } from "./Model";

import SegmentedControl from "./SegmentedControl";


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
        url: string
    };
    
    
class FeedLibrary<T: Item> extends React.Component<FeedLibraryProps<T>, FeedLibraryState> {

    state = {
        selectedIndex: 1,
        scrollAnimation: new Animated.Value(0),
        isLoading: true,
        dataSource: null,
        url: 'http://apiapp.soulphia.com/api/pathways/method'
    };

    componentDidMount () {
        
        console.log(this.state.url);

        return fetch(this.state.url)
            .then( (response) => response.json() )
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });
                console.log(this.state.dataSource);
            })

            .catch( (error) => {
                console.log(error)
            });

            
    }

    onChange = (selectedIndex: number) => this.setState({selectedIndex});
    
    renderItem = (item: {item: T }): React.Node => {
        const {renderItem} = this.props;
        return renderItem(item.item);
    }

    render(): React.Node {
        const {renderItem} = this;
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
        

        return (
            <View style={styles.flex}>

            
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollFlex}>

                <Text style={styles.text}>Recomendado</Text>
                
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
