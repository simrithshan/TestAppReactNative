import React, {useState} from 'react';
import {View, Text,StyleSheet, TextInput, TouchableOpacity, Image, KeyboardType} from 'react-native';

export default function SubmitButton ({onPress}){
    return (
    <View>
    <TouchableOpacity 
    onPress={onPress} style={styles.button}>
                    <Text style={styles.buttonFont}>LOGIN</Text>
    </TouchableOpacity>
    </View>
    );}

const styles = StyleSheet.create({
button:{
        width: 250,
        height: 50, 
        backgroundColor: '#283593',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:3,
        borderRadius: 8,
        // paddingLeft:100,
},
buttonFont:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
},
},);