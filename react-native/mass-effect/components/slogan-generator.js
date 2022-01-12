import { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";

export default function SloganGenerator(){

    const [text,setText] = useState("No store")
    const [store,setStore] = useState('')

    function showSlogan(){
        setStore(text ?? "");
    }


    return(<View>
        <Text>Put in the name of a store</Text>
        <TextInput onChangeText={text => setText(text)}/>
        <Button title="Show Slogan" onPress={showSlogan}/>
        {store? <Text> {store} is my favorite store on the citadel!!!!</Text>: <Text></Text>}
    </View>)
}