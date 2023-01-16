import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { height, style, width } from '../config/style'
import { dateList } from '../config/dataList';
import { connect } from 'react-redux';

class MainScreen extends Component {
    constructor(props){
        super(props);
        let date=new Date();
        let month= Number(date.getMonth())+1
        let value=date.getDate()+'/'+month+'/'+date.getFullYear()
        this.state={
            weekDays:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            selectedDay:value,
        }
    }
  render() {
    return (
      <View style={style.container}>
        <View style={styles.header}>
            <View style={styles.weekContainer}>
            {this.state.weekDays.map((value,index)=>{
                return(
                    <View style={styles.dataContainer} key={index} >
                        <Text style={style.text}>{value}</Text>
                    </View>
                )
            })}
            </View>
            <View>

            <ScrollView horizontal={true} scrollEnabled={true} contentContainerStyle={{width:width*2.1}} pagingEnabled={true} >
            {dateList.map((value,index)=>{
                return(
                    <View style={styles.weekContainer} key={index} >
                        {value.map((value, index)=>{
                            return(
                                <View style={styles.dataContainer} key={index} >
                                    <TouchableOpacity style={[styles.selectedDay, {backgroundColor: value.date===this.state.selectedDay ? 'lightblue' : 'white'}]} onPress={()=> this.setState({selectedDay:value.date})}>
                                        <Text style={style.text}>{value.day}</Text>
                                    </TouchableOpacity>
                                </View>

                        )
                        })}
                    </View>
                )
            })}
            </ScrollView>
            </View>
        </View>
        <View style={{flex:1, padding:'3%'}}>
            <Text style={style.text}>JOURNEY</Text>
            <ScrollView contentContainerStyle={{alignItems:'center',paddingBottom:height*0.05,marginTop:'3%'}}>
                {this.props.details.date[this.state.selectedDay] ? this.props.details.date[this.state.selectedDay].map((value,index)=>{
                    return(
                        <View style={styles.cardContainer} key={index}>
                            <Text style={[style.text,{color:'white'}]}>Retailer: {value.retailerName}</Text>
                            <Text  style={[style.text,{color:'white', marginVertical:'2%'}]}>Status: {value.status}</Text>
                            <Text  style={[style.text,{color:'white'}]}>Date: {this.state.selectedDay}</Text>
                        </View>
                    )
                }):
                <Text style={style.text}> No Event Found</Text>
                }
            </ScrollView>
        </View>
        <View style={{alignItems:"center", paddingBottom:'1%'}}>
            <Button title='Add Event' onPress={()=> this.props.navigation.navigate('AddScreen')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:'orange',
        borderRadius:10,
        height:height*0.1,
        padding:10,
        marginVertical:'2%',
        width:width*0.8
    },
    header:{
        backgroundColor:'white',
        height: height*0.1
    },
    weekContainer:{
        flexDirection:'row', 
        justifyContent:'space-evenly',
        marginTop:5,
        width:width*1
    },
    dataContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:width*0.145,
    },
    selectedDay:{
        alignItems:'center',
        backgroundColor:'lightblue',
        borderRadius: 50/2,
        height:40,
        justifyContent:'center',
        width:40,
    },

})

mapStateToProps = props => {
    return {
      details: props.details,
    };
  };
  
  
  export default connect(mapStateToProps,null) (MainScreen)