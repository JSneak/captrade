import * as React from 'react';
import { Text, View, Image, StyleSheet, TextInput, SectionList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global'

import EmptyWatchlist from '../components/emptyWatchlist'

const Home = () => {

    const navigation = useNavigation();


    const DATA = [
        {
            title: "Header",
            data: []
        },
        {
          title: "Watchlist",
          data: ['empty']
        },
        {
          title: "Connect",
          data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
        {
          title: "Top movers",
          data: ["Water", "Coke", "Beer"]
        },
        {
          title: "Rewards",
          data: ["Cheese Cake", "Ice Cream","1","2","3","4","5","6","7","8","9","10","11","12","13"]
        },
      ];

    const componentPicker = (title) => {
        switch (title) {
            case 'Header':
            return (
                <View style={styles.top}>
                    <Image source={require('../assets/homeImage.png')} />
                    <Text style={styles.header}>Welcome to CapTrade!</Text>
                    <Text>Get started message</Text>
                </View>
            )
            default:
            return (
                <View style={styles.sectionHeader}>
                    <Text style={styles.header}>{title}</Text>
                </View>
            )
        }
    }

    const listParser = (item) => {
        console.log("item" + item);
        switch (item) {
            case 'empty':
            return (
                <EmptyWatchlist />
            )
            default:
            return (
                <Item title={item} />
            )
        }
    }




    Item = ({ title }) => (
        <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        </View>
    );

    return(
        <SafeAreaView style={globalStyles.container} >
                {/* Rework this so it's a section list
                https://reactnative.dev/docs/sectionlist*/}
            <SectionList
                style={styles.sectionList}
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) =>listParser(item)}
                renderSectionHeader={({ section: { title } }) => componentPicker(title)}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    top: {
        paddingTop: 60,
        paddingBottom: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F7F7',
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionHeader: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 15
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold'
        // backgroundColor: "#fff"
    },
    sectionList: {
        backgroundColor: '#F7F7F7'
    }
})

