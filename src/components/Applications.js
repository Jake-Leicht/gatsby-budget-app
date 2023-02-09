import React, {createContext, useState, useEffect} from "react";
import History from "./History";
import "../styles/app.scss";

export const Income = createContext();
export const Expense = createContext();
export const Balance = createContext();

export default function Applications() {
    const [inputText, setInputText] = useState("");
    const [inputValue, setInputValue] = useState("");

    var [income, setIncome] = useState(0);
    var [expense, setExpense] = useState(0);
    var [balance, setBalance] = useState(0);

    const inputTextHandler = (event) => {
        // console.log("inputTextHandler() called");
        setInputText(event.target.value);
    }

    const inputValueHandler = (event) => {
        // console.log("inputValueHAndler() called");
        setInputValue(event.target.value);
    }

    const [transaction, setTransaction] = useState([]);

    const transactionHandler = (event) => {
        console.log("transactionHandler() called");
        setTransaction([...transaction,
            {text: inputText,
            value: inputValue,
            id: Math.random() * 1000}]);
            event.preventDefault();
            clearInputs();
            // console.log(inputValue);
            if(inputValue >= 0){
                incomeHandler(inputValue);
            }
            else{
                expenseHandler(inputValue);
            }
    }

    function clearInputs(){
        setInputText("");
        setInputValue("");
        const focus = document.getElementById("application-text").focus();
    }

    // * +var treats variable like number not string (doesn't concatenate)
    // todo: use useEffect to update vars on variable change
    const incomeHandler = (event) => {
        console.log("incomeHandler() called");
        let sum = +income;
        setIncome(sum += +event);
    }

    const expenseHandler = (event) => {
        console.log("expenseHandler() called");
        let sum = +expense;
        setExpense(sum += +event);
    }

    useEffect(() => {
        // console.log("balanceHandler() called");
        let sum = +income;
        setBalance(expense + sum);
    }, [income, expense]);

    return (
        <>
            <Income.Provider value={income}>
                <Expense.Provider value={expense}>
                    <Balance.Provider value={balance}>
                        <History transactions={[...transaction]}/>
                        <div className="application-container">
                            <h3 className="application-title">Add new Transactions</h3>
                            <label className="application-lbl"
                            htmlFor="application-text">Text</label>
                            <input className="application-input input-style"
                            id="application-text"
                            placeholder="Enter Text..."
                            type="text"
                            value={inputText}
                            onChange={inputTextHandler}
                            autoFocus></input>
                            <label className="application-lbl"
                            htmlFor="application-amount">Amount</label>
                            <p>Negative * Expense | Positive * Income</p>
                            <input className="application-input input-style"
                            id="application-amount"
                            placeholder="Enter Amount..."
                            type="number"
                            value={inputValue}
                            onChange={inputValueHandler}></input>
                            <button className="application-btn"
                            type="submit"
                            onClick={transactionHandler}>Add Transaction</button>
                        </div>
                    </Balance.Provider>
                </Expense.Provider>
            </Income.Provider>
        </>
    );
}
