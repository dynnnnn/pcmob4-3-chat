import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, {useEffect, useState}from 'react';
import firebase from '../database/firebaseDB';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GiftedChat } from 'react-native-gifted-chat';

const auth = firebase.auth();

const demoMessage = {
    _id: 1,
    text: "hello",
    createdAt: new Date(),
    user:{
        _id: 2,
        name: "React Native",
        avatar: "https://placeimg.com/140/140/any",
    },
};

export default function ChatScreen({navigation}) {
    const [messages, setMessages] = useState([]);
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

        setMessages([demoMessage]);
    }, []);

    const logout = () => auth.signOut();
  return (
    <GiftedChat
    messages={messages}
    onSend={(newMessages) => onSend(newMessages)}
    listViewProps={{ style: { backgroungColor: "blue"} }}
    user={{ _id: 1 }} />
  );
}

const styles = StyleSheet.create({})