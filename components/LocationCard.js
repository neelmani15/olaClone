import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function LocationCard({name,size,color,address,subaddress,distance,onPress}) {
  return (
    <TouchableOpacity style={styles.conatiner} onPress={onPress} >
        <View style={styles.innerContainer1}>
            <MaterialIcons name={name} size={size} color={color} />
            <Text style={styles.distanceText}>{distance}</Text>
        </View>
        <View style={styles.innerContainer2}>
            <Text style={styles.addressText}>{address}</Text>
            <Text style={styles.subaddressText}>{subaddress}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flexDirection:'row',
        paddingVertical:12,
        paddingHorizontal:4,
        backgroundColor:'#eeefef',
        borderRadius:10
    },
    innerContainer1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    innerContainer2:{
        flex:5
    },
    distanceText:{
        color:'gray'
    },
    addressText:{
        fontSize:15,
        fontWeight:'bold'
    },
    subaddressText:{
        fontSize:13
    }
})