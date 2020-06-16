import React, {useContext} from 'react';
import {GlobalContext} from '../contextfunctions/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  ///we can pull out any content of globalcontext using useContext hook
  const {transactions} =useContext(GlobalContext);

 //have todefine which transaction
  return (
      <>
    <h3>History</h3>
    <ul className="list">

      {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}    
    </ul>
    </>
  )
}

export default TransactionList
