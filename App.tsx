
import React from 'react';
import { View } from 'react-native';
import { Text,Button } from 'react-native';
import CustomLabel from './src/components/CustomLabel';




function App(): React.JSX.Element {
 
  return (
  <View style={{alignItems:'center'}}>
   <CustomText  fSize={60} a={'Hello'} b={'world'}/>
    <CustomLabel>Welcome</CustomLabel>
 
  </View>
  );
}


function CustomText(props:any){
  return(
    <Text style={{ fontSize:props.fSize}}> {props.a} {props.b} </Text>
  );
}

export default App;
