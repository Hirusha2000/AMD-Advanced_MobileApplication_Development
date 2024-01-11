
import React, {useState}from 'react';
import { TextInput, View } from 'react-native';
import { Text,Button } from 'react-native';
import CustomLabel from './src/components/CustomLabel';


function App(): React.JSX.Element {

  console.log("App Component is Rendered.");

  const [count,setCount]=useState(0);

  function changeCount(){
    setCount(count+1);

  }

  return (
  <View style={{alignItems:'center'}}>
<Text style={{fontSize:30}}>Count is :{count}</Text>
<Button title='Change Count' onPress={changeCount}/>
  </View>
  );
}







export default App;
