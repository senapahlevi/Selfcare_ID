
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import SearchBar from './components/SearchBar';
import BlockCard from './components/CardNews';
import FeaturedNews from './components/FeaturedNews';
import SmallCard from './components/SmallCard';
import BreakingNews from './components/BreakingNews';
import TechNews from './components/TechNews';
import Screen from './Screen/ScreenView';
import data from './components/DataDummy';
import { MainStackMenu } from './components/MainStackMenu';
import MainTodo from './components/MainTodo';
import NoteTodoList from './components/NoteTodoList';
import TabNewsScreen from './Screen/TabNewsScreen';

const App = () => {  
   return (
   <NavigationContainer>
      <MainStackMenu/>
</NavigationContainer> 
   );
}

export default App;
 /*<TabNewsScreen/>
<NavigationContainer><MainPayment/>
  </NavigationContainer>
  <LoginScreen/>
      <LoginScreen/>
  
 */
      



/*
//@refresh reset
import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, TextInput, View,LogBox, Button } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBr7eudlWhymtw63W5F93U0s2LZdjJVyLc",
    authDomain: "selfcaree-ec624.firebaseapp.com",
    projectId: "selfcaree-ec624",
    storageBucket: "selfcaree-ec624.appspot.com",
    messagingSenderId: "197337099995",
    appId: "1:197337099995:web:a2b5f68f8537c1528426fe",
  }
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

  LogBox.ignoreLogs(['Setting a timer for a long period of time']);

  const db = firebase.firestore()
  const chatsRef = db.collection('chats')
export default function App() {
  const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        readUser()
        const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    //createdAt is firebase.firestore.Timestamp instance
                    //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])

    const appendMessages = useCallback(
        (messages) => {
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        [messages]
    )

    async function readUser() {
        const user = await AsyncStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }
    async function handlePress() {
        const _id = Math.random().toString(36).substring(7)
        const user = { _id, name }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }
    async function handleSend(messages) {
        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
                <Button onPress={handlePress} title="Enter the chat" />
            </View>
        )
    }
    return <GiftedChat messages={messages} user={user} onSend={handleSend} />
}

  const styles = StyleSheet.create({
    container: {
      marginTop:Constants.statusBarHeight,
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      padding:30,
    },
    input :{
      height:50,
      width:'100%',
      borderWidth:1,
      padding:15,
      marginBottom:20,
      borderColor:'gray',
    },
  })

  */