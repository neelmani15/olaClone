import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function () {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Ionicons name='search' size={24} color='green' />
            <TextInput
                placeholder='Search Destination' 
                style={styles.destinationText}
                onPressIn={()=>navigation.navigate('Destination')}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ddddde',
        marginTop:0,
        marginLeft:8,
        marginRight:8,
        borderRadius:10,
    },
    innerContainer:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
    },
    destinationText:{
        fontSize:20,
        fontWeight:'400',
        marginLeft:10
    }
})