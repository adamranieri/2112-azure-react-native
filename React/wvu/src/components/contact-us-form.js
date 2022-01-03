import { useRef } from "react";

export default function ContactForm(){

    const emailInput = useRef(); // any inbuilt react function that begins with 'use' is a hook
    // a hook 'hooks' into the components lifecycle/inner workings and adds additional functionality
    // useRef creates a JS variable that is a constant reference to a mutable html element

    function sendForm(event){
        // just like in vanilla JS functions take in an event object from the *DOM*
        console.log(event);
        const email = emailInput.current.value;
        alert("A follow up email will be sent to you " + email)
    }

    return(<>
        <label htmlFor="emailInput"> email </label>
        <input id="emailInput" ref={emailInput}></input>
        <button onClick={sendForm}>Request Info</button>
    </>)

}