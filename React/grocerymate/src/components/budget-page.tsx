import BudgetEditor from "./budget-editor";
import BudgetViewer from "./budget-viewer";

export default function BudgetPage(){

    return(<>
        <h1>Budget Page</h1>
        <p>Use this page to view and edit your budget for shopping</p>
        <BudgetViewer/>
        <BudgetEditor/>
    </>)
}