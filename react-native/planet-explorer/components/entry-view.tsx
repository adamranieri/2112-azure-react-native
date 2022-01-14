import { useState } from "react";
import { View, Text, TextInput, Switch, Button } from "react-native";
import { useDispatch } from "react-redux";
import { PlanetLog } from "../models";

export default function EntryView(){

    const [isInhabiatedEnabled, setInhabitated] = useState(false);
    const [planet,setPlanet] = useState("");
    const [desc, setDesc] = useState("");

    const dispatch = useDispatch();

    function addPlanet(){
        const planetLog:PlanetLog ={ 
            id:String(Math.random()), desc, planet, isInhabited:isInhabiatedEnabled
        }
        const action = {type:"PlanetSlice/addPlanetLog", payload: planetLog};
        dispatch(action);
    }


    return(<View>
        <Text>Entry Adder</Text>
        <TextInput placeholder="Earth" onChangeText={t =>  setPlanet(t)}/>
        <TextInput placeholder="Human Homeworld" onChangeText={t => setDesc(t)}/>

        <Text>Is Inhabited</Text>
        <Switch onValueChange={()=>setInhabitated(!isInhabiatedEnabled)} value={isInhabiatedEnabled}/>
        <Button title="Add New Planet Entry" onPress={addPlanet}/>

    </View>)
}