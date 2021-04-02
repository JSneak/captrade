import * as React from 'react';
import { Text, View, Image, StyleSheet, TextInput, SectionList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global'

import EmptyWatchlist from '../components/emptyWatchlist'
import EmptyConnect from '../components/emptyConnect'

const Home = () => {

    const navigation = useNavigation();


    const DATA = [
        {
            title: "Header",
            empty: true,
            data: ['']
        },
        {
          title: "Watchlist",
          empty: true,
          data: ['']
        },
        {
          title: "Connect",
          empty: true,
          data: ['']
        },
        {
          title: "Top movers",
          empty: false,
          data: ["Water", "Coke", "Beer"]
        },
        {
          title: "Rewards",
          empty: false,
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

    const listParser = (item, title, empty) => {
        console.log("item: " + item);
        console.log("title: " + title);
        console.log("Empty: " + empty);
        console.log("------------")

        if(empty === true) {
            switch (title) {
                case 'Watchlist':
                return (
                    <EmptyWatchlist />
                )
                case 'Connect':
                return (
                    <EmptyConnect />
                )
                default:
                return (
                    <Item title={item} />
                )
            }
        }

        switch (title) {
            case 'Watchlist':
            return (
                <Item title={item} />
            )
            case 'Connect':
            return (
                <Item title={item} />
            )
            case 'Top Movers':
            return (
                <Item title={item} />
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
                renderItem={({item, section: { title, empty}}) =>listParser(item, title, empty)}
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

