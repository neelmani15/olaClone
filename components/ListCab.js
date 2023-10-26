import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ListCab({image,duration,title,details,fare}) {
  return (
    <View style={styles.conatainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.img} />
        <Text style={styles.duration}>{duration}</Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
      <View style={styles.fairContainer}>
        <Text style={styles.fare}>{fare}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    conatainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:4,
        margin:8
    },
    imageContainer:{
        padding:4,
        height:40,
        width:40
    },
    img:{
        borderRadius:6,
        height:"100%",
        width:"100%"
    },
    duration:{
        fontSize:12
    },
    descContainer:{
        // paddingHorizontal:20,
        paddingRight:90,
        paddingVertical:6
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    details:{
        fontSize:12,
        color:'#777777'
    },
    fairContainer:{
        paddingVertical:8,
        paddingRight:10
        // paddingHorizontal:80
    },
    fare:{
        fontSize:16,
        fontWeight:'500'
    }
})