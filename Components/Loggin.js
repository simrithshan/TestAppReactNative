import React, {Component} from 'react';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Text,StyleSheet, TextInput, TouchableOpacity, Image, KeyboardType} from 'react-native';
import FormInput from './FormInput';
import FormValue from './FormValue';

export default function Loggin () {
    return(
        <View style={styles.logContainer}>
            <FormValue/>
            <Text style={styles.pass}>Forgot Password?</Text>
            <View style={styles.socialtext1}>
                <Text style={styles.socialtext}>Social Media Login!!</Text>
                {/* <FontAwesome5 name={'eye'} size={100}/> */}
            </View>
            <View style={styles.logo}>
                <Image style={styles.images} source={{uri: 'https://th.bing.com/th/id/R.c8bf7c087ca9793d094042845707ffac?rik=fjZN1AYH30vXIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG19635.png&ehk=ZmsumEtoeJQhKoUzQTZO2TEbYPBu0%2b7EFdjmJ3qljls%3d&risl=&pid=ImgRaw&r=0'}}></Image>
                <Image style={styles.images} source={{uri: 'https://clipartcraft.com/images/facebook-logo-circle-2.png'}}/>
                <Image style={styles.images} source={{uri: 'https://pngmind.com/wp-content/uploads/2019/08/Apple-Logo-Png-Transparent-Background-1.png'}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logContainer:{
        alignSelf: 'stretch',
},
pass:{
    alignItems: 'center',
    marginLeft: 80,
    color: '#1a237e',
},
socialtext1:{
    justifyContent: 'center',
},
socialtext:{
    fontSize: 20,
    paddingBottom:5,
    marginTop: 40,
    marginLeft:20,
    color: '#d1c4e9',
},
logo:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginLeft: -50,
    marginRight: -6,
},
images:{
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    marginRight: 34,
    
},
},
);