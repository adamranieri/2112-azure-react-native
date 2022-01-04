import Budget from "../models";


export default function BudgetRow(props: Budget){

    const {id,desc,amount,isAllocated} = props;
    const allocatedStyle: React.CSSProperties = isAllocated? {color:"green"} :{color:"red"}

    return(<tr>
        <td>{id}</td>
        <td>{desc}</td>
        <td>{amount}</td>
        <td style={allocatedStyle}>{isAllocated? "Yes": "No"}</td>
    </tr>)
}