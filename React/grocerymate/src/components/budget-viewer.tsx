import { useSelector } from "react-redux"
import { GroceryState } from "../store"


export default function BudgetViewer(){

    const amount = useSelector((state: GroceryState) => state.budget)

    

    return(<>
        <h3>Your current budget is {amount}</h3>
    </>)
}