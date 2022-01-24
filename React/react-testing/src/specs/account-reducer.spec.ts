import accountReducer, { AccountState, AccountAction} from "../reducers/bank-account-reducer"



test("Rich person small deposit", ()=>{

    const richAdam: AccountState = { // state
        username:"Adam_Money_bags",
        balance: 1000000
    }

    const smallDeposit: AccountAction = { // action object
        type: "deposit",
        amount: 500
    }  

    const newState = accountReducer(richAdam,smallDeposit);
    expect(newState.balance).toBe(1000500);
    expect(newState.username).toBe("Adam_Money_bags");
})

test("Poor person 'large' deposit", ()=>{

    
    const poorSteve: AccountState = {
        username: "Impoverished_Steven",
        balance:100
    }

    const largeDeposit:AccountAction = {
        type:"deposit",
        amount: 40
    }

    const newState = accountReducer(poorSteve,largeDeposit)
    expect(newState.balance).toBe(140);
    expect(newState.username).toBe("Impoverished_Steven")

})