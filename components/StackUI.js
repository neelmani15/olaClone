import { StyleSheet, Text, View,TouchableOpacity,Pressable } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function StackUI({heading}) {
    const navigation = useNavigation();
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Myself');

    const toggleBottomSheetVisible = () =>{
        setBottomSheetVisible(!isBottomSheetVisible);
    }
    const handleRadioChange=(value)=>{
        setSelectedOption(value);
    }
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back' size={24} color='black'/>
        </TouchableOpacity>
        <Text style={styles.headerText}>{heading}</Text>
        <Pressable 
                android_ripple={{color:'#ccc'}} 
                style={styles.headerIcon}
                onPress={toggleBottomSheetVisible}
        >
            <Ionicons name='person' size={18} color='black' />
            <Text style={styles.headerIconText}>{selectedOption}</Text>
            <Ionicons name='chevron-down' size={18} color='black' onPress={toggleBottomSheetVisible} />
        </Pressable>
      </View>
      <Modal isVisible={isBottomSheetVisible} style={styles.modalSheet} onBackdropPress={toggleBottomSheetVisible}>
        <View style={styles.bottomSheetContent}>
            <Text style={styles.title}>Someone else taking this ride?</Text>
            <Text style={styles.subtitle}>Choose a contact so that they also get driver number,vehicle details and ride OTP via SMS.</Text>
            <TouchableOpacity onPress={() => handleRadioChange('Myself')}>
                <View style={styles.option}>
                    <RadioButton
                        value="Myself"
                        status={selectedOption === 'Myself' ? 'checked' : 'unchecked'}
                        onPress={() => {handleRadioChange('Myself')}}
                        color="black"
                    />
                    <Ionicons name='person' size={16} color='#8A8A8A' />
                    <Text style={styles.optionText}>Myself</Text>
                </View>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity onPress={() => handleRadioChange('Others')}>
            <View style={styles.option}>
                <RadioButton
                value="Others"
                status={selectedOption === 'Others' ? 'checked' : 'unchecked'}
                onPress={() => handleRadioChange('Others')}
                color="black"
                />
                <AntDesign name="contacts" size={16} color="#2361dd" />
                <Text style={[styles.optionText,{color:'#2361DD'}] }>Choose another contact</Text>
                <AntDesign name="right" size={16} color="#2361DD" style={{marginLeft:70}} />
            </View>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toggleBottomSheetVisible} style={styles.button1}>
              <Text style={styles.buttonText1}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleBottomSheetVisible} style={styles.button2}>
              <Text style={styles.buttonText2}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        paddingVertical:20,
        paddingTop:40,
        justifyContent:'space-between',
    },
    headerText:{
        fontSize:22,
        fontWeight:'bold',
        marginRight:100
    },
    headerIcon:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        paddingVertical:4,
        paddingHorizontal:8,
        borderRadius:20,
        borderWidth:1
    },
    headerIconText:{
        paddingLeft:10,
        paddingRight:5
    },
    modalSheet:{
        justifyContent:'flex-end',
        margin:0
    },
    bottomSheetContent:{
        backgroundColor:'white',
        padding:16,
        borderTopLeftRadius:14,
        borderTopRightRadius:14
    },
    title:{
        fontSize:26,
        fontWeight:'bold',
        marginBottom:10
    },
    subtitle:{
        fontSize:16,
        color:'#7d7d7d',
        marginBottom:20
    },
    option:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
    },
    optionText:{
        fontSize:18,
        marginLeft:15,
    },
    horizontalLine:{
        borderBottomWidth:1,
        borderBottomColor:'#b5b5b5',
        marginBottom:10
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20
    },
    button1: {
        flex: 1,
        backgroundColor: '#dcdedc',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
    },
    button2:{
        flex:1,
        backgroundColor:'black',
        borderRadius:10,
        alignItems:'center',
        padding:10,
        marginHorizontal:5
    },
    buttonText1: {
        color: 'black',
        fontWeight: 'bold',
        padding: 5,
        fontSize: 16,
    },
    buttonText2: {
        color: 'white',
        fontWeight: 'bold',
        padding: 5,
        fontSize: 16,
    },
})