export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ///we cannot change becuse value is deleted
                ///so have to create new state
                ...state,  ///for return intial state
                transactions: state.transactions.filter(transaction => 
                    transaction.id !== action.payload)          ///change transaction values.give all the values except deleted
            }
        case 'ADD_TRANSACTION':
            return{
                ////   action.payload (it is our new value added)
                /// state.transactions (gives all array values)
                ...state,  ///for return intial state
                transactions: [action.payload,...state.transactions]     
            }
        default:
            return state;
    }
}
//specify the state changes in response to certain action to our content
//"type" it is an id who del ,add transaction or perform any other action
/////Steps are for uderstanding the flow of reducer
///step1:go to global state file