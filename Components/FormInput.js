import React, {useState} from 'react';
import {View, Text,StyleSheet, TextInput, TouchableOpacity, Image, KeyboardType} from 'react-native';
import SubmitButton from './SubmitButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function FormInput (){
    const [show, setShow]=React.useState(false);
    const [visible, setVisible]=React.useState(true);
    const [userInfo, setUserInfo]=useState({
        email:'',
        password:'',
    });
    const {email, password} = userInfo;
    const [error, setError] = useState('')
    
    
    const handleOnchangeText = (value, fieldName) =>{
        setUserInfo({...userInfo,[fieldName]: value});
    };
    const isValidObjFiels = (obj)=>{
        return Object.values(obj).every(value.trim())
    };
    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() =>{
            stateUpdater('')
        },2500);
    };
    const isValidEmail = (value) =>{
        const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return regx.test(value)
    };
    const isValidForm = () =>{
        if(!isValidObjFiels(userInfo)) return updateError('Required all fields', setError)
        if(!isValidEmail(email)) return updateError('Invalid Email', setError)
        if(!password.trim() || password.length < 8) return updateError('password is less than 8 characters!', setError)
    }
    const submitForm = () =>{
        if(isValidForm()){
            console.log(userInfo)
        }
    }

    return(
    <View style={styles.logContainer}>
            <Text style={styles.fontWelcome}>Welcome !</Text>
            <Text style={styles.fontSignIn}>Sign in to continue</Text>
            {error ? (<Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>{error}</Text>): null}
            <TextInput style={styles.textinput} 
            value={email}
            onChangeText={(value) => handleOnchangeText(value, 'email')}
            autoCapitalize='none'
            placeholder="Your email" 
            underlineColorAndroid={'transparent'} 
            KeyboardType='email-address'/>
            <View style={styles.passwordOutline}>
                <TextInput style={styles.textinput2}
                value={password}
                onChangeText={(value) => handleOnchangeText(value, 'password')}
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
             <SubmitButton onPress={submitForm()}/>
            
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
},);