import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function RouteDetail() {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <FontAwesome name='circle' size={12} color='green' style={styles.icon}/>
            <View style={styles.verticalLine}></View>
            <FontAwesome name='circle' size={12} color='red' style={styles.icon}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textroute}>Your Location</Text>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.textroute}>Ameerpet, Hyderabad Telangana India</Text>
        </View>
        <View style={styles.timerContainer}>
            <Feather name="clock" size={24} color="black" />
            <Text>Now</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fffeee',
        elevation:8,
        borderRadius:8,
        flexDirection:'row'

    },
    innerContainer:{
        // alignItems:'flex-start',
        padding:8,
        margin:4
    },
    icon:{
        marginHorizontal:1
    },
    verticalLine:{
        width:2,
        height:35,
        backgroundColor:'#a3a3a3',
        marginLeft:5,
        marginVertical:4
    }, 
    textroute:{
        fontSize:16,
        // paddingLeft:20
        marginVertical:5
    },
    horizontalLine:{
        borderWidth:0.6,
        borderColor:'#a3a3a3'
    },
    textContainer:{
        paddingVertical:5,
        paddingHorizontal:10,
        marginVertical:6
    },
    timerContainer:{
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        elevation:8,
        padding:4,
        marginVertical:18
    }
})