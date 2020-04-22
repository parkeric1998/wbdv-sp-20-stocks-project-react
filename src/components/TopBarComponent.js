import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBarComponent extends Component {
  render() {
    return (
      <div className="navbar navbar-default row">
        <span className="col-2">
          <Link to="/privacy">
            Privacy Policy
          </Link>
        </span>
        <span className="col-2">
          <Link to="/home">
            Home
          </Link>
        </span>
        <span className="col-2">
          <Link to="/search">
            Search
          </Link>
        </span>
        <span className="col-2">
          <Link to="/register">
            Register
          </Link>
        </span>
        <span className="col-2">
          <Link to="/login">
            Login
          </Link>
        </span>
        <span className="col-2">
          <Link to="/profile">
            Profile
          </Link>
        </span>
      </div>
    )
  }

}

// const stateToPropertyMapper = (state) => ({
//   stocks: state.user.stocks,
//   name: state.user.name
// });
//
//
// const dispatcherToPropsMapper = (dispatch) => ({
//   deleteStock: async (symbol) => {
//     await userService.deleteStock(symbol);
//     dispatch(deleteStock(symbol));
//   },
// });


export default TopBarComponent;
