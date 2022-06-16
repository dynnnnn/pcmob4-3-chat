import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat App</Text>
      <LoginForm />
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
}
})