import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import DatePicker from 'react-native-date-picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextInputField from '../component/TextInputField'
import { addData } from '../redux/actions/EventActions';
import { height, style } from '../config/style'

class AddScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            retailerName:'',
            status:'',
            fullDate: new Date(),
        }
    }

    onSubmit(date, retailerName, status){
        let month= Number(date.getMonth())+1
        let da= date.getDate()+'/'+month+'/'+date.getFullYear();
        let data;
        if(this.props.details.date){
          if(this.props.details.date[da]){
            data={
              date:{
              [da]:[...this?.props?.details?.date[da],{
                retailerName: retailerName,
                status: status,
              }]
            }}
          }else{
          data={
            date:{...this?.props?.details?.date,
            [da]:[{
              retailerName: retailerName,
              status: status,
            }]
          }}
        }
        }else{
          data={
            date:{
            [da]:[{
              retailerName: retailerName,
              status: status,
            }]
          }}
        }
        this.props.addData(data)
        this.props.navigation.navigate('MainScreen')
    }

  render() {
    const {fullDate,retailerName, status}= this.state;
    return (
      <View style={[style.container,{alignItems:'center'}]}>
        <View style={{flex:1}}>
        <TextInputField label={'Retailer'} placeholder='Enter Retailer' value={retailerName} onChangeText={(val)=> this.setState({retailerName:val})}  />
        <TextInputField label={'Status'} placeholder='Enter Status' value={status} onChangeText={(val)=> this.setState({status:val})} />
        <View style={{alignItems:'center'}}>
            <DatePicker date={fullDate} onDateChange={(date)=> this.setState({fullDate:date})} mode='date' textColor='black' />
        </View>
        
      </View>
        <View style={{alignItems:"center", paddingBottom:height*0.01}}>
          {retailerName!=='' && status!==null ?
        <Button title='Add Event' onPress={()=>this.onSubmit(fullDate,retailerName,status)}  />
        :
        <Button title='Add Event' disabled/>
      }
        </View>
      </View>
    )
  }
}
mapStateToProps = props => {
  return {
    details: props.details,
  };
};

mapDispatchToProps = dispatch =>{
  return{
    ...bindActionCreators({
      addData
    }, dispatch),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddScreen)