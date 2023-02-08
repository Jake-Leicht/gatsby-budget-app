import React from 'react'
import {Link} from "gatsby";
import "../styles/app.scss";

export default function Navbar() {
    return (
        <nav>
            <div className="navbar-list">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/ExpensePage">Expense Sheet</Link>
                <Link className="navbar-item" to="/BudgetPage">Budget Sheet</Link>
            </div>
        </nav>
    );
}
