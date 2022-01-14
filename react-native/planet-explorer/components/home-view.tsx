import { View, Text, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    mainHeading:{
        fontSize:30,
        fontWeight:"bold"
    },
    subHeading:{
        fontWeight:"300"
    },
    mainText:{
        fontWeight:"100",
        color:"green"
    }
})


export default function HomeView(){

    return(<View>
        <Text style={styles.mainHeading}>Home</Text>
        <Text style={styles.subHeading}>The Interplanetary Planner by Baria Frontiers</Text>
        <Text style={styles.mainText}>This planner allows a captain to log their experinces plotting new planets</Text>     
    </View>)
}