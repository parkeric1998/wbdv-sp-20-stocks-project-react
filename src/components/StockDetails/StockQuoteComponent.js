import React from "react";
import { connect } from "react-redux";


const StockQuoteComponent = ({ details }) => {
  // what is pc? im not sure. I guessed what the other ones are, so fix if they seem wrong.
  return (
    <ul className="list-group">
      <li className="list-group-item">Current Price: ${details.c}</li>
      <li className="list-group-item">High: ${details.h}</li>
      <li className="list-group-item">Low: ${details.l}</li>
      <li className="list-group-item">Opening: ${details.o}</li>
    </ul>


  )
};

const stateToPropertyMapper = (state) => ({
  details: state.finnhub.selectedStock,
});


export default connect(stateToPropertyMapper)(StockQuoteComponent);