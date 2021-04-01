import * as React from 'react';
import { Text, View, Image, StyleSheet, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global'
import { Ionicons, MaterialCommunityIcons   } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {

    const navigation = useNavigation();

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return(
        <View style={globalStyles.container}>
            {/* Rework this so it's a flatlist in a flatlist 
            https://stackoverflow.com/questions/61609765/can-i-use-flatlist-in-flatlist-react-native*/}
            <View style={styles.top}>
                <Image source={require('../assets/homeImage.png')} />
                <Text>Welcome to CapTrade!</Text>
                <Text>Get started message</Text>
            </View>
            <View style={styles.section}>
                <Text>Watchlist</Text>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.section}>
                <Text>Connect</Text>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.section}>
                <Text>Top movers</Text>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

