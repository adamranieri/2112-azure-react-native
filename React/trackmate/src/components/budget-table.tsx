import Budget from "../models"
import BudgetRow from "./budget-row"

export default function BudgetTable(props:{budgets:Budget[]}){

    const budgets = props.budgets;
    const budgetRows = budgets.map(b => <BudgetRow key={b.id} {...b}/>)

    return(<table>
        <thead>
            <tr><th>ID</th><th>Desc</th><th>Budget</th><th>Money Allocated</th></tr>
        </thead>
        <tbody>
            {budgetRows}
        </tbody>
    </table>)
}