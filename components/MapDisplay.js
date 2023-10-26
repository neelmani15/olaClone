import { StyleSheet, TextInput, View,Image, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation } from '@react-navigation/native';

export default function MapDisplay() {
    const navigation=useNavigation();
  return (
    <ImageBackground 
        source={require('../Image/Map.jpeg')}
        resizeMode='cover'
        style={styles.mapStyle}
    >
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Ionicons name="menu" color={'#5e5c5c'} size={26} />
            </TouchableOpacity>
            <View style={styles.dot} />
            <TextInput
                style={styles.input}
                placeholder='Your Current Location'
                placeholderTextColor="black"
                onPressIn={()=>navigation.navigate('PickUp')}
            />
            </View>
            <FontAwesome name="heart-o" size={20} color="black" style={styles.heartIcon} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    mapStyle:{
        height:400,
        width:'100%',
        flex:1,
        resizeMode:'cover',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        margin: 10,
        marginTop: 45,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
      },
      dot: {
        width: 10,
        height: 10,
        backgroundColor: 'green', // Green dot
        borderRadius: 5, // Make it a circle
        marginRight: 10,
        marginLeft: 10,
      },
      input: {
        flex: 1,
        color: 'black',
      },
      heartIcon: {
        marginLeft: 8,
        fontWeight: 'bold', // Bold icon
      },
      customImageStyle: {
        height: 325,
        width: 380,
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        // justifyContent: 'center',
        margin: 0,
        padding: 0,
      },
      full: {
        flex: 1,
        flexDirection: 'column',
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})