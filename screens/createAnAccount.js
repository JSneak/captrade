import * as React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global'
import { Ionicons, MaterialCommunityIcons   } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateAnAccount = ({ route }) => {

    const navigation = useNavigation();
    const [name, onChangeName] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);

    const handleOnClick = () => {
        route.params.setIsSignedIn(true);
    }

    return(
        <View style={globalStyles.container}>
            <View style={styles.top}>
                <Image style={styles.logo} source={require('../assets/TextLogo.png')} />
            </View>
            <View style={styles.center}>
                <View style={styles.formContainer}>
                    <View style={styles.formRow} >
                        <Ionicons style={styles.icon} name="person-outline" size={40} color="black" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeName}
                            value={name}
                            placeholder="Name"
                        />
                    </View>
                    <View style={styles.formRow} >
                    <Ionicons style={styles.icon} name="lock-closed-outline" size={40} color="black" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="E-Mail"
                        />
                    </View>
                    <View style={styles.formRow} >
                        <MaterialCommunityIcons  style={styles.icon} name="email-outline" size={40} color="black" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Password"
                        />
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.formContainer}>
                    <View style={styles.otherRow}>
                        <TouchableOpacity
                            style={styles.btnBlue}
                            activeOpacity={.5}
                            onPress={() => handleOnClick()}
                        >
                            <Text style={styles.btnTextCreate}> Create an account </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.otherRow}>
                        <Text> By creating an account, you agree to our </Text>
                        <TouchableOpacity>
                            <Text style={styles.clickableText}> Terms and Conditions </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CreateAnAccount

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
    bottom: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    formContainer: {
        flexDirection: 'column',
    },
    formRow: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row'
    }, 
    input: {
        height: 36,
        borderBottomWidth: 1,
        fontSize: 20,
        width: 300,
    },
    icon: {
        height: 36,
        marginRight: 10
    },
    logo: {
        marginTop: 40,
    },
    otherRow: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clickableText: {
        color: '#2972FF'
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
    },
    btnTextCreate: {
        color: '#FFF',
        textAlign:'center',
        fontSize: 18,
        fontWeight: "500",
    },  
})

