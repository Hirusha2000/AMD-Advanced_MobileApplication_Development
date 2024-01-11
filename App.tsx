
import React, {useState}from 'react';
import { Alert, TextInput, View } from 'react-native';
import { Text,Button,StyleSheet } from 'react-native';



function App(): React.JSX.Element {


  class Calculator{
number1:number=0;
number2:number=0;
addition(){
  console.log(this.number1+this.number2);
}
  }


  var cla1=new Calculator();
cla1.number1=30;
cla1.number2=40;
cla1.addition();

var cal2=new Calculator();
cal2.number1=40;
cal2.number2=20;
cal2.addition(); 
  

return (
  <View style={{alignItems:'center' ,
  backgroundColor:'white',
  flex:1,
  justifyContent:'center' }}>
  

  </View>
  );
}



export default App;
