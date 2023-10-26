import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Ad_Image({img}) {
  return (
    <View style={styles.imgContainer}>
      <Image style={styles.image} source={img} />
    </View>
  )
}

const styles = StyleSheet.create({
    imgContainer:{
        marginVertical:8,
        marginHorizontal:10,
        height:250,
    },
    image:{
        height:'100%',
        width:'100%',
        borderRadius:12
    }
})