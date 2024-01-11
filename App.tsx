
import React, {useState}from 'react';
import { Alert, TextInput, View } from 'react-native';
import { Text,Button,StyleSheet } from 'react-native';



function App(): React.JSX.Element {

  var cal={
number1:0,
number2:0,
addition:function(){

  console.log(this.number1+this.number2)
},

subtraction:function(){
  console.log(this.number1-this.number2)
}
  }

  function AddNumber(){
cal.number1=30;
cal.number2=40;
cal.addition();

  }

  function SubNumber(){
    cal.number1=90;
    cal.number2=60;
    cal.subtraction();
  }

return (
  <View style={{alignItems:'center' ,
  backgroundColor:'white',
  flex:1,
  justifyContent:'center' }}>
  
<Button title='Addition' onPress={AddNumber}/>
<Button title='Subtraction' onPress={SubNumber}/>
  </View>
  );
}



export default App;
