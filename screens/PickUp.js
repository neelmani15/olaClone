import { StyleSheet, Text, View ,TouchableOpacity, TextInput} from 'react-native'
import React,{useState} from 'react'
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import LocationCard from '../components/LocationCard';
import StackUI from '../components/StackUI';

export default function PickUp() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const clearSearchText=()=>{
        setSearchText('');
    }
    
  return (
    <View style={styles.container}>
      <StackUI heading="Pick-up" />
      <View style={styles.searchBar}>
        <FontAwesome name='circle' size={18} color='green' style={styles.icon}/>
        <Ionicons name='play' size={16} color='green' style={styles.icon} />
        <TextInput 
            style={styles.input}
            placeholder='Search for an address or landmark'
            placeholderTextColor='gray'
            value={searchText}
            onChangeText={(text)=>setSearchText(text)}
        />
        {searchText.length > 0 && (
            <TouchableOpacity onPress={clearSearchText} style={{marginLeft:10}}>
                <Entypo name="cross" size={20} color="black" />
            </TouchableOpacity>
        )}
      </View>
      <LocationCard 
            name="location-pin" 
            size={18} 
            color="black" 
            distance="300m" 
            address="Riktam Technology Consulting Pvt. Ltd." 
            subaddress="Pratap Nagar Nagaarjuna Nagar Colony Yella Re..."
            onPress={()=>navigation.navigate('Home')}
      />
      <LocationCard 
            name="location-pin" 
            size={18} 
            color="black" 
            distance="810m" 
            address="Ameerpet Metro Station" 
            subaddress="Ameerpet Road near to Mythrivanam Ameerpet..."
            onPress={()=>navigation.navigate('Home')}
      />
      <View style={styles.location}>
        <View style={styles.locationdetails}>
            <TouchableOpacity style={styles.button3}>
                <MaterialIcons name="my-location" size={24} color="black" />
                <Text style={styles.locationText}>Current Location</Text>
            </TouchableOpacity>
            <View style={styles.verticalLine}></View>
            <TouchableOpacity style={styles.button3}>
                <MaterialIcons name="location-pin" size={24} color="black" />
                <Text style={styles.locationText}>Locate on Map</Text>
            </TouchableOpacity>
        </View>
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        // justifyContent:'center'
        
    },
    searchBar:{
        flexDirection:'row',
        alignItems:'center',
        margin:6,
        borderRadius:12,
        backgroundColor:'#eeeeed',
        paddingHorizontal:14,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.3,
        shadowRadius:2,
        elevation:10,
        paddingVertical:8,
        // marginBottom:520,
    },
    icon:{
        marginHorizontal:2
    },
    input:{
        flex:1,
        fontSize:16,
        color:'black'
    },
    location:{
        flex:1,
        justifyContent:'flex-end'
    },
    locationdetails:{
        justifyContent:'center',
        // marginTop:450,
        padding:6,
        flexDirection:'row',
        backgroundColor:'#e7e7e7',
        borderRadius:8
    },
    button3:{
        flexDirection:'row',
        alignItems:'center',
        padding:6
    },
    verticalLine:{
        borderWidth:0.9,
        borderColor:'#c3c3c3',
        margin:3
    },
    locationText:{
        paddingHorizontal:6,
    }
})