
import React from 'react';
import { View } from 'react-native';
import { Text,Button } from 'react-native';
import CustomLabel from './src/components/CustomLabel';


function App(): React.JSX.Element {

  console.log('Hello')

  function Click(x:number,y:number){
    console.log("Addition is "+(x+y))
    console.log("Multiplication is "+(x*y))
  }

  
 


  return (
  <View style={{alignItems:'center'}}>
 
 <Button title='Click Me' onPress={()=>{
    Click(10,5)
 }}/>
  </View>
  );
}


type customTextProps={
  fsize?:number
  a:string
  b:string
  c?:string

}

function CustomText(props:customTextProps){
  return(
    <Text style={{ fontSize:props.fsize}}> {props.a} {props.b} {props.c}</Text>
  );
}

export default App;
