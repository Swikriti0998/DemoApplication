import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { width } from '../config/style';

export default function TextInputField({label, value, ...otherProps}) {
  //state to check if data should be visible or hidde
  return (
    <View style={styles.mainContainer}>
      {/* to show label on top of the container */}
    {label && value!=='' &&
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
        }
        {/* inputComponent */}
        <View style={styles.inputContainer} >
          <TextInput value={value} style={styles.inputField} placeholderTextColor='grey' {...otherProps} />
        </View>
    </View>    
  )
}

    const styles = StyleSheet.create({
        // input container styling
        inputContainer:{
          alignItems:'center',
          backgroundColor:'#fff',
          borderColor:'grey',
          borderRadius:5,
          borderWidth:1,
          flexDirection:'row',
          width:width*0.8,
        },
        //input component
        inputField:{          
          color:'#000',
          fontSize:18,
          width:width*0.9
        },
        //label to show on top of the input component 
        labelContainer:{
          alignSelf: 'flex-start' ,
          backgroundColor:'white',
          borderRadius:2,
          paddingHorizontal:5,
          left:'1.5%',
          top:8,
          zIndex:999,
        },
        // label text styling
        labelText:{
          color:'grey',
          fontSize:18
        },
        mainContainer:{
          width:width*0.8,
          marginVertical:'3%'
        }
      });