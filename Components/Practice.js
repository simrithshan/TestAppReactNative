import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

export default function Practice () {
    return(
        <SafeAreaView style={styles.heading}>
            <Text>Welcome to My App!1</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    heading:{
        flex:1,
        backgroundColor: '#df78ef',
        alignItems: 'center',
        justifyContent: 'center',
    }
});