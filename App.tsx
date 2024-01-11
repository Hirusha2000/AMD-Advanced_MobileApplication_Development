
import React, {useState}from 'react';
import { Alert, TextInput, View } from 'react-native';
import { Text,Button,StyleSheet } from 'react-native';



function App(): React.JSX.Element {


var Student={

  name:'jeny',
  age:6,
  school:'Rippon college',
  eat:function(){
console.log("Eating");

  },
  play:function(){
    console.log("Play some Games")
  }

}


function makeStudentEat(){
  Student.eat();
}

return (
  <View style={{alignItems:'center' ,
  backgroundColor:'white',
  flex:1,
  justifyContent:'center' }}>
  

  <Text style={{fontSize:30,
  color:'red'
  
  }}>{Student.name}</Text>



<Text style={{fontSize:30,
  color:'red'
  
  }}>{Student.school}</Text>


<Button title='eat' onPress={makeStudentEat}/>

  </View>
  );
}



export default App;
