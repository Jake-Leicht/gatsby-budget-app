import React from 'react';
import Breakdown from './Breakdown';
import Transaction from './Transaction';
import "../styles/app.scss";

export default function History(props) {
    return(
        <>
            <Breakdown/>
            <div className="history-container">
                <h2 className="history-title">History</h2>
                {props.transactions.map((transaction) => 
                <Transaction key={transaction.id} 
                text={transaction.text} 
                value={transaction.value}/>)}
            </div>
        </>);
}
