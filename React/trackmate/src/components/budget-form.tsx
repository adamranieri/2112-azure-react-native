import React, { useRef } from "react"
import { useContext } from "react";
import { moneyContext } from "../App";
import Budget from "../models";


export default function BudgetForm(props:{budgets:Budget[], setBudgets: Function}){

    const money = useContext(moneyContext)

    const {budgets,setBudgets} = props;

    const descInput = useRef(null);
    const amountInput = useRef<HTMLInputElement>(null);

    function addBudget(event: React.SyntheticEvent){

        const budget: Budget = {
            id: String(Math.random()),
            desc: descInput.current?.value ?? "No Description",
            amount : amountInput.current?.valueAsNumber ?? 0,
            isAllocated: false
        }

        setBudgets([...budgets,budget])
    }
    

    return(<>

    <h3>Craft a budget</h3>
        
    <label htmlFor="desc">Description</label>
    <input ref={descInput} id="desc" type="text" placeholder="groceries" />

    <br />

    <label htmlFor="amount">Amount</label>
    <input ref={amountInput} id="amount" type="number" placeholder="0"/>

    <br />
    <button onClick={addBudget}>Create Budget</button>
    <h6>Reminder max limit is {money.maxLimit}</h6>

    
    </>)
}