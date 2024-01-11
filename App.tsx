
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

var Cat={
name:'kity',
age:2,
sleep:function(){
  console.log("sleeping");
}
}

function makeCatSleep(){
  Cat.sleep();
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
  
  }}>{Cat.name}</Text>



<Text style={{fontSize:30,
  color:'red'
  
  }}>{Cat.age}</Text>


{/* <Button title='eat' onPress={makeStudentEat}/> */}
<Button title='sleep' onPress={makeCatSleep}/>
  </View>
  );
}



export default App;
