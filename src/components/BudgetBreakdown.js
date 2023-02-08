import React, { useContext } from "react";
import {SpentSoFar} from "./BudgetApplication";
import "../styles/app.scss";

export default function BudgetBreakdown(props) {

    const spentSoFar = useContext(SpentSoFar) - props.spentAdjust;
    const budget = 2000;
    const remaining = budget - spentSoFar;

    return(
        <>
            <div className="budgetBreakdown-container">
                <div className="budgetBreakdown-item"
                style={spentSoFar > budget ? {backgroundColor: "#F08080"} : {}}>
                    <h3 className="budgetBreakdown-item-content">Budget: ${budget}.00</h3>
                    <button className="budgetBreakdown-item-content budgetApplication-btn-style">Edit</button>
                </div>
                <div className="budgetBreakdown-item"
                style={spentSoFar > budget ? {backgroundColor: "#F08080"} : {}}>
                    <h3>Remaining: ${remaining}.00</h3>
                </div>
                <div className="budgetBreakdown-item"
                style={spentSoFar > budget ? {backgroundColor: "#F08080"} : {}}>
                    <h3>Spent so far: ${spentSoFar}.00</h3>
                </div>
            </div>
        </>);
}
