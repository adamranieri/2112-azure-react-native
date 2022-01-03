import { useState } from "react"


export default function Greeter(){

    const [person,setPerson] = useState({fname:"Adam", lname:"Ranieri"});

    function fnameAppend(){
        const newPerson = {...person};// This will CLONE the person object
        newPerson.fname += "a";
        setPerson(newPerson) // Always pass in a NEW OBJECT
    }

    function lnameAppend(){
        const newPerson = {...person};
        newPerson.lname += "a";
        setPerson(newPerson)
    }



    return(<>
        <h4>First Name: {person.fname}</h4>
        <h4>Last Name: {person.lname}</h4>

        <button onClick={fnameAppend}>Append Letter to First Name</button>
        <button onClick={lnameAppend}>Append Letter to Last Name</button>

    </>)
}