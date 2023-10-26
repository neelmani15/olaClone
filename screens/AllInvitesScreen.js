import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ShareCodeButton from '../components/ShareCodeButton';




function AllInvitesScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" color={'black'} size={30} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={require('../Image/hifi2.jpeg')} style={styles.imageStyle} />
      </View>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginLeft: 20 }}>No Invites yet</Text>
      <Text style={{ fontSize: 14, paddingLeft: 20, paddingTop: 10, color: '#878a88', marginBottom: 120 }}>
        Once someone uses your code to sign up for Ola, you will be able to see them here!
      </Text>
      <ShareCodeButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 0,
    backgroundColor: 'white',
  },
  texttitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  imageStyle: {
    flex: 1,
    height: 250,
    width: '100%',
    padding: 0,
    resizeMode: 'contain',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
    marginTop: 20,
    // marginLeft: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});

export default AllInvitesScreen;

