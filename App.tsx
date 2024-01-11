
import React from 'react';
import { View } from 'react-native';
import { Text,Button } from 'react-native';



function App(): React.JSX.Element {
 
  return (
  <View style={{alignItems:'center'}}>
      <Text style={{fontSize:40,
      color:'green',
    marginLeft:10,
  marginTop:10}}>Hello Hirusha</Text>
  <Text style={
    {
      fontSize:30,
      color:'red',
      marginTop:10,
      marginBottom:10
    }
  }>
    
    React Native


  </Text>
  <Button title='ClickMe'/>
  </View>
  );
}



export default App;
