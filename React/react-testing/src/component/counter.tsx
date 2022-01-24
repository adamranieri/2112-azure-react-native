import { useState } from "react"


export default function Counter(){
    const [num,setNum] = useState(0);

    function add(){
        const newNum = num + 1;
        setNum(newNum)
    }


    return(<>
        <h4>The counter value is at {num}</h4>
        <button onClick={add}>Add</button>
    </>)
}