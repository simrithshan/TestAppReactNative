import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// <FontAwesome5 name={'comments'} />;
import Loggin from './Components/Loggin';
import Practice from './Components/Practice';
export default function App()
{
  return(
      <View style={myStyle.container}>
        {/* <Text>Welcome All!! abcd</Text> */}
        <Loggin/>
        {/* <Practice/> */}
      </View>
    );
}

const myStyle = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
});