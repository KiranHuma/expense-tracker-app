import React, {createContext, useReducer} from 'react';
//import AppReducer  from './contextfunctions/AppReducer'; 
import AppReducer  from './AppReducer';  ///*step2:here is passing of Reducer then go to line 24
///*step1 is in appreducer.js


// intial state it is only to pass down not really use in app
///*step6:these are the values are accessed from intialstate....got line 38
const initialState={
    transactions: [
          // { id: 1, text: 'Flower', amount: -20 },
          // { id: 2, text: 'Salary', amount: 300 },
          // { id: 3, text: 'Book', amount: -10 },
          // { id: 4, text: 'Camera', amount: 150 } last step::  it will give empty array not dummy values in beginning
         ]
}

//create context
export const GlobalContext = createContext(initialState);

// Provider component to wrap up all function like in app.js <balance/> <income/> etc
// childern represent functions in app.js like <balance/> <income/> etc
export const GlobalProvider = ({children}) => {
    //now use reducer (another file named appReducer) 
    //to use reducer state and dispatch must used

    ///*step3: pass it to useReducer
    ///*step4:then it able to acess state value by this statement [state , dispatch]...go to line 7
    const [state , dispatch] =useReducer(AppReducer, initialState); 
    //to del value we make reducer.it delete by id.means like primary key is used to delete record
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION', //from reducer switch.type is action type..
            payload:id   //give the id to delete
        });
    }
    function addTransaction(transaction){   //it will add whole transaction instead of id
        dispatch({
            type:'ADD_TRANSACTION', //from reducer switch.type is action type..
            payload:transaction  //give the id to delete
        });
    }


    //for provider components
    // childern is a wrap up stuff of app.js like <balance/> <income/>
    //provider gives actions to components which is wrapped in it.like below childern(balance addtransaction balance) come into action
    return (<GlobalContext.Provider value={ {
       //give the value to the provider by value={}
       //like in below transactions alredy have some values....see line 8 const initialState=
       //this transaction are used anywhere.it can be access by any component that requested using usecontext.usecontext is another react hook
       //object we can access line 8 object by state.transactions 
       ///step 7:pass them into the value of provider(state.transactions   )
       //step 8:then after provider it have to go to app.js 
       transactions:state.transactions  , 
       deleteTransaction  ,  ///for provider
       addTransaction
    } }>
        {children}  
    </GlobalContext.Provider>
        )
}

