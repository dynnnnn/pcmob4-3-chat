import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, {useState} from 'react';
import firebase from '../database/firebaseDB';

const auth = firebase.auth();

export default function LoginScreen({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorText, setErrorText] = useState("");

   const login = () => {
    Keyboard.dismiss()

    auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('signed in!')
            
        })
        .catch((error) => {
            console.log('ERROR')
            setErrorText(error.message)
        })
}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat App</Text>
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
    <TouchableOpacity style={styles.loginButton} onPress={login}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
    <Text style={styles.error}>{errorText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        padding: 24,
    },
title:{
    fontSize:40,
    fontWeight: 'bold',
    marginBottom: 24,
},
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
error:{
    fontSize: 12,
    color: 'red',
}
})