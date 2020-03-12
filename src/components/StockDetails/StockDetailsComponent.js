import React from "react";
import StockQuoteComponent from "./StockQuoteComponent";

const StockDetailsComponent = ({ symbol }) => {
  return (
    <div>
      <h1>{`Details for ${symbol}`}</h1>
      <StockQuoteComponent />
    </div>
  )
};


export default StockDetailsComponent;