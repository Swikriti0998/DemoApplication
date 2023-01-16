import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    text:{
        color:'black',
        fontSize:18,
    }
})

export const height= Dimensions.get('screen').height;
export const width= Dimensions.get('screen').width;