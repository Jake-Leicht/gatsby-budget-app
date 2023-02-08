import React, {useState} from "react";
import "../styles/app.scss";

export default function Expense(props) {

    const [showImage, setShowImage] = useState(true);

    const deleteExpense = () => {
        setShowImage(false);
        props.figureHandler(props.value);
        props.skipHandler(props.id);
    }

    if(showImage === true && (props.text).toLowerCase().includes(props.filter.toLowerCase())){
        return(
            <div className="budgetExpense-container app">
                <p>{props.text}</p>
                <div className="budgetExpense-content">
                    <p className="budgetExpense-amount">${props.value}.00</p>
                    <button className="delete-btn"
                    onClick={deleteExpense}>X</button>
                </div>
            </div>);
    }
}
