import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function Icon({name,size,color}) {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name={name} size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#efeeef',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:50,
        borderRadius:25
    },
    icon:{
        padding:10
    }
})