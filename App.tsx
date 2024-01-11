
import React, {useState}from 'react';
import { Alert, TextInput, View } from 'react-native';
import { Text,Button,StyleSheet } from 'react-native';



function App(): React.JSX.Element {





return (
 
<View style={sty.container }>
<View style={{width:100,height:100,backgroundColor:'blue'}}></View>
<View style={{width:100,height:100,backgroundColor:'green',position:'absolute',margin:20,
elevation:1,borderRadius:30,borderStyle:'dotted',borderWidth:5,borderColor:'red'}}></View>
</View>

  );
}


const sty=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'white'
}

})

export default App;
