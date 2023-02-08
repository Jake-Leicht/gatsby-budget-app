import React, { useContext } from "react";
import Applications, {Income, Expense, Balance} from "./Applications";
import "../styles/app.scss";

export default function Breakdown() {

    const income = useContext(Income);
    const expense = useContext(Expense);
    const balance = useContext(Balance);
    
    return(
        <div className="breakdown">
            <h3>Your Balance:</h3>
            <h2 className="balance">${balance}.00</h2>
            <div className="breakdown-tracking-container">
                <div className="income-container">
                    <p className="income-text">Income</p>
                    <p className="income-value">${income}.00</p>
                </div>
                <div className="expense-container">
                    <p className="expense-text">Expense</p>
                    <p className="expense-value">${expense}.00</p>
                </div>
            </div>
        </div>);
}
