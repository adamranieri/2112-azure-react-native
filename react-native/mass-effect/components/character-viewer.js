import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const style = StyleSheet.create({
    buttons:{
        flexDirection: "row",
        justifyContent:"space-between"
    }
})


export default function CharacterViewer(){

    const [companion,setCompanion] = useState({name:"Tali", species:"Quarian", role:"Tech"});

    function showGarrus(){
        const garrus = {name:"Garrus", species:"Turian", role:"Sniper"};
        setCompanion(garrus)
    }

    function showTali(){
        const tali = {name:"Tali", species:"Quarian", role:"Tech"};
        setCompanion(tali)
    }

    function showMordin(){
        const mordin = {name:"Mordin", species:"Salarian", role:"Doctor"};
        setCompanion(mordin)
    }



    return(<View>
        <Text>Name {companion.name}</Text>
        <Text>Species {companion.species}</Text>
        <Text>Role {companion.role}</Text>
        <View style={style.buttons}>
            <Button title="Garrus" onPress={showGarrus}/>
            <Button title="Tali" onPress={showTali}/>
            <Button title="Mordin" onPress={showMordin}/>
        </View>
    </View>)
}