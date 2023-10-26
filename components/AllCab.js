import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import ListCab from './ListCab'

export default function AllCab() {
  return (
    <ScrollView>
      <Text style={styles.headingText}>Recommended for you</Text>
      <View style={styles.listcard}>
        <ListCab 
            image={require('../Image/Cab.jpg')} 
                duration="7 min" 
                title="Prime Plus" 
                details="Higher than usual demand"
                fare="₹215" 
        />
      </View>
      <ListCab 
        image={require('../Image/Cab.jpg')} 
        duration="1 min" 
        title="Book Any" 
        details="Get nearest Mini or Prime"
        fare="₹195" 
      />
      <ListCab 
        image={require('../Image/Cab.jpg')} 
        duration="2 min" 
        title="Prime Sedan" 
        details="Spacious Sedans, top drivers"
        fare="₹200" 
      />
      <Text style={styles.headingText}>More available rides</Text>
      <ListCab 
        image={require('../Image/Cab.jpg')} 
        duration="4 min" 
        title="Prime SUV" 
        details="Spacious SUV"
        fare="₹247" 
      />
      <ListCab 
        image={require('../Image/Cab.jpg')} 
        duration="1 min" 
        title="Mini" 
        details="Comfy, economical cars"
        fare="₹126" 
      />
      <ListCab 
        image={require('../Image/auto.jpg')} 
        duration="2 min" 
        title="Auto" 
        details="Get auto at your doorstep"
        fare="₹124" 
      />
      <ListCab 
        image={require('../Image/bike.jpg')} 
        duration="1 min" 
        title="Bike" 
        details="Beat the traffic on the bike."
        fare="₹101" 
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontWeight:'500',
        marginLeft:10,
        marginVertical:4
    },
    listcard:{
        backgroundColor:'#eeeeee',
        padding:10,
        marginHorizontal:6,
        elevation:8,
        borderRadius:12
    }
})