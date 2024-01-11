
import React, {useState}from 'react';
import { Alert, TextInput, View } from 'react-native';
import { Text,Button } from 'react-native';



function App(): React.JSX.Element {

var textValue='';


function displayValue(){
console.log("Text value= "+textValue);
Alert.alert("Text says",textValue);


}

function onTextChange(v:string){
textValue=v;

}

return (
  <View style={{alignItems:'center'}}>
  
<TextInput style={{
width:300, height:50,
borderRadius:30,
backgroundColor:'black',
color:'white',
marginVertical:20,

}} onChangeText={onTextChange}/>
<Button title='CliclMe'  onPress={displayValue}/>

  </View>
  );
}


export default App;
