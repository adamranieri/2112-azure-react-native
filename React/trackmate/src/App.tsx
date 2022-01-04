import { useState } from "react";
import { createContext, useContext } from "react";
import BudgetContainer from "./components/budget-container";

export interface MoneyContext{
    maxLimit:number,
    setLimit:Function
}

export const moneyContext = createContext<MoneyContext>(null);

export default function App() {

  const [limit,setLimit] = useState(1000)

  return (<>
  <moneyContext.Provider value={{maxLimit:limit, setLimit}}>

      <BudgetContainer/>

  </moneyContext.Provider>
  </>);
}

