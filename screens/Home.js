import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MapDisplay from '../components/MapDisplay'
import Destination from '../components/Destination'
import Card from '../components/Card'
import ShareCode from '../components/ShareCode'
import Ad_Image from '../components/Ad_Image'

export default function Home({route}) {
  return (
    <ScrollView>
        <MapDisplay />
        {/* <StartLocation lat={route?.params?.lat||''} lng={route?.params?.lng||''} address= {route?.params?.address||''}/> */}
        <Destination />
        <Ad_Image img={require('../Image/ad1.jpeg')}/>
        <Ad_Image img={require('../Image/ad2.jpeg')}/>
        <Card 
          header="We're giving you a 15% discount" 
          desc="Enjoy up to Rs 40 off on your next Ola ride. Valid only for 2KM+ rides. Book now."
          uri={require('../Image/Car.jpg')}
          ></Card>
        <Card 
          header="Bags packed, and ready to go?" 
          desc="Let us take you to the airport!
                Book an Ola now and get 10% off up to Rs. 100"
          uri={require('../Image/flight.jpg')}
          ></Card>
          <ShareCode></ShareCode>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})