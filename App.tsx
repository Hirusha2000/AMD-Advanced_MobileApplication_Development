
import React from 'react';
import { View } from 'react-native';
import { Text,Button } from 'react-native';
import CustomLabel from './src/components/CustomLabel';




function App(): React.JSX.Element {
 
  return (
  <View style={{alignItems:'center'}}>
    <CustomLabel>Welcome</CustomLabel>
 
  </View>
  );
}



export default App;
