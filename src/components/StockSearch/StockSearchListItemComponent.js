import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StockSearchListItemComponent = ({ stockObject }) => {
  return (
    <li><Link to={`/stock/${stockObject.symbol}`}>{stockObject.displaySymbol}</Link></li>
  )
};

export default StockSearchListItemComponent;