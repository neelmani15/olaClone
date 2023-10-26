import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import PaymentCard from '../components/PaymentCard';

export default function Payments() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.navigate('Home')}>
          <Ionicons name='arrow-back' size={24} color='black'/>
      </TouchableOpacity>
      <Text style={styles.heading}>Payment</Text>
      <PaymentCard img={require('../Image/olawallet.png')} title="Ola Money Wallet" style={{marginLeft:30}} />
      <PaymentCard img={require('../Image/cash.jpg')} title="Cash" style={{marginLeft:135}} />
      <Text style={styles.subheading}>Add Payment Methods</Text>
      <PaymentCard img={require('../Image/phonepe.png')} title="Add PhonePe Wallet" />
      <PaymentCard img={require('../Image/amazonPay.jpg')} title="Add Amazon Pay" style={{marginLeft:30}} />
      <PaymentCard img={require('../Image/paytm.png')} title="Add Paytm Wallet" style={{marginLeft:30}} />
      <PaymentCard img={require('../Image/upi.png')} title="Pay by any UPI app" style={{marginLeft:20}} />
      <PaymentCard img={require('../Image/card.png')} title="Add a Debit Card" style={{marginLeft:40}} />
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
  subheading:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:10,
    marginVertical:4
  },
})