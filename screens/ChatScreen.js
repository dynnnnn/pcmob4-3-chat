import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, {useEffect}from 'react';
import firebase from '../database/firebaseDB';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const auth = firebase.auth();

export default function ChatScreen({navigation}) {
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Chat", { id: user.id, email: user.email});
            } else {
                navigation.navigate("Login");
            }
        });

        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={logout}>
                <MaterialCommunityIcons name="logout" size={30} color="grey" />
                </TouchableOpacity>
            ),
        });
    }, []);

    const logout = () => auth.signOut();
  return (
    <View>
    <Button onPress={logout} title="Logout"></Button>
      <Text>ChatScreen</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({})