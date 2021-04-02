import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons   } from '@expo/vector-icons';

const EmptyConnect = () => {

    const navigation = useNavigation();

    const addConnections = () => {
        console.log("Connect Wallet")
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={.5}
                onPress={() => addConnections}
            >
                <View style={styles.content}>
                    <MaterialCommunityIcons  style={styles.icon} name="email-outline" size={30} color="black" />
                    <Text style={styles.text}> Connect existing wallet </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default EmptyConnect

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: Dimensions.get('window').width - 100,
        marginLeft: 15,
        paddingTop: 20,
        paddingBottom: 15,
        elevation: 8,
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500",
    },
    container: {
        flex:1,
        marginTop: 15,
        marginBottom: 40
    },
    content: {
        flexDirection: 'row',
        paddingLeft: 15,
    }
})