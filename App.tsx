
import React from 'react';
import { TextInput, View } from 'react-native';
import { Text,Button } from 'react-native';
import CustomLabel from './src/components/CustomLabel';


function App(): React.JSX.Element {



  return (
  <View style={{alignItems:'center'}}>
   <TextInput style={{
    backgroundColor:'green',
    color:'black',
    width:300,
     marginTop:50,
     borderRadius:40,
     paddingLeft:20}}


     placeholder='User Name'
     placeholderTextColor={'white'}
     
     />

<TextInput style={{
    backgroundColor:'green',
    color:'black',
    width:300,
     marginTop:50,
     borderRadius:40,
     paddingLeft:20}}

     secureTextEntry={true}
     placeholder='Password'
     placeholderTextColor={'white'}
     
     
     />
 
  </View>
  );
}






export default App;
