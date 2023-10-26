import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ButtonDetail({style}) {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <View style={styles.locationdetails}>
            <View style={styles.button3}>
                <Ionicons name="cash" size={24} color="black" />
                <Text style={styles.locationText}>Cash</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={styles.button3}>
                <AntDesign name="tag" size={24} color="black" />
                <Text style={styles.locationText}>2 Coupons</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={styles.button3}>
                <Ionicons name="person" size={24} color="black" />
                <Text style={styles.locationText}>Myself</Text>
            </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Confirm')}>
              <Text style={styles.buttonText}>Book Prime Plus</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:'flex-end',
        backgroundColor:'#eeeeee',
        elevation:10
    },
    location:{
        // flex:1,
        justifyContent:'flex-end'
    },
    locationdetails:{
        justifyContent:'center',
        // marginTop:450,
        // padding:6,
        flexDirection:'row',
        // backgroundColor:'#e7e7e7',
        borderRadius:8
    },
    button3:{
        flexDirection:'row',
        alignItems:'center',
        padding:4
    },
    verticalLine:{
        borderWidth:0.9,
        borderColor:'#c3c3c3',
        margin:10
    },
    locationText:{
        paddingHorizontal:6,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20
    },
    button:{
        flex:1,
        backgroundColor:'black',
        borderRadius:10,
        alignItems:'center',
        // padding:4,
        marginHorizontal:8
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        paddingVertical:10,
        fontSize: 16,
    },
})