import React from "react";
import { connect } from "react-redux";
import StockSearchListItemComponent from "./StockSearchListItemComponent";

const StockSearchListComponent = ({ stocks }) => {
  return (
    <ul>
      {stocks && stocks.map(stockObject => <StockSearchListItemComponent key={stockObject.symbol} stockObject={stockObject} />)}
    </ul>
  )
};

const stateToPropertyMapper = (state) => ({
  stocks: state.finnhub.filteredStocks,
});


export default connect(stateToPropertyMapper)(StockSearchListComponent);