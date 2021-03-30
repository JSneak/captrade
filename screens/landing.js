import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global'

const Landing = () => {

    const navigation = useNavigation();

    return(
        <View style={globalStyles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/LoginHeader.png')} />
            </View>
            <View style={styles.center}>
                <Image source={require('../assets/Logo.png')} />
                <Text style={styles.text}>Create a free account</Text>
                <TouchableOpacity
                    style={styles.btnBlue}
                    activeOpacity={.5}
                    onPress={() => navigation.push('Sign Up')}
                >
                    <Text style={styles.btnTextCreate}> Create an account </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnGray}
                    activeOpacity={.5}
                    onPress={() => navigation.push('Login')}
                >
                    <Text style={styles.btnTextLogin}> Login </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Image source={require('../assets/LoginFooter.png')} />
            </View>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    text: {
        marginBottom: 50,
        marginTop: 50,
        fontSize: 24,
    },
    btnTextLogin: {
        color: '#2972FF',
        textAlign:'center',
        fontSize: 18,
        fontWeight: "500",
    },  
    btnTextCreate: {
        color: '#FFF',
        textAlign:'center',
        fontSize: 18,
        fontWeight: "500",
    },  
    btnGray: {
        elevation: 8,
        marginTop:10,
        backgroundColor: '#E9F0FF',
        borderRadius: 25,
        width:250,
        height: 70,
        justifyContent: 'center',
    },
    btnBlue: {
        elevation: 8,
        marginTop:10,
        backgroundColor: '#2972FF',
        borderRadius: 25,
        width:250,
        height: 70,
        justifyContent: 'center',
        marginBottom: 5,
    }
})