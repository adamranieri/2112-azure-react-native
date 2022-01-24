import { createContext, useReducer } from "react"
import accountReducer, { AccountAction } from "../reducers/bank-account-reducer"
import AtmBtn from "./atm-button";


export default function ATM(){

    // useReducer needs a reducer function and an intial state
    // read-only-value, dispatch function
    // dispatch allows you to send actions to that reducer function
    const [account,dispatch] = useReducer(accountReducer,{username:"AdamGator",balance:100});
    
    // Advantages of useReducer
    // 1. Reducer functions are very easy to test. Pure functions.
    // 2. you can design reducer logic SEPERATE from the actual component. Component might look cleaner
    // 3. Encapsulates the state so you do not accidentally set it to inappropirate values or interact the wrong way with it
    // 4. reducers are EASY to add extra functionality to
    // 5. good to use when one state is used to calculate the next state

    // Disadvantage
    // 1. significantly tougher to set up intially

    function add10(){
        const action: AccountAction = {type:"deposit", amount:10};
        dispatch(action)

    }

    function add50(){
        const action: AccountAction = {type:"deposit", amount:50};
        dispatch(action)
    }

    return(<>
        <h4>Welcome {account.username}</h4>
        <h4>Your balance is {account.balance}</h4>
        <button onClick={add10}>Deposit $10</button>
        <button onClick={add50}>Deposit $50</button>
        <AtmBtn dispatch={dispatch}></AtmBtn>
    </>)
}