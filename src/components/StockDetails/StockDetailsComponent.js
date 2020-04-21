import React from "react";
import StockQuoteComponent from "./StockQuoteComponent";
import "./StockDetailsComponent.css"

const StockDetailsComponent = ({ symbol }) => {
  return (
    <div className= "details-page">
      <h1 className="display-4">{`${symbol}`}</h1>
      <StockQuoteComponent />
    </div>
  )
};


export default StockDetailsComponent;