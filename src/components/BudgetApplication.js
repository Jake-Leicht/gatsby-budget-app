import React, {useState, createContext} from "react";
import ExpenseHistory from "./ExpenseHistory";
import "../styles/app.scss";

export const SpentSoFar = createContext();

export default function BudgetApplication() {

    const [expenseInput, setExpenseInput] = useState("");
    const [expenseValue, setExpenseValue] = useState(0);
    const [spentSoFar, setSpentSoFar] = useState("");

    const [expense, setExpense] = useState([]);

    const expensesHandler = (event) => {
        setExpense([...expense,
            {text: expenseInput,
            value: expenseValue,
            id: Math.random() * 1000}]);
            event.preventDefault();
            clearInputs();
            spentSoFarHandler();
    }

    const expenseInputHandler = (event) => {
        setExpenseInput(event.target.value);
    }

    const expenseValueHandler = (event) => {
        setExpenseValue(event.target.value);
    }

    function clearInputs(){
        setExpenseInput("");
        setExpenseValue("");
        const focus = document.getElementById("budgetApplication-text-input").focus();
    }

    const spentSoFarHandler = () => {
        let current = +spentSoFar;
        setSpentSoFar(current += +expenseValue);
    }

    return(
        <>
            <SpentSoFar.Provider value={spentSoFar}>
                <ExpenseHistory expenses={[...expense]}/>
                <div className="budgetApplication-container app">
                    <h3 className="budgetApplication-title">Add Expense</h3>
                    <div className="budgetApplication-lbl-container">
                        <label htmlFor="budgetApplication-text-input"
                        className="budgetApplication-text-lbl">Name</label>
                        <label htmlFor="budgetApplication-amount-input"
                        className="budgetApplication-amount-lbl">Cost</label>
                    </div>
                    <div className="budgetApplication-input-container">
                        <input id="budgetApplication-text-input"
                        placeholder="Enter expense..."
                        className="budgetApplication-text-input input-style"
                        type="text"
                        value={expenseInput}
                        onChange={expenseInputHandler}
                        autoFocus></input>
                        <input id="budgetApplication-amount-input"
                        placeholder="Enter amount..."
                        className="budgetApplication-amount-input input-style"
                        type="number"
                        value={expenseValue}
                        onChange={expenseValueHandler}></input>
                    </div>
                    <button className="budgetApplication-btn-style"
                    type="submit"
                    onClick={expensesHandler}>Save</button>
                </div>
            </SpentSoFar.Provider>
        </>);
}
