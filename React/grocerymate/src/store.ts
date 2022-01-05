import { Action, configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Product{
    desc: string 
    isBought: boolean
}

export interface GroceryState{
    budget:number
    products: Product[]
}
//Create a 'Global' inital state. An object we want to have access to throughout the entire application
const initialState:GroceryState ={
    budget:90,
    products: [{desc:"Milk", isBought:false}, {desc:"eggs", isBought: true}]
}

const grocerySlice = createSlice({
    name:"Groceries", 
    initialState,
    // your state is encapsulated and protected from direct modification
    // You MUST use a reducer to interact with the state
    reducers:{

        increaseBudget(state){
            state.budget = state.budget + 5;
        },

        decreaseBudget(state){
            if(state.budget-5 >= 0){
                state.budget = state.budget -5;
            }
        },

        addProductToList(state, action: PayloadAction<Product>){
            // you write your logic as if it was mutable
            const product: Product = action.payload
            state.products.push(product)
        },

        setProductComplete(state, action: PayloadAction<string>){
            const desc: string = action.payload
            state.products.find(p => p.desc === desc).isBought = true
        }

    }
})


export const groceryStore = configureStore({reducer:grocerySlice.reducer})
export const actions = grocerySlice.actions