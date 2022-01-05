import { Action } from "@reduxjs/toolkit";
import { useRef } from "react"
import { useDispatch } from "react-redux";
import { actions, Product } from "../store";

export default function ProductForm(){

    const descInput = useRef(null);
    const dispatch = useDispatch()

    function addProduct(){
        const description: string = descInput.current.value ?? "nothing"
        const product: Product = {desc:description, isBought: false}
        
        //const action = {type:"Groceries/addProductToList", payload:product}
        const action = actions.addProductToList(product)
        dispatch(action)

    }

    return(<>

        <h3>Add a product</h3>
        <label htmlFor="descInput">Product Desc</label>
        <input ref={descInput} id="descInput" placeholder="paper towels"/>
        <button onClick={addProduct}>Add Product</button>

    </>)
}