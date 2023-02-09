import React from 'react';
import BudgetApplication from "../components/BudgetApplication";
import Layout from '../components/Layout';
import "../styles/app.scss";

export default function BudgetPage() {
    return(
        <>
            <Layout/>
            <div className="budget-app">
                <span className="header-container">
                    <h1 className="title">Jakob's Budget Planner</h1>
                </span>
                <BudgetApplication/>
            </div>
        </>);
}