import {View, Text, StyleSheet, FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import { PlanetLog } from '../models'
import { PlanetLogState } from '../store'

export default function LogView(){

    const planetLogs: PlanetLog[] = useSelector((state:PlanetLogState) => state.planetLogs);


    return(<View>
        <FlatList data={planetLogs} keyExtractor={item => item.id} renderItem={PlanetItem}/>   
    </View>)
}

const styles = StyleSheet.create({
    inhabited:{
        color:"blue"
    },
    desolete:{
        color:"red"
    },
    title:{
        fontWeight:"bold"
    }
})

function PlanetItem(props:{item: PlanetLog}){
    const {planet, desc, isInhabited} = props.item

    return(<View>
        <Text style={styles.title}>{planet}</Text>
        <Text>{desc}</Text>
        {isInhabited? <Text style={styles.inhabited}>YES</Text>: <Text style={styles.desolete}>NO</Text>}
    </View>)

}