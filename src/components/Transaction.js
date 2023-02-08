import React from 'react';
import "../styles/app.scss";

export default function Transaction(props) {
    return(
        <div className="transaction-container">
            <span className="transaction-description">{props.text}</span>
            <span className="transaction-amount">${props.value}.00</span>
        </div>);
}
