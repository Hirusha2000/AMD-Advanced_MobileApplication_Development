
import React, {useState}from 'react';
import { Alert, TextInput, View } from 'react-native';
import { Text,Button,StyleSheet } from 'react-native';



function App(): React.JSX.Element {


  interface Student{
name:string;
age:number;
university:string;
  }

  var student_1:Student={
    name:'Hirusha',
    age:24,
    university:'IJSE',
    
  }

  var text='abc';

function printData(std:Student){
console.log(std.name);
console.log(std.age);
console.log(std.university);
}



return (
  <View style={{alignItems:'center' ,
  backgroundColor:'white',
  flex:1,
  justifyContent:'center' }}>
  
  <Button title='print' onPress={ ()=>printData(student_1)}/>
  </View>
  );
}



export default App;
