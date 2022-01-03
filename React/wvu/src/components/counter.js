import { useState } from "react";


export default function Counter(){

    // The developer is responsible for telling React to RE-RENDER the component
    // [readonly-value, function that will rerender using a NEW value]
    const [num, rerenderNum] = useState(0)// default value

    function add(){
        const newNum = num + 1;
        rerenderNum(newNum)
        console.log(num)
    }

    function subtract(){
        const newNum = num - 1;
        rerenderNum(newNum)
        console.log(num)
    }

    return(<>

    <h2>{num}</h2>
    <button onClick={add}>Increment</button>
    <button onClick={subtract}>Decrement</button>
    
    </>)
}