import axios from "axios";
import { useRef } from "react"

export default function BookAdder(){

    const titleInput = useRef(null);
    const authorInput = useRef(null);

    async function createBook(){
        const book = {
            title: titleInput.current.value,
            author:authorInput.current.value,
            returnDate:0,
            id:"",
            isCheckedout:false
        }

        const response = await axios.post("http://477e-50-110-89-213.ngrok.io/books", book);
        
        if(response.status === 201){
            alert("Success")
        }
    }

    return(<>

        <h4>Book Adder</h4>

        <input ref={titleInput} type="text" placeholder="title" />
        <input ref={authorInput} type="text" placeholder="author" />
        <button onClick={createBook}>Add Book</button>
    </>)
}