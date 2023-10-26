import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ShareCode() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer1}>
            <Text style={styles.firstText}>Invite your friends to try Ola.</Text>
            <View style={styles.code}>
                <Text style={styles.codeText}>GR4D45</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Invite')}>
                <Text style={styles.shareText}>Share invite code</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.innerContainer2}>
            <Image style={styles.img} source={require('../Image/hifi.jpeg')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'space-between',
        elevation:8,
        paddingVertical:20,
        paddingHorizontal:14
    },
    innerContainer1:{
        flex:4
    },
    innerContainer2:{
        flex:2,
        width:120,
        height:140
    },
    img:{
        height:'100%',
        width:'100%'
    },
    firstText:{
        fontSize:20
    },
    code:{
        backgroundColor:'#dddddd',
        width:75,
        paddingVertical:4,
        paddingHorizontal:6,
        borderRadius:6,
        marginVertical:10,
        marginHorizontal:4
    },
    codeText:{
        fontSize:16,
    },
    shareText:{
        fontSize:16,
        color:'#006AD9'
    }
})