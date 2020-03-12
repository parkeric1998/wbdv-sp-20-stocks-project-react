import React from "react";
import { connect } from "react-redux";

const StockQuoteComponent = ({ details }) => {
  // what is pc? im not sure. I guessed what the other ones are, so fix if they seem wrong.
  return (
    <ul>
      <li>Current Price: ${details.c}</li>
      <li>High: ${details.h}</li>
      <li>Low: ${details.l}</li>
      <li>Opening: ${details.o}</li>
    </ul>
  )
};

const stateToPropertyMapper = (state) => ({
  details: state.finnhub.selectedStock,
});


export default connect(stateToPropertyMapper)(StockQuoteComponent);