import { Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import InviteScreenBar from '../components/InviteScreenBar';
import YourInvites from '../components/YourInvites';
import ShareCodeButton from '../components/ShareCodeButton';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function Invite(){
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" color={'black'} size={30} />
            </TouchableOpacity>
            <InviteScreenBar />
            <Text style={styles.texttitle}>Your Invites</Text>
            <YourInvites />
            <ShareCodeButton />
        </ScrollView>
    );
}

export default Invite;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff',
      flexDirection: 'column',
      marginBottom: 0,
    },
    texttitle:{
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 1,
        marginTop: 20,
      },
  });
  