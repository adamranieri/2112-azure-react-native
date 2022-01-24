
// In functional programming a reducer is a special kind of function
// It is a function that takes in 2 arguments
// 1. is a state object
// 2. a parameter of your choosing
// MUST RETURN an object with the same exact properties of the state object
// (state, action) => newState

export interface AccountState {
    username:string
    balance:number
}

export interface AccountAction{
    type:string 
    amount: number
}



export default function accountReducer(state:AccountState, action:AccountAction): AccountState{
    
    switch(action.type){
        
        case "deposit":{
            const newState:AccountState = {
                username: state.username, 
                balance: state.balance + action.amount 
            }
            return newState
        }

        default: return state
    }
}

// accountReducer(richAdam,smallDeposit)// output {username:"Adam_Money_bags", balance:1000500}
// accountReducer(poorSteve,largeDeposit)// output {username:"Impoverished_Steven", balance:140}
// // reducers are EASY to test because they are PURE functions