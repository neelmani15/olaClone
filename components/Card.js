import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function Card({header,desc,uri}) {
  return (
    <View style={styles.conatiner}>
        <View style={styles.innerConatiner1}>
            <Text style={styles.headerText}>{header}</Text>
            <Text style={styles.descText}>{desc}</Text>
        </View>
        <View style={styles.innerConatiner2}>
            <Image style={styles.img} source={uri} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        elevation:8,
        margin:8,
        paddingVertical:20,
        paddingHorizontal:14
    },
    innerConatiner1:{
        flex:3,
        marginRight:10
    },
    innerConatiner2:{
        flex:2,
        marginLeft:10
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:4
    },
    headerText:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:8
    },
    descText:{
        fontSize:12,
        color:'#696969'
    }
})