import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function AboutCard({title,style}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <AntDesign style={[styles.icon,style]} name="right" size={18} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:70,
        marginVertical:20,
    },
    title:{
        fontSize:18,
        fontWeight:'400'
    },
    icon:{
        marginTop:5,
        color:'#888888',
        marginLeft:150
    },
})