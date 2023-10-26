import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native';
import Icon from '../components/Icon';
import { useNavigation } from '@react-navigation/native';
import RouteDetail from '../components/RouteDetail';
import ButtonDetail from '../components/ButtonDetail';
import AllCab from '../components/AllCab';
import ListCab from '../components/ListCab';

export default function DetailScreen() {
    const navigation=useNavigation();
    const [zoom,setZoom]=useState(false);
    const togglezoomInOutButton = ()=>{
        setZoom(!zoom);
    }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Image/Map2.jpeg')}
        resizeMode='cover'
        style={[styles.mapStyle,zoom ? {height:460}:{height:230}]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.iconButton1,zoom?{paddingBottom:300}:{paddingBottom:80}]}>
            <Icon name='arrow-back' size={24} color='black'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglezoomInOutButton} style={[styles.iconButton2]}>
            {zoom ?<Icon style={styles.icon} name="expand" size={24} color="black" /> :<Icon style={styles.icon} name="contract" size={24} color="black" />}
        </TouchableOpacity>
      </ImageBackground>
      <RouteDetail/>
      {zoom?(
        <View>
              <View style={styles.listcard}>
                <ListCab 
                    image={require('../Image/Cab.jpg')} 
                    duration="7 min" 
                    title="Prime Plus" 
                    details="Higher than usual demand"
                    fare="₹215" 
                />
            </View>
            <ButtonDetail />
            </View>
      ):(
        <>
            <AllCab />
            <ButtonDetail />
        </>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    mapStyle:{
        // height:460,
        width:'100%',
        resizeMode:'cover',
        justifyContent:'flex-end'
    },
    icon:{
        padding:100,
    },
    iconButton1:{
        // paddingTop:30,
        paddingLeft:20,
    },
    iconButton2:{
        paddingLeft:300,
        paddingBottom:15
    },
    listcard:{
        flexDirection:'row',
        backgroundColor:'#eeeeee',
        padding:10,
        marginHorizontal:6,
        marginVertical:4,
        elevation:8,
        borderRadius:12,
    },
})