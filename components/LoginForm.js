import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';




export default function LoginForm() {

   

    

  return (
    <View>
      <Text style={styles.fieldTitle}>Email</Text>
      <TextInput 
      style={styles.input} 
      placeholder="Enter Email"
      value={email}
      onChangeText={(text) => setEmail(text)} />
      <Text style={styles.fieldTitle}>Password</Text>
      <TextInput 
      style={styles.input} 
      placeholder="Enter Password" 
      secureTextEntry={true}
      value={password}
      onChangeText={(text) => setPassword(text)} />
    <TouchableOpacity style={styles.loginButton}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    fieldTitle:{
        fontSize: 18,
        marginBottom: 12,
    },
    input:{
        borderColor: 'black',
        borderWidth: 1,
        padding: 4,
        marginBottom: 24,
        height: 36,
        fontSize: 10,
        backgroundColor: 'white',
    },
    loginButton:{
        
        width: 128,
        padding: 18,
        marginTop: 12,
        marginBottom: 36,
        height: 60,
        fontSize: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
    },
})