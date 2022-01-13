import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookView from './components/book-view';
import LoginView from './components/login-view';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

  const [user,setUser] = useState({username:"not logged in", role:""})

  useEffect(()=>{
    AsyncStorage.getItem("user").then(json =>{ 
      if(json){
        setUser(JSON.parse(json))
      }     
    });
  },[])

  

  return (
    <View >
      {user.username ==="not logged in" ? <LoginView updateUser={setUser}/> : <View>
        <Text>logged in as {user.username}</Text> 
        </View>}
      
    </View>
  );
}
