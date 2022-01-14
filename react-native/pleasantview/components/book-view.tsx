import { useEffect, useState } from "react"
import { View,Text, FlatList } from "react-native"
import { Book } from "../dtos/dtos"
import axios from "axios"

export default function BookView(){

    const [books, setBooks] = useState<Book[]>([])

//     const books:Book[] =[
//     {id:"101", title:"Count of Monte Cristo", author:"Dumont", isCheckedout:false, returnDate:0},
//     {id:"202", title:"The Stranger", author:"Albert Camus", isCheckedout:false, returnDate:0},
//     {id:"303", title:"The Odyssey", author:"Homer", isCheckedout:true, returnDate:0}
// ]

    async function getBooks() {
        const response = await axios.get("http://8c58-50-110-89-213.ngrok.io/books");
        setBooks(response.data);
        
    }

    useEffect(()=>{
        axios.get("http://8c58-50-110-89-213.ngrok.io/books").then(response => setBooks(response.data))
    }, [])



    return(<View>
        <FlatList data={books} renderItem={({item})=>BookItem(item)} keyExtractor={item => item.id} />
    </View>)
}

function BookItem(props:Book){

    return(<View>
        <Text> Title {props.title} Author {props.author}</Text>
    </View>)
}

// function divide({dividend, divisor}){
//     return dividend/divisor;
// }

// divide({dividend:45,divisor:3})