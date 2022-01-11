import { useEffect, useState } from "react"
import axios from "axios";


export default function BookViewer(){

    const [books,setBooks] = useState([]);
    const bookItems = books.map(b => <li>{b.title}</li>)

    async function getBooks(){
        // const response = await fetch("http://477e-50-110-89-213.ngrok.io/books");
        // const body = await response.json()
        // setBooks(body)
        const response = await axios.get("http://477e-50-110-89-213.ngrok.io/books")    
        setBooks(response.data)
    }

    useEffect(()=>{
        getBooks()
    },[])


    return(<>
        <ul>
            {bookItems}
        </ul>
    </>)
}