import React from 'react'
import {Header} from "./components/Header";
import "./App.css";
import {Balance} from "./components/Balance";
import {IncomeExpenses} from "./components/IncomeExpenses";
import {TransactionList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import { GlobalProvider } from './context/GlobalState';


export const App = () => {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList /> 
                <AddTransaction />
            </div>
        </GlobalProvider>
    )
}

export default App;

////1. npm install react-scripts start  : THIS COMMENT IS USED TO ADD THE DEPENDENCIESE IN THE REACT APP
//WHEN EVER WE START A NEW PROJECT, WE DO THIS ONLY ONCE TO ADD REACT LIBRARIES
//OPEN TERMINAL TO RUN THIS 
//2. npm install : Double check the intallation
//3. npm start : OPENS THE REACT PAGE
//npm => node package manager