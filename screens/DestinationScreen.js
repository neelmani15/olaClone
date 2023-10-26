import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import StackUI from '../components/StackUI';
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LocationCard from '../components/LocationCard';
import { MaterialIcons } from '@expo/vector-icons';

export default function DestinationScreen() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const clearSearchText=()=>{
        setSearchText('');
    }

  return (
    <View style={styles.container}>
      <StackUI heading="Destination" />
      <View style={styles.searchBar}>
        <FontAwesome name='circle' size={12} color='green' style={styles.icon}/>
        <TextInput 
            style={styles.input1}
            value='Pickup location'
            onChangeText={(text)=>setSearchText(text)}
        />
        {searchText.length > 0 && (
            <TouchableOpacity onPress={clearSearchText} style={{marginLeft:10}}>
                <Entypo name="cross" size={20} color="black" />
            </TouchableOpacity>
        )}
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.searchBar}>
        <FontAwesome name='circle' size={18} color='red' style={styles.icon}/>
        <Ionicons name='play' size={16} color='red' style={styles.icon} />
        <TextInput 
            style={styles.input2}
            placeholder='Enter Destination'
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
            onPress={()=>navigation.navigate('Details')}
      />
      <LocationCard 
            name="location-pin" 
            size={18} 
            color="black" 
            distance="810m" 
            address="Ameerpet Metro Station" 
            subaddress="Ameerpet Road near to Mythrivanam Ameerpet..."
            onPress={()=>navigation.navigate('Details')}
      />
      <View style={styles.location}>
        <View style={styles.locationdetails}>
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
        backgroundColor:'white'
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
        marginHorizontal:1
    },
    input1:{
        flex:1,
        fontSize:16,
        color:'black',
        marginLeft:30
    },
    input2:{
        flex:1,
        fontSize:16,
        color:'black',
        marginLeft:10
    },
    verticalLine:{
        borderStartWidth:12,
    },
    horizontalLine:{
        borderWidth:1,
        borderColor:'#d5d5d5'
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
    locationText:{
        paddingHorizontal:6,
    }
})