import { StyleSheet, Text, View,Image, TextInput, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmScreen() {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={require('../Image/Map1.jpeg')} >
        <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.navigate('Home')}>
                <Ionicons name='arrow-back' size={24} color='black'/>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.innerContainer}>
        <View style={styles.firstContainer}>
            <View style={styles.pinContainer}>
                <Text style={styles.pinHeading}>PIN</Text>
                <Text style={styles.pinNumber}>2781</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={styles.timeConatiner}>
                <Text style={styles.timeStatus}>Arriving in</Text>
                <View style={styles.time}>
                    <Text style={styles.timeDuration}>10 min</Text>
                </View>
            </View>
        </View>
        <View style={styles.secondContainer}>
            <View style={styles.icon}>
                <Ionicons name="person-circle" size={50} color="#0D7CF1" />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>NagarrajuA</Text>
                <View style={styles.rating}>
                    <Text style={styles.ratingPoint}>3.2</Text>
                    <AntDesign name="star" size={24} color="#FAD255" />
                </View>
            </View>
            <View style={styles.model}>
                <View style={styles.modelNumber}>
                    <Text style={styles.modelText}>TS21tO425</Text>
                </View>
                <Text style={styles.modelName}>Tvs Zest</Text>
            </View>
        </View>
        <View style={styles.thirdContainer}>
            <View style={styles.inputContainer}>
                <MaterialIcons style={{marginRight:12}} name="message" size={24} color="#888888" />
                <TextInput value='' placeholder='Share a pickup notes with captain' />
            </View>
            <View style={styles.callIcon}>
                <Ionicons name="call" size={24} color="#666666" />
            </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.fourthContainer}>
            <Text style={styles.firstText}>Enjoying ride?</Text>
            <Text style={styles.secondText}>Add tip to caption</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    img:{
        height:500,
        width:'100%'
    },
    innerContainer:{
        flex:1,
        backgroundColor:'#eeeeee',
        padding:14,
        elevation:20
    },
    firstContainer:{
        flexDirection:'row',
        backgroundColor:'#D7F2FA',
        margin:10,
        borderRadius:6,
        paddingVertical:14,
        paddingHorizontal:8
    },
    pinContainer:{
        flexDirection:'row'
    },
    pinHeading:{
        fontSize:20,
        fontWeight:300,
        marginVertical:2,
        marginHorizontal:10,
        paddingLeft:20
    },
    pinNumber:{
        fontSize:24,
        marginRight:25
    },
    timeConatiner:{
        flexDirection:'row',
        marginHorizontal:4
    },
    timeStatus:{
        fontSize:18,
        paddingLeft:8,
        marginVertical:2,
        color:'#666666'
    },
    time:{
        backgroundColor:'green',
        paddingHorizontal:6,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:6,
        marginHorizontal:10
    },
    timeDuration:{
        color:'white',
    },
    verticalLine:{
        width:1,
        height:35,
        backgroundColor:'#a3a3a3',
        // marginLeft:5,
        // marginVertical:4
    },
    secondContainer:{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:12,
        justifyContent:'space-between'
    },
    rating:{
        flexDirection:'row'
    },
    icon:{
        marginHorizontal:6
    },
    headingContainer:{
        marginRight:100
    },
    headingText:{
        fontSize:16,
        fontWeight:'400',
        marginVertical:2
    },
    ratingPoint:{
        fontSize:16,
        marginRight:10
    },
    model:{
        paddingVertical:2,
        justifyContent:'flex-end'
    },
    modelNumber:{
        borderWidth:1,
        color:'#a3a3a3',
        borderRadius:4,
        paddingHorizontal:6,
        paddingVertical:4,
        margin:4
    },
    modelName:{
        textAlign:'right',
        marginRight:6
    },
    thirdContainer:{
        flexDirection:'row',
        paddingVertical:2,
        paddingLeft:20
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#a3a3a3',
        paddingVertical:4,
        paddingHorizontal:10,
        borderRadius:20
    },
    callIcon:{
        borderWidth:1,
        alignItems:'center',
        padding:8,
        borderRadius:21,
        marginHorizontal:10
    },
    horizontalLine:{
        borderWidth:0.5,
        margin:2,
        borderColor:'#a3a3a3'
    },
    fourthContainer:{
        flexDirection:'row'
    },
    firstText:{
        fontSize:16,
        fontWeight:'500'
    },
    secondText:{
        fontSize:16,
        marginLeft:8,
        color:'#228CFC'
    },
    arrowBack:{
        paddingVertical:35,
        paddingHorizontal:15
    }
})