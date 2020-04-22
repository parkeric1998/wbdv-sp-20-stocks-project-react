import React, { Component } from "react";
import userService from "../../services/userService";
import { deleteStock, loginUser } from "../../actions/userActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProfileComponent extends Component {
  handleDelete = (symbol, e) => {
    e.preventDefault();
    const { deleteStock } = this.props;
    deleteStock(symbol);
  };

  render() {
    console.log(this.props.stocks);
    return (
      <div className="container">
        <div>
          {this.props.name}
        </div>
        <ul>
          {this.props.stocks.map(stock =>
            <li key={stock.symbol}>
              <Link to={`/details/${stock.symbol}`}>{stock.symbol}</Link>
              <button onClick={(e) => this.handleDelete(stock.symbol, e)}>Delete</button>
            </li>
          )}
        </ul>
      </div>
    );
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


export default connect(stateToPropertyMapper, dispatcherToPropsMapper)(ProfileComponent);
