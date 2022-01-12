import { Text, View } from "react-native";
import { StyleSheet } from "react-native";


    // React Native is a CSS in JS mentality
    // Your CSS is JS code
    const style = StyleSheet.create({
        header:{
            color:"blue",
            fontWeight:"bold"
        },
        desc:{
            borderColor: "grey",
            fontStyle:"italic"
        },
        container:{
            backgroundColor:"oldlace"
        }
    })


export default function MassEffectDesc(){



    return(<View style={style.container}>
        <Text style={style.header}>Mass Effect is a Space Opera</Text>
        <Text style={style.desc}>It is set in the year 2183. 
        It follows the adventure of Commander Shepard and their journey to defeat the reapers</Text>
    </View>)
}