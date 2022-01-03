import { useRef, useState } from "react"

export default function SignupList(){

    const [attendees,setAttendees] = useState(["Bill", "Zoey", "Charles", "Steve"]);
    const nameInput = useRef()

    const attendeeItems = attendees.map(a => <li key={a} >{a}</li>);

    function addAttendee(event){
        const name = nameInput.current.value;
        const newAttendess = [...attendees];// Clones a brand new array
        newAttendess.push(name);
        setAttendees(newAttendess)

    }

    return(<>
        <ul>
            {attendeeItems}
        </ul>
        <button onClick={addAttendee}>Add Attendee</button>
        <input ref={nameInput}></input>
    </>)
}