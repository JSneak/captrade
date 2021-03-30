import * as React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global'

const Temp = () => {

    const navigation = useNavigation();

    return(
        <View style={globalStyles.container}>
            <Text>Temporary Screen</Text>
        </View>
    )
}

export default Temp