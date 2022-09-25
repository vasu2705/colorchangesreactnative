import { StatusBar } from 'expo-status-bar';
import React,{ useState,useEffect } from 'react';
import { StyleSheet, Button, View,Text } from 'react-native';

export default function App() {
  
  const [count,setCount]=useState(0);
  const [color,setColor]=useState({})
  
  useEffect(() => {
    (count===0)?setColor('red'):(count===1)?setColor('green'):setColor('blue')
  },[count]); 
  return (
    <View style={styles.container}>
      <Button title={"tap to toggle color"} onPress={()=>{
        (count)<2?setCount(count+1):setCount(0)
      }}/>
      <View style={{
        width: 100, height: 100,padding: 20,
        margin: 50,backgroundColor:color
      }} />
      <Text style={{color:"#fff"}}>{count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#000",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
