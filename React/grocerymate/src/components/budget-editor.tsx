import { Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"


export default function BudgetEditor(){

    const dispatch = useDispatch();

    function increase(){
        // An action is a message you will dispatch to the reducers
        const action: Action = {type:'Groceries/increaseBudget'}
        dispatch(action)

    }

    function decrease(){
        const action: Action = {type:"Groceries/decreaseBudget"}
        dispatch(action);
    }

    return(<>
        <h3>Edit your budget</h3>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </>)
}