import React from "react";
import { connect } from "react-redux";

const StockSearchListComponent = ({ stocks }) => {
  return (
    <ul>
      {stocks && stocks.map(stockObject => <li key={stockObject.symbol}>{stockObject.displaySymbol}</li>)}
    </ul>
  )
};

const stateToPropertyMapper = (state) => ({
  stocks: state.finnhub.filteredStocks,
});


export default connect(stateToPropertyMapper)(StockSearchListComponent);