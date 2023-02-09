import React from 'react';
import Layout from '../components/Layout';
import Applications from '../components/Applications';
import "../styles/app.scss";

export default function ExpensePage() {
    return (
    <>
        <Layout />
        <div className="app">
            <span className="header-container">
                <h1 className="title">Jakob's Expense Sheet</h1>
            </span>
            <Applications/>
        </div>
    </> 
    );
}
