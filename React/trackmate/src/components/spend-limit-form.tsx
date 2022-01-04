import { useContext } from "react"
import { useRef } from "react"
import { moneyContext } from "../App"

export default function SpendLimitForm(){

    const limitInput = useRef(null)
    const money = useContext(moneyContext)

    function makeNewLimit(){
        const newLimit: number = limitInput.current.value ?? 0
        money.setLimit(newLimit)
    }

    return(<>
        <label htmlFor="limitInput">Limit</label>
        <input ref={limitInput} id="limitInput"/>
        <button onClick={makeNewLimit}>Set Limit</button>
    </>)
}