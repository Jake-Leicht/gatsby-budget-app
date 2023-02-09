import * as React from "react";
import Layout from '../components/Layout';
import "../styles/app.scss";
import gatsby from "../images/gatsby.png";
import scss from "../images/scss.jpg";
import victory from "../images/victory.jpg";

const IndexPage = () => {
  return (
    <>
      <Layout />
      <div className="app">
        <h1 className="title">Tracking Finances with React</h1>
        <div className="img-container">
          <img src={gatsby} alt="Gatsby"/>
          <img src={scss} alt="SCSS"/>
          <img src={victory} alt="Victory Pie"/>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Budget & Expense App</title>
