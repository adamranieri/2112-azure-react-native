import { useContext } from "react";
import { useState } from "react";
import { moneyContext } from "../App";
import Budget from "../models";
import BudgetForm from "./budget-form";
import BudgetTable from "./budget-table";
import SpendLimitForm from "./spend-limit-form";


export default function BudgetContainer(){

    const [budgets,setBudgets] = useState<Budget[]>([
            {id:"101", desc:"Groceries", amount:90, isAllocated:true},
            {id:"202", desc:"dining", amount:40, isAllocated:false},
            {id:"303", desc:"office supplies", amount:35, isAllocated: true}])
    
    const money = useContext(moneyContext)


 

    return(<>
        <h3>The total amount of money available is {money.maxLimit}</h3>
        <BudgetForm budgets={budgets} setBudgets={setBudgets}/>
        <BudgetTable budgets={budgets}/>
        <SpendLimitForm/>
    </>)
}