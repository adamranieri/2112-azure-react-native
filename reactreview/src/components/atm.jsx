import { useState } from "react"


export default function ATM(){

    const [user,setUser] = useState({fname:"Adam", lname:"Ranieri", balance:300})

    function deposit(){
        const clone = {...user};
        clone.balance += 5;
        setUser(clone)

    }

    function withdraw(){
        const clone = {...user};
        clone.balance -= 5;
        setUser(clone)
    }

    function wipeOut(){
        const clone = {...user, balance:0}// will override the balance on the object with the new balance property
        setUser(clone)
        //setUser({...user, balance:0})
    }


    return(<>
        <h3>Bank view for {user.fname} {user.lname}</h3>
        <h3>Balance {user.balance}</h3>
        <button onClick={deposit}>Deposit 5$</button>
        <button onClick={withdraw}>Withdraw 5$</button>
        <button onClick={wipeOut}>Wipe out</button>
    </>)
}