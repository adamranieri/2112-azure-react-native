import { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginView(props:{updateUser:Function}){

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login(){
        await AsyncStorage.setItem("user",JSON.stringify({username,role:"Temp"}))
        props.updateUser({username,role:"Temp"})
    }

    return(<View>
        <Text>username</Text>
        <TextInput onChangeText={t=>setUsername(t)} placeholder="gatorfan"/>

        <Text>Passowrd</Text>
        <TextInput onChangeText={t=>setPassword(t)} placeholder="supersecret"/>
        <Button onPress={login} title="LOGIN"/>

    </View>)
}