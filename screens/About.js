import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Foundation } from '@expo/vector-icons';
import AboutCard from '../components/AboutCard';

export default function About() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.navigate('Home')}>
          <Ionicons name='arrow-back' size={24} color='black'/>
      </TouchableOpacity>
      <Text style={styles.heading}>Redefining mobility for billions</Text>
      <Text style={styles.version}>Version 6.3.8</Text>
      <View style={styles.verticalLine}></View>
      <View style={styles.info}>
          <Foundation name="shield" size={50} color="black" />
          <View style={styles.information}>
            <Text style={styles.infoTitle}>Additional information</Text>
            <Text style={styles.infotext}>Privacy,terms and other information</Text>
          </View>
      </View>
      <AboutCard title="Terms of Service" />
      <View style={styles.verticalLine1}></View>
      <AboutCard title="Privacy Policy" style={{marginLeft:170}} />
    </View>
  )
}

const styles = StyleSheet.create({
  arrowBack:{
    paddingTop:35,
    paddingBottom:15,
    paddingHorizontal:15
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    marginLeft:10
  },
  version:{
    marginLeft:10,
    marginVertical:8
  },
  verticalLine:{
    borderWidth:0.5,
    borderColor:'#a3a3a3'
  },
  verticalLine1:{
    borderWidth:0.5,
    borderColor:'#a3a3a3',
    marginLeft:65
  },
  info:{
    marginVertical:8,
    marginHorizontal:14,
    flexDirection:'row',
    alignItems:'center'
  },
  information:{
    paddingHorizontal:25
  },
  infoTitle:{
    fontSize:16,
    fontWeight:'bold'
  },
  infotext:{
    color:'#444444'
  }
})