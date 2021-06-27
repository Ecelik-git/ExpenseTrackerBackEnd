import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


//initialize state
const initialState={
    transactions:[]
}

//create context
export const GlobalContext = createContext(initialState);
//provider components

export const GlobalProvider =({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }




    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}

