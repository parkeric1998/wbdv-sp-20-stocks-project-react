import React, { Component } from "react";
import userService from "../services/userService";
import { deleteStock } from "../actions/userActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MyStocksComponent extends Component {
  handleDelete = (symbol, e) => {
    e.preventDefault();
    const { deleteStock } = this.props;
    deleteStock(symbol);
  };

  render() {
    if (this.props.name !== "") {
      return (
        <ul>
          {this.props.stocks.map(stock =>
            <li key={stock.symbol}>
              <Link to={`/details/${stock.symbol}`}>{stock.symbol}</Link>
              <button onClick={(e) => this.handleDelete(stock.symbol, e)}>Delete</button>
            </li>
          )}
        </ul>
      );
    }
    return (
      <div>not logged in</div>
    )
  }

}

const stateToPropertyMapper = (state) => ({
  stocks: state.user.stocks,
  name: state.user.name
});


const dispatcherToPropsMapper = (dispatch) => ({
  deleteStock: async (symbol) => {
    await userService.deleteStock(symbol);
    dispatch(deleteStock(symbol));
  },
});


export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(MyStocksComponent);
