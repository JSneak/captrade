import * as React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global'
import { Ionicons, MaterialCommunityIcons   } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {

    const navigation = useNavigation();


    return(
        <View style={globalStyles.container}>
            <View style={styles.top}>
                <Image source={require('../assets/homeImage.png')} />
                <Text>Welcome to CapTrade!</Text>
                <Text>Get started message</Text>
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
    }
})

