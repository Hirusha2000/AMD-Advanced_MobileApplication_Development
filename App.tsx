
import React, {useState}from 'react';
import { TextInput, View } from 'react-native';
import { Text,Button } from 'react-native';
import CustomLabel from './src/components/CustomLabel';


function App(): React.JSX.Element {

var x=0;
const [y,setY]=useState(0);

function changeX(){

x=x+1;
console.log(x);
}


function changeY()
{
  setY(y+1);
}  

return (
  <View style={{alignItems:'center'}}>
    <Text style={{fontSize:30}}>X and Y : {x}{y}</Text>
    <Button title='Increment X' onPress={changeX}/>
    <Button title='Increment y' onPress={changeY}/>

  </View>
  );
}


export default App;
