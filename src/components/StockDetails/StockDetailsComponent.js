import React from "react";
import StockQuoteComponent from "./StockQuoteComponent";
import "./StockDetailsComponent.css"

const StockDetailsComponent = ({ symbol }) => {
  return (
    <div class = "details-page">
      <h1 class="display-4">{`${symbol}`}</h1>
      <StockQuoteComponent />
    </div>
  )
};


export default StockDetailsComponent;