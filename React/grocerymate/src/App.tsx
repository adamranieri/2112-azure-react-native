import React from 'react';
import { Provider } from 'react-redux';
import BudgetPage from './components/budget-page';
import ToBuyPage from './components/to-buy-page';
import { groceryStore } from './store';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/nav-bar';
import PokeViewer from './components/poke-viewer';


export default function App() {
  return (<>
  <BrowserRouter>
    <Provider store={groceryStore}>

      <h1>GroceryMate</h1>
      <NavBar/>

      <Routes>
        <Route path="budget" element={<BudgetPage/>}/>      
        <Route path="tobuy" element={<ToBuyPage/>}/>
        <Route path="" element={<ToBuyPage/>}/>
      </Routes>

      <PokeViewer/>

    </Provider>
  </BrowserRouter>
    </>);
}

