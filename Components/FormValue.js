import React, {useState} from 'react';
import {View, Text,StyleSheet, TextInput, TouchableOpacity, Image, KeyboardType} from 'react-native';
import SubmitButton from './SubmitButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function FormValue(){
    const [show, setShow]=React.useState(false);
    const [visible, setVisible]=React.useState(true);
    const [email,setEmail]=React.useState('');
    const [error, setError]=React.useState('');
    // const [password, setPassword]=React.useState('');
    // const [userInfo, setUserInfo]=useState({
    //     email:'',
    //     password:'',
    // });
    const onChnageEmailHandler = (value) =>{
        setEmail(value)
    };
    // console.log(email);
    const updateError = (error,stateChanger) =>{
        stateChanger(error);
        setTimeout(() =>{
            stateChanger('')
        },2500)
    }
    const isValidEmail=(value)=>{
        const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return regx.test(value);
    }
    const isValidForm = () =>{
        if (!isValidEmail(email))return updateError('Enter a valid email!', setError);
    };
    const submitForm = () =>{
        if(isValidForm()){
            console.log(email);
        }

    };

    return(
        <View style={styles.logContainer}>
            <Text style={styles.fontWelcome}>Welcome !</Text>
            <Text style={styles.fontSignIn}>Sign in to continue</Text>
            {error ? (<Text style={styles.errormsg}>{error}</Text>): null}
            <TextInput style={styles.textinput} 
            autoCapitalize='none'
            placeholder="Your email" 
            underlineColorAndroid={'transparent'} 
            value={email}
            onChangeText={(value) => onChnageEmailHandler(value)}
            />
            <View style={styles.passwordOutline}>
                <TextInput style={styles.textinput2}
                placeholder="Enter Password" 
                secureTextEntry={visible} 
                underlineColorAndroid={'transparent'}/>
                <TouchableOpacity style={styles.eyeIcon} onPress={
                    ()=> {
                        setVisible(!visible)
                        setShow(!show)
                    }
                }>
                    <FontAwesome5 name={show === false ? 'eye' : 'eye-slash'} size={20}/>
                </TouchableOpacity>
            </View>
             <SubmitButton onPress={submitForm}/>
            
    </View>
    );
}

const styles = StyleSheet.create({
    logContainer:{
        alignSelf: 'stretch',
},
fontWelcome:{
    alignSelf: 'stretch',
    fontFamily: 'Copperplate',
    fontSize: 50,
    // font: 'bold',
    color: '#000063',
},
fontSignIn:{
    fontSize: 20,
    color: '#d1c4e9',
    paddingLeft: 10,
    paddingBottom:10,
},
textinput:{
    alignSelf: 'stretch',
    // paddingTop: 30,
    height: 40,
    marginTop: 30,
    marginBottom: 30,
    color: '#3f51b5',
    borderBottomColor: '#9499b7',
    borderBottomWidth: 1,
},
passwordOutline:{
    // flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    // paddingBottom: 10,
    alignSelf: 'stretch',
    borderBottomColor: '#9499b7',
    borderBottomWidth: 1,
},
textinput2:{
     alignSelf: 'stretch',
     height: 40,
    marginTop: 10,
    paddingRight: 200,
    // marginBottom: 10,
    color: '#3f51b5',
    
},
eyeIcon:{
    position:'absolute',
    right: 25,
    paddingTop:20,
},
errormsg:{
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
},
},);