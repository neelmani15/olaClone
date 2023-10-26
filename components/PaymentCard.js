import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function PaymentCard({img,title,style}) {
  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image source={img} style={styles.img} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <AntDesign style={[styles.icon,style]} name="right" size={24} color="black" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        // justifyContent:'flex-end'
    },
    imgContainer:{
        height:60,
        width:60,
        margin:10
    },
    img:{
        height:'100%',
        width:'100%',
        borderRadius:30
    },
    textContainer:{
        flexDirection:'row',
        marginHorizontal:10,
        paddingBottom:10,
        marginBottom:5,
        alignItems:'center',
        // justifyContent:'flex-end'
    },
    title:{
        fontSize:20,
        marginRight:70
    },
    icon:{
        color:'#a3a3a3'
    },
    verticalLine:{
        borderWidth:1
    }
})