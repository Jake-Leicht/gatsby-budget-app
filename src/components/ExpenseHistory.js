import React, {useState} from "react";
import BudgetBreakdown from "./BudgetBreakdown";
import Expense from "./Expense";
import Graph from "./Graph";
import "../styles/app.scss";

export default function ExpenseHistory(props) {

    const [filter, setFilter] = useState("");
    const [spentAdjust, setSpentAdjust] = useState(0);

    const filterHandler = (event) => {
        setFilter(event.target.value)
    }

    const figureHandler = (input) => {
        let sum = +spentAdjust;
        setSpentAdjust(sum += +input);
    }

    // todo: create array of index's to skip over
    const [skipID, setSkipID] = useState([0]);

    const skipHandler = (input) => {
        setSkipID([...skipID, input])
    }

    return(<>
        <BudgetBreakdown spentAdjust={spentAdjust}/>
        <Graph skipID={skipID} expenses={props.expenses}/>
        <div className="expenseHistory-container app">
            <h2 className="expenseHistory-title">Expenses</h2>
            <input className="expenseHistory-filter input-style"
            placeholder="Search..."
            onChange={filterHandler}></input>
            {props.expenses.map((expense) =>
                <Expense skipHandler={skipHandler} figureHandler={figureHandler} filter={filter} key={expense.id} id={expense.id} text={expense.text} value={expense.value}/>)}
        </div>
    </>);
}
