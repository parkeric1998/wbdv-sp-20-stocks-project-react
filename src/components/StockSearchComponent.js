import React from "react";
import { connect } from "react-redux";

const StockSearchComponent = ({ stocks }) => {
  return (
    <div>
      <h1>Search</h1>
      <ul>
        {stocks && stocks.map(stockObject => <li>{stockObject.displaySymbol}</li>)}
      </ul>
    </div>
  )
}

const stateToPropertyMapper = (state) => ({
  stocks: state.finnhub.allStocks,
});


export default connect(stateToPropertyMapper)(StockSearchComponent);