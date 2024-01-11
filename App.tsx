
import React from 'react';
import { View } from 'react-native';
import { Text,Button } from 'react-native';
import MyComponents from './src/components/MyComponents';



function App(): React.JSX.Element {
 
  return (
  <View style={{alignItems:'center'}}>
    <MyComponents/>
  </View>
  );
}



export default App;
